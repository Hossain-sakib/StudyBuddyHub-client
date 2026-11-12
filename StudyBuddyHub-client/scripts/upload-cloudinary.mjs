import { createRequire } from "node:module";
import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
const root = fileURLToPath(new URL("..", import.meta.url));
const publicRoot = path.join(root, "public");
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(file)));
    else if (/\.(png|jpe?g|webp|svg|ico)$/i.test(entry.name)) result.push(file);
  }
  return result;
}
const files = (await walk(publicRoot)).sort();
if (process.argv.includes("--dry-run")) {
  console.log(`Ready to upload ${files.length} owned image files:`);
  for (const file of files) console.log(path.relative(publicRoot, file));
  process.exit(0);
}
const require = createRequire(
  path.resolve(root, "../../StudyBuddyHub-server/package.json"),
);
const cloudinary = require("cloudinary").v2;
if (
  !process.env.CLOUDINARY_URL &&
  !(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  )
)
  throw new Error(
    "Configure Cloudinary server credentials before uploading. Do not put them in source files.",
  );
if (!process.env.CLOUDINARY_URL)
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
else cloudinary.config({ secure: true });
const manifestFile = path.join(root, "src/platform/media-assets.json");
const manifest = JSON.parse(await readFile(manifestFile, "utf8"));
for (const file of files) {
  const relative = path.relative(publicRoot, file).split(path.sep).join("/");
  const digest = createHash("sha256")
    .update(await readFile(file))
    .digest("hex")
    .slice(0, 16);
  const id = `studybuddy/site/${relative.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9/_-]/g, "-")}-${digest}`;
  if (manifest["/" + relative]?.id === id) {
    console.log(`Already uploaded: ${relative}`);
    continue;
  }
  const result = await cloudinary.uploader.upload(file, {
    public_id: id,
    resource_type: "image",
    type: "upload",
    overwrite: false,
    unique_filename: false,
  });
  if (!result.secure_url?.startsWith("https://res.cloudinary.com/"))
    throw new Error("Unexpected Cloudinary image URL.");
  const response = await fetch(result.secure_url, {
    method: "HEAD",
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      `Uploaded ${relative}, but public delivery failed (${response.status}). Check Cloudinary asset-type delivery settings before retrying.`,
    );
  manifest["/" + relative] = { url: result.secure_url, id };
  await writeFile(manifestFile, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Uploaded and verified: ${relative}`);
}
console.log(
  `Saved ${Object.keys(manifest).length} image mappings. Rebuild and deploy the frontend to use them. Local originals remain available as fallbacks.`,
);
