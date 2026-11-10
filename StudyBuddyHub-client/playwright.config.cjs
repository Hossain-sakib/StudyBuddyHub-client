const { defineConfig } = require("@playwright/test");
const { existsSync, mkdtempSync } = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const testData = mkdtempSync(path.join(os.tmpdir(), "studybuddy-e2e-"));
module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30000,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:5174",
    trace: "retain-on-failure",
    launchOptions: existsSync("/usr/bin/chromium")
      ? { executablePath: "/usr/bin/chromium", args: ["--no-sandbox"] }
      : {},
  },
  webServer: [
    {
      command: "npm --prefix /workspace/StudyBuddyHub-server start",
      url: "http://127.0.0.1:5001/api/health",
      env: {
        PORT: "5001",
        NODE_ENV: "test",
        MONGODB_URI: "",
        DATA_FILE: path.join(testData, "workspace.json"),
        ACCESS_TOKEN_SECRET: "browser-test-signing-key-for-isolated-tests",
        CLIENT_ORIGINS: "http://127.0.0.1:5174",
      },
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 5174 --strictPort",
      url: "http://127.0.0.1:5174",
      env: { API_PROXY_TARGET: "http://127.0.0.1:5001" },
    },
  ],
});
