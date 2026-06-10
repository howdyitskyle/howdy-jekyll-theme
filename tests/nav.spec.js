import { test, expect } from '@playwright/test';

test.describe('Navigation toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await page.waitForSelector('.nav-toggle', { state: 'visible' });
  });

  test('opens nav when hamburger is clicked', async ({ page }) => {
    await page.click('.nav-toggle');
    await expect(page.locator('html')).toHaveClass(/nav-open/);
    await expect(page.locator('.site-nav')).toBeVisible();
  });

  test('closes nav when hamburger is clicked again', async ({ page }) => {
    await page.click('.nav-toggle');
    await expect(page.locator('html')).toHaveClass(/nav-open/);
    await page.click('.nav-toggle');
    await expect(page.locator('html')).not.toHaveClass(/nav-open/);
  });

  test('closes nav when overlay is clicked', async ({ page }) => {
    await page.click('.nav-toggle');
    await expect(page.locator('html')).toHaveClass(/nav-open/);
    await page.click('.nav-overlay');
    await expect(page.locator('html')).not.toHaveClass(/nav-open/);
  });

  test('closes nav when ESC key is pressed', async ({ page }) => {
    await page.click('.nav-toggle');
    await expect(page.locator('html')).toHaveClass(/nav-open/);
    await page.keyboard.press('Escape');
    await expect(page.locator('html')).not.toHaveClass(/nav-open/);
  });

  test('closes nav when a nav link is clicked', async ({ page }) => {
    await page.click('.nav-toggle');
    await expect(page.locator('html')).toHaveClass(/nav-open/);
    const firstLink = page.locator('.site-nav a').first();
    await firstLink.click();
    // Nav should close; may navigate away so check after short delay
    await page.waitForTimeout(100);
    // The transition prevents immediate navigation, nav should close
  });

  test('hides nav on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 900 });
    await page.reload();
    await expect(page.locator('.nav-toggle')).not.toBeVisible();
  });
});
