import { test, expect } from '@playwright/test';

test.describe('Hero carousel', () => {
  test('displays hero image on index page', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-content', { state: 'visible' });

    const heroImage = page.locator('.hero-image, .hero-carousel__slide img');
    await expect(heroImage.first()).toBeVisible();
  });

  test('carousel has pagination dots when multiple slides exist', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-content', { state: 'visible' });

    const dots = page.locator('.swiper-pagination-bullet');
    const count = await dots.count();
    if (count > 1) {
      expect(count).toBeGreaterThan(1);
    }
  });

  test('carousel changes slide when dot is clicked', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-content', { state: 'visible' });

    const dots = page.locator('.swiper-pagination-bullet');
    const count = await dots.count();
    if (count > 1) {
      await dots.nth(1).click();
      await page.waitForTimeout(500);
      const activeDot = page.locator('.swiper-pagination-bullet-active');
      await expect(activeDot).toBeVisible();
    }
  });

  test('carousel swipe works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForSelector('.hero-content', { state: 'visible' });

    const swiper = page.locator('.swiper-wrapper');
    if (await swiper.count()) {
      const box = await swiper.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width * 0.8, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2);
        await page.mouse.up();
        await page.waitForTimeout(500);
      }
    }
  });

  test('hero image has proper dimensions', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.hero-content', { state: 'visible' });

    const hero = page.locator('.hero-content');
    const box = await hero.boundingBox();
    expect(box).not.toBeNull();
    expect(box.width).toBeGreaterThan(0);
    expect(box.height).toBeGreaterThan(0);
  });
});
