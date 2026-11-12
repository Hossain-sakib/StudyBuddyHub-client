# Netlify deployment

Site: https://studybuddy-hub.netlify.app

One site serves the pre-rendered React frontend and the Express API through a Netlify Function. There is no payment integration. Netlify's built-with badge is disabled in the site settings.

## Build and package

```sh
npm ci
npm run lint
npm test
npm run prepare:netlify
cd .netlify-deploy
npm ci --omit=dev
```

Use the Netlify CLI to deploy `.netlify-deploy` with `--prod --no-build`, its `dist` directory and `backend/netlify/functions` functions directory. The artifact contains only allowlisted source and built assets; it excludes credentials, Git metadata and local data. It combines the frontend and backend checkouts. A static drag-and-drop of `dist` does not deploy the backend.

## Runtime variables

- NODE_ENV=production
- MONGODB_URI: complete Atlas URI, with percent-encoded username/password. The database is `studybuddy`.
- ACCESS_TOKEN_SECRET: stable random value of at least 32 characters.
- CLIENT_ORIGINS=https://studybuddy-hub.netlify.app
- FIREBASE_PROJECT_ID=studdy-buddy-hub-8cc52
- ADMIN_EMAIL=mskib567@gmail.com (role assigned only after verified Google authentication)
- CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET (or CLOUDINARY_URL): required for media uploads. These are backend-only settings.
- RESEND_API_KEY, MAIL_FROM: optional email delivery settings from Resend; MAIL_FROM must use a verified sender domain.
- APP_URL=https://studybuddy-hub.netlify.app: trusted base for account emails.
- SEED_SAMPLE_CONTENT=true: enable insert-only starter seeding; disable after the first successful seed.

Netlify's standard variable scope is supported; Functions-only scoping requires a paid Netlify plan. Configure secrets securely and never expose them through VITE_ variables or source control.

Firebase Authentication must enable Google and authorize `studybuddy-hub.netlify.app`. Backend token verification uses Google's public signing keys; no Firebase service-account key is required. Optional public web build overrides: VITE_apiKey, VITE_authDomain, VITE_projectId, VITE_appId.

## Release checks

Verify homepage HTML contains actual public content, canonical/OG metadata and JSON-LD; verify robots.txt, sitemap.xml, icons, responsive navigation and sign-up. `/api/health` must report MongoDB storage; `/api/courses` should return starter courses and `/api/discover` labeled sample challenges. Then test real Google login, administrator access, learner isolation, shared assignments and Cloudinary upload/download/deletion with the real providers.

The public homepage is statically rendered. Published CMS records use server-rendered /resources/:slug pages with per-page metadata and a database-backed sitemap. Drafts are excluded. No search-ranking or 100% security guarantee is claimed.

Before real business use, validate backups/restoration, recovery/support procedures, privacy/retention rules, independent security testing and finance/HR requirements. The CRM/ERP modules are operational record management, not certified accounting/payroll.

## Cloudinary image migration

Get the cloud name, API key and API secret from Cloudinary Console → Settings → API Keys. Save them in Netlify environment variables; never use VITE_ variables for the secret. The site-media upload script needs the same server-side variables in its execution environment. It uploads the 13 owned image files, checks public delivery, and writes a public URL manifest. SVG/PDF delivery permissions may require account configuration. Local brand originals remain as fallbacks. The UI uses local assets until the manifest has verified mappings.

Email setup: create a sending API key in Resend → API Keys, verify a domain in Resend → Domains, then set RESEND_API_KEY and MAIL_FROM in Netlify. DNS verification requires access to the sending domain. APP_URL is the site URL. Recovery returns an explicit unavailable message until configured. Redeploy after changing runtime variables.
