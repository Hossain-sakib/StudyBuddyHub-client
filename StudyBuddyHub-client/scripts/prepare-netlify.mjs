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
  "cms.js",
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
const stylesheet = builtHtml.match(/href="([^\"]+\.css)"/)?.[1];
if (!stylesheet)
  throw new Error("The CMS stylesheet was not found in the build.");
await writeFile(
  path.join(target, "backend/data/page-assets.json"),
  JSON.stringify({ stylesheet }),
);
await writeFile(
  path.join(target, "netlify.toml"),
  `[build]\n  publish = "dist"\n  functions = "backend/netlify/functions"\n\n[build.environment]\n  NODE_VERSION = "24"\n\n[functions]\n  node_bundler = "esbuild"\n  included_files = ["backend/data/catalog.json", "backend/data/demo-content.json", "backend/data/page-assets.json"]\n\n[[redirects]]\n  from = "/api/*"\n  to = "/.netlify/functions/api/api/:splat"\n  status = 200\n  force = true\n\n[[redirects]]\n  from = "/resources/*"\n  to = "/.netlify/functions/api/resources/:splat"\n  status = 200\n  force = true\n\n[[redirects]]\n  from = "/sitemap.xml"\n  to = "/.netlify/functions/api/sitemap.xml"\n  status = 200\n  force = true\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Content-Type-Options = "nosniff"\n    Referrer-Policy = "strict-origin-when-cross-origin"\n    X-Frame-Options = "DENY"\n    Permissions-Policy = "camera=(), microphone=(), geolocation=()"\n    Cross-Origin-Opener-Policy = "same-origin-allow-popups"\n`,
);
console.log(
  `Prepared frontend and API in ${target}. No credentials or user data copied.`,
);
