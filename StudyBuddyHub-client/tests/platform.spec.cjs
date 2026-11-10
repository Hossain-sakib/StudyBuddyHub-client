const { test, expect } = require("@playwright/test");
test("signed-in learner completes a lesson, quiz, assignment, and finds courses on mobile", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await register(page, "Alex", `alex-${Date.now()}@example.com`);
  await page
    .getByRole("button", { name: "Pick up where you left off" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Start with visual hierarchy" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Mark complete" }).click();
  await expect(
    page.getByRole("heading", { name: "Build a thoughtful color palette" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close dialog" }).click();
  await page.reload();
  await expect(page.getByText("33%", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Practice quizzes" }).click();
  await page
    .getByRole("button", { name: "Let’s give it a go" })
    .first()
    .click();
  for (const text of [
    "Guide attention in order of importance",
    "4.5:1",
    "A spacing scale",
  ])
    await page.getByLabel(text, { exact: true }).check();
  await page.getByRole("button", { name: "Check my answers" }).click();
  await expect(
    page.getByRole("heading", { name: "Look at you go!" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "See my progress" }).click();
  await expect(
    page.getByRole("heading", { name: "Curious mind" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Assignments", exact: true }).click();
  await page.getByRole("button", { name: "New assignment" }).click();
  await page.getByLabel("Assignment title").fill("Design practice");
  await page.getByRole("button", { name: "Add assignment" }).click();
  await page.getByRole("button", { name: "Submit work" }).click();
  await page
    .getByLabel("Your work or project link")
    .fill("My accessible color palette.");
  await page.getByRole("button", { name: "Save submission" }).click();
  await expect(
    page.getByText("Your submission: My accessible color palette."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete Design practice" }).click();
  await page.getByRole("button", { name: "Remove assignment" }).click();
  await expect(
    page.getByRole("heading", { name: "Design practice", exact: true }),
  ).toHaveCount(0);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("link", { name: "My learning", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Search courses" })
    .fill("javascript");
  await expect(page.locator(".course-card")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: "JavaScript, Step by Step" }),
  ).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    )
    .toBeTruthy();
  await page
    .getByRole("textbox", { name: "Search courses" })
    .fill("nothing matches this");
  await expect(
    page.getByRole("heading", { name: "No courses found" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show all courses" }).click();
  await expect(page.locator(".course-card")).toHaveCount(6);
  expect(errors).toEqual([]);
});
async function register(page, name, email) {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Create an account", exact: true })
    .click();
  await page.getByLabel("Your name", { exact: true }).fill(name);
  await page.getByLabel("Email address").fill(email);
  await page
    .getByLabel("Password", { exact: true })
    .fill("safe-test-password-123");
  await page.getByRole("button", { name: "Let’s get started" }).click();
  await expect(
    page.getByRole("heading", { name: new RegExp(`Hey ${name}`) }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Account connected" }),
  ).toBeVisible();
}
test("accounts save progress on server, shared chat reaches another learner, logout and login work", async ({
  page,
  browser,
}) => {
  const email = `learner-${Date.now()}@example.com`;
  await register(page, "Jamie", email);
  await page
    .getByRole("button", { name: "Pick up where you left off" })
    .click();
  await page.getByRole("button", { name: "Mark complete" }).click();
  await page.getByRole("button", { name: "Close dialog" }).click();
  await page.reload();
  await expect(page.getByText("33%", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: /Study lounge/ }).click();
  await page
    .getByRole("textbox", { name: "Message", exact: true })
    .fill("Who wants to practice CSS today?");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(
    page.getByText("Who wants to practice CSS today?", { exact: true }),
  ).toBeVisible();
  const context = await browser.newContext();
  const buddy = await context.newPage();
  await register(buddy, "Robin", `buddy-${Date.now()}@example.com`);
  await buddy.getByRole("link", { name: /Study lounge/ }).click();
  await expect(
    buddy.getByText("Who wants to practice CSS today?", { exact: true }),
  ).toBeVisible();
  await buddy.getByRole("link", { name: "My progress", exact: true }).click();
  await expect(
    buddy.getByText("0 of 3 lessons completed").first(),
  ).toBeVisible();
  await page.getByRole("link", { name: "Settings", exact: true }).click();
  await page.getByRole("button", { name: "Sign out" }).click();
  await expect(
    page.getByRole("heading", { name: /Big ideas start/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.getByLabel("Email address").fill(email);
  await page
    .getByLabel("Password", { exact: true })
    .fill("safe-test-password-123");
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Sign in", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Account connected" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "My progress", exact: true }).click();
  await expect(page.getByText("1 of 3 lessons completed")).toBeVisible();
  await context.close();
});
test("community assignment author reviews and grades another learner’s submission", async ({
  page,
  browser,
}) => {
  await register(page, "Taylor", `author-${Date.now()}@example.com`);
  await page.getByRole("link", { name: "Assignments", exact: true }).click();
  await page
    .getByRole("button", { name: "Community assignments", exact: true })
    .click();
  await page.getByRole("button", { name: "Share an assignment" }).click();
  await page
    .getByLabel("Title", { exact: true })
    .fill("Create a thoughtful card");
  await page
    .getByLabel("Instructions")
    .fill("Use clear hierarchy and accessible colors.");
  await page
    .getByRole("button", { name: "Share assignment", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Create a thoughtful card" }),
  ).toBeVisible();
  const context = await browser.newContext();
  const learner = await context.newPage();
  await register(learner, "Casey", `student-${Date.now()}@example.com`);
  await learner.getByRole("link", { name: "Assignments", exact: true }).click();
  await learner
    .getByRole("button", { name: "Community assignments", exact: true })
    .click();
  const card = learner.locator(".shared-card").filter({
    has: learner.getByRole("heading", { name: "Create a thoughtful card" }),
  });
  await card.getByRole("button", { name: "View assignment" }).click();
  await learner
    .getByLabel("Your work or project link")
    .fill("I built a card using semantic headings and tested contrast.");
  await learner.getByRole("button", { name: "Submit my work" }).click();
  await expect(
    learner.getByText("Submitted · awaiting feedback"),
  ).toBeVisible();
  await page.reload();
  await page
    .getByRole("button", { name: "Community assignments", exact: true })
    .click();
  const authorCard = page.locator(".shared-card").filter({
    has: page.getByRole("heading", { name: "Create a thoughtful card" }),
  });
  await authorCard
    .getByRole("button", { name: "Review 1 submissions" })
    .click();
  await expect(
    page.getByText(
      "I built a card using semantic headings and tested contrast.",
    ),
  ).toBeVisible();
  await page.getByRole("button", { name: "Give marks & feedback" }).click();
  await page.getByLabel("Marks (out of 100)").fill("92");
  await page
    .getByLabel("Helpful feedback")
    .fill("Excellent structure. Try adding a focus style next.");
  await page.getByRole("button", { name: "Save feedback" }).click();
  await learner.reload();
  await learner
    .getByRole("button", { name: "Community assignments", exact: true })
    .click();
  await expect(
    learner.getByText("92/100 marks · feedback ready"),
  ).toBeVisible();
  await learner.getByRole("button", { name: "View my submission" }).click();
  await expect(
    learner.getByText("Excellent structure. Try adding a focus style next."),
  ).toBeVisible();
  await expect(
    learner.getByRole("button", { name: "Submit my work" }),
  ).toHaveCount(0);
  await context.close();
});
test("Google option is available on both sign-up and sign-in forms", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Create an account", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Continue with Google", exact: true }),
  ).toBeEnabled();
  await expect(page.getByLabel("Your name", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Already a buddy? Sign in" }).click();
  await expect(
    page.getByRole("button", { name: "Continue with Google", exact: true }),
  ).toBeEnabled();
  await expect(page.getByLabel("Your name", { exact: true })).toHaveCount(0);
  await expect(page.getByLabel("Email address")).toBeVisible();
});

test("visitors see the branded website and cannot open the dashboard without signing in", async ({
  page,
}) => {
  await page.goto("/#dashboard");
  await expect(
    page.getByRole("heading", { name: /Big ideas start/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toHaveCount(0);
  await expect(page.getByRole("heading", { name: /Hey Alex/ })).toHaveCount(0);
  await page
    .getByRole("link", { name: "Explore courses", exact: true })
    .first()
    .click();
  await expect(page.locator(".public-course")).toHaveCount(6);
  await page
    .getByRole("button", { name: "Start learning", exact: true })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Continue with Google", exact: true }),
  ).toBeEnabled();
  await page.getByRole("button", { name: "Close dialog" }).click();
  const favicon = await page.request.get("/favicon.svg");
  expect(favicon.ok()).toBeTruthy();
  expect(await favicon.text()).toContain('viewBox="0 0 64 64"');
  expect((await page.request.get("/apple-touch-icon.png")).ok()).toBeTruthy();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.screenshot({
    path: "/tmp/studybuddy-public-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    )
    .toBeTruthy();
  await page.screenshot({
    path: "/tmp/studybuddy-public-mobile.png",
    fullPage: true,
  });
  await page
    .getByRole("button", { name: "Start your learning journey" })
    .click();
  await expect(page.getByLabel("Your name", { exact: true })).toBeVisible();
});
test("public course discovery filters topics, searches, and shows starter challenges", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".public-course")).toHaveCount(6);
  await page.getByRole("button", { name: "Design", exact: true }).click();
  await expect(page.locator(".public-course")).toHaveCount(1);
  await page.getByRole("button", { name: "All topics", exact: true }).click();
  await page
    .getByRole("searchbox", { name: "Search public courses" })
    .fill("Everyday Data");
  await expect(
    page.getByRole("heading", { name: "Make Sense of Everyday Data" }),
  ).toBeVisible();
  await expect(page.locator(".public-course")).toHaveCount(1);
  await expect(page.locator(".practice-card")).toHaveCount(3);
  await page
    .locator("summary")
    .filter({ hasText: "Do I need experience to start?" })
    .click();
  await expect(
    page.getByText(/No. Begin with a beginner course/),
  ).toBeVisible();
});
test("admin workspace has usable record forms and module navigation", async ({
  page,
}) => {
  const state = {
    name: "Admin",
    completed: {},
    enrolled: ["design"],
    quizzes: {},
    assignments: [],
    messages: [],
    goal: 3,
    activity: [],
  };
  let rows = [];
  const resource = {
    key: "contacts",
    title: "Contacts",
    group: "CRM",
    fields: {
      name: { label: "Full name", type: "text", required: true, max: 200 },
      email: { label: "Email", type: "email", max: 254 },
    },
  };
  await page.route("**/api/session", (route) =>
    route.fulfill({
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
  await page.route("**/api/admin/overview", (route) =>
    route.fulfill({
      json: {
        counts: { users: 1, contacts: rows.length },
        resources: [resource],
        auditLogs: [],
      },
    }),
  );
  await page.route("**/api/admin/resources/contacts", async (route) => {
    if (route.request().method() === "POST") {
      rows.push({ ...route.request().postDataJSON(), id: "contact-1" });
      await route.fulfill({ status: 201, json: rows[0] });
    } else await route.fulfill({ json: rows });
  });
  await page.goto("/#admin");
  await expect(
    page.getByRole("heading", { name: "Your control center" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Contacts", exact: true }).click();
  await page.getByRole("button", { name: "Add record" }).click();
  await page.getByLabel("Full name", { exact: false }).fill("Sample Contact");
  await page.getByLabel("Email", { exact: true }).fill("sample@example.com");
  await page.getByRole("button", { name: "Save record" }).click();
  await expect(
    page.getByRole("cell", { name: "Sample Contact", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Export CSV" })).toBeVisible();
  await page.screenshot({ path: "/tmp/studybuddy-admin.png", fullPage: true });
});
test('published CMS pages render content as text, without executing embedded markup', async ({ page }) => {
 await page.route('**/api/pages/sample-guide',route=>route.fulfill({json:{title:'A useful learning guide',slug:'sample-guide',description:'A published resource',body:'<img src=x onerror="window.cmsInjection=true">'}}));
 await page.goto('/?page=sample-guide');
 await expect(page.getByRole('heading',{name:'A useful learning guide'})).toBeVisible();
 await expect(page.locator('article')).toContainText('<img src=x');
 await expect(page.locator('article img')).toHaveCount(0);
 expect(await page.evaluate(()=>window.cmsInjection)).toBeUndefined();
});
