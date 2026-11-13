const { test, expect } = require("@playwright/test");
async function workspace(page, role = "learner") {
  const state = {
    name: "Scroll Learner",
    completed: {},
    enrolled: ["design", "web"],
    bookmarks: [],
    quizzes: {},
    assignments: Array.from({ length: 35 }, (_, i) => ({
      id: "scroll-" + i,
      title: `Practice assignment ${i + 1}`,
      description: "Review and practice the lesson.",
      category: "Design",
      due: "",
      done: false,
      submission: "",
    })),
    messages: [],
    goal: 3,
    activity: [],
  };
  await page.route("**/api/session", (r) =>
    r.fulfill({
      json: {
        user: {
          id: "scroll-user",
          name: state.name,
          email: "scroll@example.com",
          role,
          provider: "google",
          emailVerified: true,
        },
        state,
      },
    }),
  );
  await page.route("**/api/notifications", (r) =>
    r.fulfill({ json: { items: [], unreadCount: 0 } }),
  );
  await page.route("https://res.cloudinary.com/**", (r) => r.abort());
}
test("dashboard content supports wheel scrolling and Home/End keys", async ({
  page,
}) => {
  await workspace(page);
  await page.setViewportSize({ width: 1440, height: 700 });
  await page.goto("/#dashboard");
  await page.getByRole("heading", { name: /Hey Scroll Learner/ }).waitFor();
  await page.mouse.move(950, 400);
  await page.mouse.wheel(0, 700);
  await expect
    .poll(() => page.evaluate(() => scrollY), { timeout: 3000 })
    .toBeGreaterThan(100);
  await page.keyboard.press("End");
  await expect
    .poll(() =>
      page.evaluate(() =>
        Math.abs(document.documentElement.scrollHeight - innerHeight - scrollY),
      ),
    )
    .toBeLessThan(1);
  await page.keyboard.press("Home");
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
});

test("learner routes scroll across desktop, tablet and phone widths in both themes", async ({
  page,
}) => {
  test.setTimeout(90000);
  await workspace(page);
  await page.goto("/#dashboard");
  await page.getByRole("heading", { name: /Hey Scroll Learner/ }).waitFor();
  for (const mode of ["light", "dark"]) {
    await page.evaluate(
      (dark) => document.documentElement.classList.toggle("dark", dark),
      mode === "dark",
    );
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 600 });
      for (const route of [
        "dashboard",
        "courses",
        "assignments",
        "quizzes",
        "community",
        "progress",
        "settings",
      ]) {
        await page.evaluate((route) => {
          location.hash = route;
          window.scrollTo({ top: 0, behavior: "instant" });
        }, route);
        const titles = {
          dashboard: /Hey Scroll Learner/,
          courses: /Your next “aha!” moment/,
          assignments: /Big ideas. Small steps/,
          quizzes: /Put your knowledge/,
          community: /Better, together/,
          progress: /Look how far/,
          settings: /Make yourself at home/,
        };
        await expect(
          page.getByRole("heading", { name: titles[route] }),
        ).toBeVisible();
        const main = page.locator("#main-content");
        await expect(main).toBeVisible();
        await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
        await page.evaluate(
          () =>
            new Promise((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(resolve)),
            ),
        );
        const canScroll = await page.evaluate(
          () => document.documentElement.scrollHeight > innerHeight + 50,
        );
        if (!canScroll) continue;
        await page.mouse.move(width > 1024 ? 900 : width / 2, 250);
        await page.mouse.wheel(0, 450);
        await expect
          .poll(() => page.evaluate(() => scrollY), { timeout: 3000 })
          .toBeGreaterThan(20);
        await expect
          .poll(() =>
            page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
          )
          .toBeTruthy();
      }
    }
  }
});
test("dropdowns and lesson dialogs close without trapping subsequent page scroll", async ({
  page,
}) => {
  await workspace(page);
  await page.setViewportSize({ width: 390, height: 700 });
  await page.goto("/#courses");
  const sort = page.getByRole("combobox", { name: "Sort courses" });
  await sort.click();
  await expect(page.getByRole("listbox")).toBeVisible();
  await sort.press("Escape");
  await page.mouse.move(195, 450);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  await page.evaluate(() => {
    location.hash = "dashboard";
  });
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  await page
    .getByRole("button", { name: "Continue learning", exact: true })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.mouse.move(195, 400);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
});
test("short mobile sidebar scrolls to profile settings and closing it restores page interaction", async ({
  page,
}) => {
  await workspace(page);
  await page.setViewportSize({ width: 390, height: 400 });
  await page.goto("/#dashboard");
  await page.getByRole("button", { name: "Open navigation" }).click();
  const sidebar = page.getByRole("complementary", {
    name: "Workspace sidebar",
  });
  await sidebar.hover();
  await page.mouse.wheel(0, 800);
  await expect
    .poll(() => sidebar.evaluate((el) => el.scrollTop))
    .toBeGreaterThan(0);
  await page.getByRole("button", { name: "Close navigation menu" }).click();
  await expect
    .poll(() => sidebar.evaluate((el) => getComputedStyle(el).pointerEvents))
    .toBe("none");
  await page.mouse.move(220, 230);
  await page.mouse.wheel(0, 450);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
});
test("smooth document scrolling honors reduced-motion preference", async ({
  page,
}) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect
    .poll(() =>
      page
        .locator("html")
        .evaluate((el) => getComputedStyle(el).scrollBehavior),
    )
    .toBe("smooth");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect
    .poll(() =>
      page
        .locator("html")
        .evaluate((el) => getComputedStyle(el).scrollBehavior),
    )
    .toBe("auto");
});

