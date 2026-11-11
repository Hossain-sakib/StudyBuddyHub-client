const { test, expect } = require("@playwright/test");
const widths = [320, 390, 768, 1024, 1440, 1920];
async function noOverflow(page) {
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBeTruthy();
}
async function theme(page, value) {
  const dark = await page
    .locator("html")
    .evaluate((el) => el.classList.contains("dark"));
  if (dark !== (value === "dark"))
    await page
      .getByRole("button", {
        name: value === "dark" ? "Switch to dark mode" : "Switch to light mode",
      })
      .click();
  await expect
    .poll(() =>
      page.locator("html").evaluate((el) => el.classList.contains("dark")),
    )
    .toBe(value === "dark");
}
async function register(page) {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Create an account", exact: true })
    .click();
  await page.getByLabel("Your name", { exact: true }).fill("Design Learner");
  await page
    .getByLabel("Email address")
    .fill(`design-${Date.now()}@example.com`);
  await page
    .getByLabel("Password", { exact: true })
    .fill("design-test-password-123");
  await page.getByRole("button", { name: "Let’s get started" }).click();
  await expect(
    page.getByRole("heading", { name: /Hey Design Learner/ }),
  ).toBeVisible();
}
test("public website has usable light/dark layouts from small phones to wide desktops", async ({
  page,
}) => {
  test.setTimeout(120000);
  await page.goto("/");
  await page.getByRole("heading", { name: /Big ideas start/ }).waitFor();
  for (const mode of ["light", "dark"]) {
    await theme(page, mode);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      await noOverflow(page);
      const headline = page.getByRole("heading", { name: /Big ideas start/ });
      await expect(headline).toBeVisible();
      const span = headline.locator("span").first();
      await expect
        .poll(() =>
          span.evaluate((el) => getComputedStyle(el).webkitTextFillColor),
        )
        .not.toBe("rgba(0, 0, 0, 0)");
      if ([390, 1440].includes(width)) {
        await page.screenshot({
          path: `/tmp/studybuddy-public-${mode}-${width}.png`,
          fullPage: true,
        });
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.getByRole("button", { name: "Next courses" }).click();
  await expect(
    page.getByText("7–12 of 18 courses", { exact: false }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Previous courses" }).click();
  await page
    .getByRole("button", { name: "Preview UI Design Fundamentals" })
    .click();
  await expect(
    page.getByRole("dialog", { name: "UI Design Fundamentals" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close course preview" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.setViewportSize({ width: 320, height: 700 });
  await page.getByRole("button", { name: "Open website menu" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile website navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: "Mobile website navigation" }),
  ).toHaveCount(0);
});
test("every learner workspace page fits both themes and representative device widths", async ({
  page,
}) => {
  test.setTimeout(120000);
  await register(page);
  const routes = [
    ["dashboard", /Hey Design Learner/],
    ["courses", /Your next “aha!” moment/],
    ["assignments", /Big ideas. Small steps/],
    ["quizzes", /Put your knowledge/],
    ["community", /Better, together/],
    ["progress", /Look how far/],
    ["settings", /Make yourself at home/],
  ];
  for (const mode of ["light", "dark"]) {
    await theme(page, mode);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      for (const [id, title] of routes) {
        await page.evaluate((route) => {
          location.hash = route;
        }, id);
        await expect(page.getByRole("heading", { name: title })).toBeVisible();
        await noOverflow(page);
        if (
          width === 1440 &&
          ["dashboard", "community", "settings"].includes(id)
        )
          await page.screenshot({
            path: `/tmp/studybuddy-${id}-${mode}.png`,
            fullPage: true,
          });
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("link", { name: "Overview", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("link", { name: "Overview", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: /Hey Design Learner/ }),
  ).toBeVisible();
});
test("saved courses, notification reads, and deadline-based focus timer work", async ({
  page,
}) => {
  await page.clock.install();
  await register(page);
  await page
    .getByRole("button", { name: "Save UI Design Fundamentals", exact: true })
    .click();
  await expect(
    page.getByRole("button", {
      name: "Unsave UI Design Fundamentals",
      exact: true,
    }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.evaluate(() => {
    location.hash = "courses";
  });
  await page.getByRole("button", { name: "Saved", exact: true }).click();
  await expect(page.locator(".course-card")).toHaveCount(1);
  await page.reload();
  await page.getByRole("button", { name: "Saved", exact: true }).click();
  await expect(page.locator(".course-card")).toHaveCount(1);
  await page.getByRole("button", { name: /^Notifications/ }).click();
  await expect(
    page.getByRole("dialog", { name: "Notifications" }),
  ).toBeVisible();
  await expect(
    page.getByText("Your next chapter starts here", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Mark all as read" }).click();
  await expect(
    page.getByRole("button", { name: "Mark all as read" }),
  ).toHaveCount(0);
  await page.keyboard.press("Escape");
  await page.evaluate(() => {
    location.hash = "dashboard";
  });
  await page.getByRole("button", { name: "Start focus session" }).click();
  await page.clock.fastForward(60000);
  await expect(page.getByRole("timer")).toHaveText("24:00");
  await page.getByRole("button", { name: "Pause session" }).click();
  await page.clock.fastForward(10000);
  await expect(page.getByRole("timer")).toHaveText("24:00");
  await page.getByRole("button", { name: "Reset timer" }).click();
  await expect(page.getByRole("timer")).toHaveText("25:00");
});
