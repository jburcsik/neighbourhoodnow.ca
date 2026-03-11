import { test, expect } from '@playwright/test';

test.describe('Accessibility basics', () => {
  test('page has correct lang attribute for each locale', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await page.goto('/fr');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');

    await page.goto('/zh');
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt, `Image ${i} is missing alt text`).toBeTruthy();
    }
  });

  test('interactive elements are keyboard focusable', async ({ page }) => {
    await page.goto('/');

    // Tab to first interactive element and verify focus
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('heading hierarchy is correct', async ({ page }) => {
    await page.goto('/');

    // Should have exactly one h1
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);

    // Should have multiple h2s for sections
    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThan(1);
  });

  test('locale switcher button has accessible label', async ({ page, isMobile }) => {
    await page.goto('/');

    if (isMobile) {
      await page.getByLabel('Toggle menu').click();
      // Mobile drawer has its own locale switcher (2nd instance in DOM)
      await expect(page.getByLabel('Switch language').last()).toBeVisible();
    } else {
      await expect(page.getByLabel('Switch language')).toBeVisible();
    }
  });
});