test("admin overview and record modules scroll on desktop and mobile", async ({
  page,
}) => {
  test.setTimeout(60000);
  await workspace(page, "admin");
  const {
    resources,
  } = require("/workspace/StudyBuddyHub-server/admin/resources");
  const records = Array.from({ length: 35 }, (_, i) => ({
    id: `admin-row-${i}`,
    name: `Record ${i + 1}`,
    title: `Record ${i + 1}`,
    number: `INV-${i + 1}`,
    email: `person${i}@example.com`,
    description: "Operational details for this record.",
    status: "Active",
    quantity: 12,
    reorderAt: 5,
    currency: "BDT",
    amountMinor: 10000,
    createdAt: "2026-11-01T00:00:00.000Z",
  }));
  await page.route("**/api/admin/overview", (r) =>
    r.fulfill({
      json: {
        counts: Object.fromEntries(Object.keys(resources).map((k) => [k, 35])),
        resources: Object.entries(resources).map(([key, value]) => ({
          key,
          ...value,
        })),
        auditLogs: records.map((r) => ({
          id: r.id,
          action: "update",
          resource: "contacts",
          createdAt: r.createdAt,
        })),
      },
    }),
  );
  await page.route("**/api/admin/resources/*", (r) =>
    r.fulfill({ json: records }),
  );
  await page.route("**/api/admin/integrations", (r) =>
    r.fulfill({
      json: { database: "connected", media: "configured", email: "missing" },
    }),
  );
  await page.goto("/#admin");
  await page.getByRole("heading", { name: "Your control center" }).waitFor();
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 600 });
    for (const [module, title] of [
      ["overview", "Overview"],
      ["contacts", "Contacts"],
      ["leads", "Leads"],
      ["tasks", "Tasks"],
      ["pages", "Content pages"],
      ["inventory", "Inventory"],
      ["employees", "Employees"],
      ["invoices", "Invoices"],
      ["courses", "Courses"],
    ]) {
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      if (width < 768) {
        const select = page.getByRole("combobox", {
          name: "Administration module",
        });
        await select.click();
        await page.getByRole("option", { name: title, exact: true }).click();
      } else
        await page
          .getByRole("navigation", { name: "Administration modules" })
          .getByRole("button", { name: title, exact: true })
          .click();
      await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
      if (module !== "overview")
        await expect(
          page.getByRole("cell", { name: "Record 1", exact: true }),
        ).toBeVisible();
      await page.mouse.move(width > 1024 ? 900 : width / 2, 300);
      await page.mouse.wheel(0, 650);
      await expect
        .poll(() => page.evaluate(() => scrollY))
        .toBeGreaterThan(100);
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        )
        .toBeTruthy();
    }
  }
});

test("mobile touch swipes scroll the learner dashboard", async ({
  browser,
}) => {
  const context = await browser.newContext({
    baseURL: "http://127.0.0.1:5174",
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  try {
    const page = await context.newPage();
    await workspace(page);
    await page.goto("/#dashboard");
    await page.getByRole("heading", { name: /Hey Scroll Learner/ }).waitFor();
    const session = await context.newCDPSession(page);
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: 195, y: 600, id: 1 }],
    });
    for (let y = 570; y >= 180; y -= 30) {
      await session.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [{ x: 195, y, id: 1 }],
      });
      await page.waitForTimeout(16);
    }
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
  } finally {
    await context.close();
  }
});
