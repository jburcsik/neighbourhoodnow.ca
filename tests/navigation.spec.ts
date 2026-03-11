import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('desktop navbar has all links', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop-only test');

    await page.goto('/');

    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();

    for (const name of ['About', 'Services', 'Case Studies', 'Insights', 'Contact']) {
      await expect(nav.getByRole('link', { name })).toBeVisible();
    }
  });

  test('desktop navbar uses correct locale prefix for French', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop-only test');

    await page.goto('/fr');

    const nav = page.locator('header nav');
    const aboutLink = nav.getByRole('link', { name: 'À propos' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', /^\/fr\//);
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/');

    const logo = page.locator('header').getByRole('link').first();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('mobile menu opens and shows links', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only test');

    await page.goto('/');

    await page.getByLabel('Toggle menu').click();

    // Check for mobile drawer links (use exact to avoid footer conflicts)
    const drawer = page.locator('header');
    for (const name of ['About', 'Services', 'Case Studies', 'Insights', 'Contact']) {
      await expect(drawer.getByRole('link', { name, exact: true })).toBeVisible();
    }
  });
});
