# Studybuddy

A public learning website with a session-protected learner workspace and administrator control center. React 18, Vite 7, Tailwind 3, Node 24.

## Development

Use the existing isolated checkouts; do not create a worktree unless explicitly requested.

```sh
cd /workspace/StudyBuddyHub-server
npm ci
npm start
```

In another terminal:

```sh
cd /workspace/StudyBuddyHub-client/StudyBuddyHub-client
npm ci
npm run dev -- --host 0.0.0.0 --port 5173
```

Vite proxies `/api` to the backend. Production uses one Netlify origin with `/api/*` routed to a function. MongoDB stores application data; Cloudinary stores media. See NETLIFY.md and the backend README for configuration. Never commit `.env` or credentials.

## Code map

- `src/platform/Landing.jsx`: public course discovery, learning paths, sample challenges and FAQs.
- `src/platform/Platform.jsx`: session state and workspace navigation.
- `src/platform/WorkspaceShell.jsx`: responsive workspace navigation and header.
- `src/platform/NotificationCenter.jsx`: per-user notification inbox and read controls.
- `src/platform/theme/`: persisted light, dark and device appearance settings.
- `src/platform/views/`: separate learning, progress, task, settings and authentication views.
- `src/platform/Admin.jsx`: schema-driven CRM/ERP/CMS administration.
- `src/platform/MediaLibrary.jsx`: authorized Cloudinary media operations.
- `src/platform/SharedAssignments.jsx`: community challenges, submissions and feedback.
- `src/platform/store.js`: API requests and initial workspace data.
- `src/platform/googleAuth.js`: lazy-loaded Google authentication SDK.
- `src/platform/ui.js`: named Tailwind utility recipes, including responsive and interactive states.
- `src/styles.css`: Tailwind layers and base utilities; no handwritten component CSS.
- `scripts/prerender.mjs`: static homepage rendering and SEO metadata.
- `scripts/prepare-netlify.mjs`: explicit, credential-free deployment artifact assembly from both repositories.

Legacy application screens, unused packages, Firebase Hosting/Vercel files and generated source artifacts were removed. Brand assets live in `public/brand`; standard icon sizes are in `public`.

## Validation

```sh
npm run lint
npm test
npm run build
npm audit
```

Playwright uses isolated API/frontend processes and temporary storage. Tests cover public browsing, authenticated learning, Google button availability, account persistence, learner isolation, community assignments, moderation-facing forms and admin navigation. Backend tests verify role enforcement, validation, CMS draft privacy, account disabling, token signatures and sample-seed repeatability.

`npm run build` produces pre-rendered homepage HTML, canonical/open-graph metadata, structured data, robots.txt and a sitemap. Google SDK and admin code are loaded separately. This is a technical SEO foundation; search ranking, indexing and accessibility cannot be guaranteed by a percentage.

## Release

Run `npm run prepare:netlify`; install production dependencies in `.netlify-deploy`, then deploy that directory with the Netlify CLI. The generated deployment includes the backend and functions, without `.env`, Git metadata or local user data. Runtime settings must be configured separately. No payment integration is included.

The all-in-one admin modules are a working operational foundation, not a complete audited accounting, payroll or regulatory-compliance system. Production approval still needs real-provider tests, backup/restore validation, independent security review and account recovery procedures.

## Demo content and notifications

The bundled catalog has 18 demo courses. The backend insert-only seed includes 174 labeled sample records across learning, community, CRM, tasks, inventory, HR, invoices and CMS. It never creates fake user accounts or replaces existing records. Database seeding runs only after MongoDB is reachable with SEED_SAMPLE_CONTENT=true.

Signed-in users receive in-app welcome, due-task, quiz, course-completion, submission and feedback notifications. The inbox shows unread counts, opens the related workspace and supports individual/all read controls. It refreshes every 30 seconds while the tab is visible. This release does not send email or browser push notifications.

Layout tests exercise the public website, learner pages and admin records at 320, 390, 768, 1024, 1440 and 1920 pixel widths in both themes. Provider integration still needs a reachable MongoDB cluster and Cloudinary runtime credentials.
