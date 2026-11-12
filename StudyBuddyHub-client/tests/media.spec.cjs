const { test, expect } = require("@playwright/test");
test("owned brand images recover when the CDN fails before or after hydration", async ({
  page,
}) => {
  await page.route("https://res.cloudinary.com/**", (route) => route.abort());
  await page.goto("/");
  const mark = page.locator("header img").first();
  await expect(mark).toHaveAttribute("src", "/brand/mark.svg");
  await expect
    .poll(() => mark.evaluate((img) => img.complete && img.naturalWidth > 0))
    .toBeTruthy();
  await expect(page.locator('img[src="/brand/learning-hero.svg"]')).toHaveCount(
    1,
  );
});
