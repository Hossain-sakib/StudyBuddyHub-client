import { cp, mkdir, readFile, writeFile, lstat, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const client = fileURLToPath(new URL("..", import.meta.url));
const backend = path.resolve(
  process.argv[2] || path.join(client, "../../StudyBuddyHub-server"),
);
const target = path.join(client, ".netlify-deploy");
const marker = path.join(target, ".studybuddy-generated");
try {
  const stat = await lstat(target);
  if (
    stat.isSymbolicLink() ||
    !(await readFile(marker, "utf8")).startsWith(
      "Studybuddy generated deployment",
    )
  )
    throw new Error(
      "Refusing to overwrite an unrecognized deployment directory",
    );
  await rm(target, { recursive: true });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
await mkdir(target, { recursive: true });
await writeFile(marker, "Studybuddy generated deployment\n");
await cp(path.join(client, "dist"), path.join(target, "dist"), {
  recursive: true,
});
for (const relative of [
  "index.js",
  "assignments.js",
  "firebase-token.js",
  "readiness.js",
  "notifications.js",
  "account.js",
  "mailer.js",
  "public-routes.js",
  "public-pages.js",
  "seed-samples.js",
  "admin/routes.js",
  "admin/resources.js",
  "admin/workflows.js",
  "media/routes.js",
  "data/catalog.json",
  "data/demo-content.json",
  "netlify/functions/api.js",
]) {
  await mkdir(path.dirname(path.join(target, "backend", relative)), {
    recursive: true,
  });
  await cp(
    path.join(backend, relative),
    path.join(target, "backend", relative),
  );
}
for (const name of ["package.json", "package-lock.json"])
  await cp(path.join(backend, name), path.join(target, name));
const builtHtml = await readFile(path.join(client, "dist/index.html"), "utf8");
const stylesheet = builtHtml.match(/href="([^"]+\.css)"/)?.[1];
if (!stylesheet)
  throw new Error("The CMS stylesheet was not found in the build.");
await writeFile(
  path.join(target, "backend/data/page-assets.json"),
  JSON.stringify({
    stylesheet,
    media: JSON.parse(
      await readFile(
        path.join(client, "src/platform/media-assets.json"),
        "utf8",
      ),
    ),
  }),
);
await cp(
  path.join(client, "config/netlify.toml"),
  path.join(target, "netlify.toml"),
);
console.log(
  `Prepared frontend and API in ${target}. No credentials or user data copied.`,
);
