import { test, expect } from '@playwright/test';

test.describe('Page transitions', () => {
  test('fades out content when navigating to another page', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.loaded', { state: 'attached' });

    const projectLink = page.locator('a[href*="/projects/"]').first();
    if (await projectLink.count()) {
      await projectLink.click();

      // The howdy-navigating class should be added during transition
      await expect(page.locator('body')).toHaveClass(/howdy-navigating/, { timeout: 5000 });
    }
  });

  test('loads new page after transition', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.loaded', { state: 'attached' });

    // Navigate to about page
    await page.goto('/about.html');
    await page.waitForSelector('.loaded', { state: 'attached' });

    await expect(page.locator('.two-column')).toBeVisible();
  });

  test('does not trigger transition for external links', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.loaded', { state: 'attached' });

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    if (count > 0) {
      await externalLinks.first().click({ force: true });
      // Should not add howdy-navigating class
      const hasClass = await page.evaluate(() =>
        document.body.classList.contains('howdy-navigating')
      );
      expect(hasClass).toBe(false);
    }
  });

  test('does not trigger transition for anchor links', async ({ page }) => {
    await page.goto('/about.html');
    await page.waitForSelector('.loaded', { state: 'attached' });

    // Click any link that starts with #
    const hashLinks = page.locator('a[href^="#"]');
    const count = await hashLinks.count();
    if (count > 0) {
      const className = await page.evaluate(() => {
        const before = document.body.classList.contains('howdy-navigating');
        const link = document.querySelector('a[href^="#"]');
        if (link) link.click();
        return document.body.classList.contains('howdy-navigating');
      });
      expect(className).toBe(false);
    }
  });
});
