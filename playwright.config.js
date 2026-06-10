import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:4000',
    trace: 'on-first-retry',
    actionTimeout: 5000,
    headless: !process.env.CI,
  },
  webServer: {
    command: 'bundle exec jekyll serve --port 4000 --no-watch',
    url: 'http://localhost:4000',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
  },
});
