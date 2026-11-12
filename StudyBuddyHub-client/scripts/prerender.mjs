import { readFile, writeFile } from "node:fs/promises";
import { render } from "../.ssr/entry-server.js";
const origin = (
  process.env.SITE_URL || "https://studybuddy-hub.netlify.app"
).replace(/\/$/, "");
const file = new URL("../dist/index.html", import.meta.url);
let html = await readFile(file, "utf8");
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`,
);
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": origin + "/#organization",
      name: "Studybuddy",
      url: origin,
      logo: origin + "/icon-512.png",
    },
    {
      "@type": "WebSite",
      "@id": origin + "/#website",
      name: "Studybuddy",
      url: origin,
      publisher: { "@id": origin + "/#organization" },
    },
    {
      "@type": "WebPage",
      name: "Studybuddy — Learn, practice, and grow together",
      url: origin,
      description:
        "Explore beginner-friendly courses, practice challenges, and a learning community.",
    },
  ],
};
html = html.replace(
  "</head>",
  `<link rel="canonical" href="${origin}/" />\n<meta property="og:type" content="website" />\n<meta property="og:title" content="Studybuddy — Learn, practice, and grow together" />\n<meta property="og:description" content="Explore beginner-friendly courses, practice challenges, and a learning community." />\n<meta property="og:url" content="${origin}/" />\n<meta property="og:image" content="${origin}/brand/social-card.png" />\n<meta name="twitter:card" content="summary_large_image" />\n<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>\n</head>`,
);
const media = JSON.parse(
  await readFile(
    new URL("../src/platform/media-assets.json", import.meta.url),
    "utf8",
  ),
);
for (const [source, asset] of Object.entries(media)) {
  html = html
    .replaceAll(`src="${source}"`, `src="${asset.url}"`)
    .replaceAll(`href="${source}"`, `href="${asset.url}"`)
    .replaceAll(`${origin}${source}`, asset.url);
}
await writeFile(file, html);
await writeFile(
  new URL("../dist/robots.txt", import.meta.url),
  `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /.netlify/\nSitemap: ${origin}/sitemap.xml\n`,
);
await writeFile(
  new URL("../dist/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`,
);
console.log(
  "Prerendered public homepage, canonical/social metadata, structured data, robots.txt and sitemap.",
);
