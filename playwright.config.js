// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Playwright configuration for Tamil Transliteration Test Suite
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",

  /* Maximum time one test can run for */
  timeout: 30 * 1000,

  /* Run tests in parallel for faster execution */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* No retries - run each test only once */
  retries: 0,

  /* Use multiple workers for parallel execution */
  workers: process.env.CI ? 2 : 4,

  /* Reporter to use */
  reporter: [["html"], ["./custom-reporter.js"]],

  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: "https://tamil.changathi.com",

    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",

    /* Screenshot on failure */
    screenshot: "only-on-failure",

    /* Video on failure */
    video: "on-first-retry",

    /* Action timeout */
    actionTimeout: 15 * 1000,

    /* Navigation timeout */
    navigationTimeout: 15 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "positive",
      testMatch: /positive\.spec\.js/,
      use: {
        ...devices["Desktop Chrome"],
        headless: true,
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "negative",
      testMatch: /negative\.spec\.js/,
      use: {
        ...devices["Desktop Chrome"],
        headless: true,
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
