const { test, expect } = require("@playwright/test");
async function register(page) {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Create an account", exact: true })
    .click();
  await page.getByLabel("Your name", { exact: true }).fill("New Learner");
  await page
    .getByLabel("Email address")
    .fill(`updates-${Date.now()}@example.com`);
  await page.getByLabel("Password", { exact: true }).fill("test-password-123");
  await page.getByRole("button", { name: "Let’s get started" }).click();
  await expect(
    page.getByRole("heading", { name: /Hey New Learner/ }),
  ).toBeVisible();
}
test("shared dropdowns support keyboard, selection, Escape, mobile placement and persisted preferences", async ({
  page,
}) => {
  await register(page);
  await page.goto("/#settings");
  const goal = page.getByRole("combobox", { name: "Your weekly goal" });
  await goal.click();
  await expect(
    page.getByRole("listbox", { name: "Your weekly goal" }),
  ).toBeVisible();
  await goal.press("Home");
  await goal.press("ArrowDown");
  await goal.press("Enter");
  await expect(goal).toContainText("2 active days");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await page.reload();
  await expect(goal).toContainText("2 active days");
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 740 });
    await goal.click();
    const box = await page.getByRole("listbox").boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(width);
    await goal.press("Escape");
    await expect(page.getByRole("listbox")).toHaveCount(0);
  }
  await page.goto("/#courses");
  const sort = page.getByRole("combobox", { name: "Sort courses" });
  await sort.click();
  await page.getByRole("option", { name: "A to Z", exact: true }).click();
  await expect(sort).toContainText("A to Z");
});
test("admin curriculum forms and dropdowns work inside dialogs in both themes", async ({
  page,
}) => {
  const {
    resources,
  } = require("/workspace/StudyBuddyHub-server/admin/resources");
  const records = { courses: [] };
  const state = {
    name: "Admin",
    completed: {},
    enrolled: [],
    bookmarks: [],
    quizzes: {},
    assignments: [],
    messages: [],
    goal: 3,
    activity: [],
  };
  await page.route("**/api/session", (r) =>
    r.fulfill({
      json: {
        user: {
          id: "admin-ui",
          name: "Admin",
          email: "admin@example.com",
          role: "admin",
        },
        state,
      },
    }),
  );
  await page.route("**/api/admin/overview", (r) =>
    r.fulfill({
      json: {
        counts: { courses: records.courses.length },
        resources: Object.entries(resources).map(([key, v]) => ({ key, ...v })),
        auditLogs: [],
      },
    }),
  );
  await page.route("**/api/admin/integrations", (r) =>
    r.fulfill({
      json: {
        database: "connected",
        media: "missing",
        email: "missing",
        demo: { total: 174 },
      },
    }),
  );
  await page.route("**/api/admin/resources/courses", async (r) => {
    if (r.request().method() === "POST") {
      const row = { ...r.request().postDataJSON(), id: "new-course" };
      records.courses.push(row);
      await r.fulfill({ status: 201, json: row });
    } else await r.fulfill({ json: records.courses });
  });
  await page.goto("/#admin");
  await page.getByRole("button", { name: "Courses", exact: true }).click();
  await page.getByRole("button", { name: "Add record" }).click();
  await page
    .getByLabel("Course title", { exact: false })
    .fill("A complete new course");
  await page.getByLabel("Lesson 1 title", { exact: true }).fill("Introduction");
  await page.getByLabel("Lesson 1 content").fill("Useful first lesson.");
  await page.getByRole("button", { name: "Add lesson", exact: true }).click();
  await page.getByLabel("Lesson 2 title", { exact: true }).fill("Try it");
  await page.getByLabel("Lesson 2 content").fill("Practice the skill.");
  await page.getByLabel("Question 1", { exact: true }).fill("Which answer?");
  for (let i = 1; i <= 3; i++)
    await page
      .getByLabel(`Question 1 answer ${i}`, { exact: true })
      .fill(`Choice ${i}`);
  const answer = page.getByRole("combobox", {
    name: "Correct answer for question 1",
  });
  await answer.click();
  await page.getByRole("option", { name: "Answer 2", exact: true }).click();
  await expect(answer).toContainText("Answer 2");
  await page.getByRole("combobox", { name: "Category", exact: true }).click();
  await page.getByRole("option", { name: "Development", exact: true }).click();
  for (const mode of ["light", "dark"]) {
    await page
      .locator("html")
      .evaluate(
        (el, dark) => el.classList.toggle("dark", dark),
        mode === "dark",
      );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("combobox", { name: "Level", exact: true }).click();
    await expect(page.getByRole("listbox")).toBeVisible();
    await page.screenshot({ path: `/tmp/studybuddy-admin-form-${mode}.png` });
    await page
      .getByRole("combobox", { name: "Level", exact: true })
      .press("Escape");
    await expect(page.getByRole("dialog")).toBeVisible();
  }
  await page.getByRole("button", { name: "Save record" }).click();
  await expect(
    page.getByRole("cell", { name: "A complete new course", exact: true }),
  ).toBeVisible();
  expect(records.courses[0].lessons).toHaveLength(2);
  expect(records.courses[0].quiz[0].answer).toBe(1);
  expect(records.courses[0].category).toBe("Development");
});
test("recovery form and reset-link page show clear results without exposing the token in the URL", async ({
  page,
}) => {
  await page.route("**/api/auth/forgot-password", (r) =>
    r.fulfill({ json: { message: "Check your inbox for a recovery link." } }),
  );
  await page.goto("/");
  await page
    .getByRole("button", { name: "Sign in", exact: true })
    .first()
    .click();
  await page.getByRole("button", { name: "Forgot password?" }).click();
  await page.getByLabel("Email address").fill("learner@example.com");
  await page.getByRole("button", { name: "Send recovery link" }).click();
  await expect(
    page.getByText("Check your inbox for a recovery link."),
  ).toBeVisible();
  await page.route("**/api/auth/reset-password", (r) =>
    r.fulfill({
      json: { message: "Password updated. Sign in with your new password." },
    }),
  );
  await page.goto("/#reset-password=" + "a".repeat(64));
  await page
    .getByRole("heading", { name: "A fresh start for your account" })
    .waitFor();
  await expect(page).not.toHaveURL(/reset-password=/);
  await page
    .getByLabel("New password", { exact: true })
    .fill("new-password-123");
  await page
    .getByLabel("Confirm new password", { exact: true })
    .fill("new-password-123");
  await page.getByRole("button", { name: "Update password" }).click();
  await expect(page.getByRole("status")).toContainText("Password updated.");
});
