import { readFile, writeFile } from "node:fs/promises";
const catalog = JSON.parse(
  await readFile(
    new URL("../src/platform/catalog.json", import.meta.url),
    "utf8",
  ),
);
const summary = catalog.map(({ quiz, lessons, ...course }) => ({
  ...course,
  lessons: lessons.map(({ title }) => ({ title })),
}));
await writeFile(
  new URL("../src/platform/catalog-summary.json", import.meta.url),
  JSON.stringify(summary, null, 2) + "\n",
);
