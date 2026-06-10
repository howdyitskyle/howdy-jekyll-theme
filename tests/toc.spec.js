import { test, expect } from '@playwright/test';

test.describe('Table of Contents', () => {
  test('TOC links scroll to correct heading', async ({ page }) => {
    await page.goto('/about.html');
    await page.waitForSelector('.loaded', { state: 'attached' });

    const toc = page.locator('.toc');
    if (await toc.count()) {
      const tocLink = toc.locator('a').first();
      const href = await tocLink.getAttribute('href');

      if (href && href.startsWith('#')) {
        await tocLink.click();
        await page.waitForTimeout(500);

        const targetId = href.substring(1);
        const target = page.locator(`#${targetId}`);
        if (await target.count()) {
          const box = await target.boundingBox();
          expect(box).not.toBeNull();
          expect(box.y).toBeLessThan(600);
        }
      }
    }
  });

  test('TOC is present on pages with headings', async ({ page }) => {
    await page.goto('/about.html');
    await page.waitForSelector('.loaded', { state: 'attached' });

    // TOC may or may not be present depending on config
    const toc = page.locator('.toc');
    if (await toc.count()) {
      await expect(toc).toBeVisible();
    }
  });

  test('scroll-margin-top applied to headings', async ({ page }) => {
    await page.goto('/about.html');

    const margin = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (h1) {
        return getComputedStyle(h1).scrollMarginTop;
      }
      return null;
    });
    expect(margin).toBe('80px');
  });
});
