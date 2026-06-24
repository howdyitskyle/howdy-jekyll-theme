import { test, expect } from '@playwright/test';

test.describe('Theme toggle', () => {
  test.use({ viewport: { width: 1441, height: 900 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.loaded', { state: 'attached' });
  });

  test('starts with correct icon visible', async ({ page }) => {
    const moonIcon = page.locator('.moon-icon');
    const sunIcon = page.locator('.sun-icon');
    const isVisible = await moonIcon.isVisible();
    if (isVisible) {
      await expect(sunIcon).not.toBeVisible();
    } else {
      await expect(sunIcon).toBeVisible();
    }
  });

  test('toggles between light and dark mode', async ({ page }) => {
    await page.locator('#theme-toggle').click({ force: true });
    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(isDark).toBe(true);
    await expect(page.locator('.sun-icon')).toBeVisible();

    await page.locator('#theme-toggle').click({ force: true });
    const isLight = await page.evaluate(() =>
      document.documentElement.classList.contains('light-mode')
    );
    expect(isLight).toBe(true);
    await expect(page.locator('.moon-icon')).toBeVisible();
  });

  test('persists theme preference in localStorage', async ({ page }) => {
    await page.locator('#theme-toggle').click({ force: true });
    const saved = await page.evaluate(() =>
      localStorage.getItem('howdy-theme')
    );
    expect(saved).toBe('dark');

    await page.locator('#theme-toggle').click({ force: true });
    const savedLight = await page.evaluate(() =>
      localStorage.getItem('howdy-theme')
    );
    expect(savedLight).toBe('light');
  });

  test('restores theme on page reload', async ({ page }) => {
    await page.locator('#theme-toggle').click({ force: true });
    await page.reload();
    await page.waitForSelector('.loaded', { state: 'attached' });
    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark-mode')
    );
    expect(isDark).toBe(true);
  });

  test('applies correct body background color', async ({ page }) => {
    await page.locator('#theme-toggle').click({ force: true });
    const bg = await page.evaluate(() =>
      getComputedStyle(document.body).backgroundColor
    );
    expect(bg).not.toBe('rgb(240, 240, 240)');
  });
});
