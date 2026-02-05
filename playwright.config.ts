import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration for E2E tests
 *
 * Runs tests in a real browser (Chrome)
 */

export default defineConfig({
  // Where are the E2E tests located?
  testDir: './e2e',

  // Only execute .spec.ts files
  testMatch: '**/*.e2e.spec.ts',

  // Base URL for all tests
  use: {
    baseURL: 'http://localhost:4000',

    // Take screenshots on failure
    screenshot: 'only-on-failure',
  },

  // Only test in Chrome
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Automatically start the dev server
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
})
