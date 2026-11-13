const { test, expect } = require("@playwright/test");
test("public visitors load one lean catalog request and no private workspace or Google font modules", async ({
  page,
}) => {
  const requests = [];
  page.on("request", (r) => requests.push(r.url()));
  await page.goto("/");
  await page.getByRole("heading", { name: /Big ideas start/ }).waitFor();
  await expect(
    page.getByRole("link", { name: "UI Design Fundamentals", exact: true }),
  ).toHaveAttribute("href", "/courses/design");
  await expect
    .poll(
      () =>
        requests.filter((url) => new URL(url).pathname === "/api/catalog")
          .length,
    )
    .toBe(1);
  expect(
    requests.some((url) => new URL(url).pathname.endsWith("/Platform.jsx")),
  ).toBe(false);
  expect(
    requests.some((url) => /fonts\.(googleapis|gstatic)\.com/.test(url)),
  ).toBe(false);
  await page
    .getByRole("button", { name: "Create an account", exact: true })
    .click();
  await page.getByRole("button", { name: "Let’s get started" }).waitFor();
  expect(
    requests.some((url) => new URL(url).pathname.endsWith("/Platform.jsx")),
  ).toBe(true);
});
test("course pages are readable and have their own metadata without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    baseURL: "http://127.0.0.1:5174",
    javaScriptEnabled: false,
  });
  try {
    const page = await context.newPage();
    const response = await page.goto("/courses/design");
    expect(response.status()).toBe(200);
    await expect(
      page.getByRole("heading", {
        name: "UI Design Fundamentals",
        exact: true,
      }),
    ).toBeVisible();
    await expect(page).toHaveTitle("UI Design Fundamentals — Studybuddy");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/courses\/design$/,
    );
    const graph = JSON.parse(
      await page.locator('script[type="application/ld+json"]').textContent(),
    );
    expect(graph["@graph"][0]["@type"]).toBe("Course");
    await expect(
      page.getByRole("link", { name: /Create an account to start/ }),
    ).toHaveAttribute("href", "/?signup=1");
  } finally {
    await context.close();
  }
});
test("course signup links open registration on the public website", async ({
  page,
}) => {
  await page.goto("/?signup=1");
  await expect(
    page.getByRole("heading", { name: "Your next chapter starts here." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Let’s get started" }),
  ).toBeVisible();
});
