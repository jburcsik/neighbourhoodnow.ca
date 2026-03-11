import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test('renders about page with mission and values', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('h1')).toContainText('CivSafe');
    await expect(page.getByText('Our Mission')).toBeVisible();
    await expect(page.getByText('Our Approach')).toBeVisible();
    await expect(page.getByText('Our Values')).toBeVisible();
  });

  test('renders in French at /fr/about', async ({ page }) => {
    await page.goto('/fr/about');

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('CivSafe');
    await expect(page.getByText('Notre mission')).toBeVisible();
  });

  test('renders in Chinese at /zh/about', async ({ page }) => {
    await page.goto('/zh/about');

    await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
    await expect(page.getByText('我们的使命')).toBeVisible();
  });
});
