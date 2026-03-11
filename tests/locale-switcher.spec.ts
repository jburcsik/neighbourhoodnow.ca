import { test, expect } from '@playwright/test';

// Locale switcher tests run on desktop only — the mobile drawer has duplicate
// locale switcher elements in the DOM (desktop hidden + mobile visible), making
// selectors unreliable. The switching logic is the same on both layouts.
test.describe('Locale switcher', () => {
  test.beforeEach(async ({ isMobile }) => {
    test.skip(!!isMobile, 'Desktop-only — mobile uses same switching logic');
  });

  test('switches from English to French', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await page.getByLabel('Switch language').click();
    await page.getByRole('link', { name: 'Français' }).click();

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr', { timeout: 10000 });
    await expect(page.getByText('Nos services')).toBeVisible();
  });

  test('switches from English to Chinese', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('Switch language').click();
    await page.getByRole('link', { name: '中文' }).click();

    await expect(page.locator('html')).toHaveAttribute('lang', 'zh', { timeout: 10000 });
    await expect(page.getByText('我们的服务')).toBeVisible();
  });

  test('switches from French back to English', async ({ page }) => {
    await page.goto('/fr');
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');

    await page.getByLabel('Switch language').click();
    await page.getByRole('link', { name: 'English' }).click();

    // Switching to default locale navigates to / — wait for content change
    await expect(page.getByText('Our Services')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('shows current locale as active in dropdown', async ({ page }) => {
    await page.goto('/fr');

    await page.getByLabel('Switch language').click();

    const frLink = page.getByRole('link', { name: 'Français' });
    await expect(frLink).toHaveClass(/font-semibold/);
  });
});
