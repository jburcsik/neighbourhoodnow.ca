import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('renders contact page with offices and form', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toBeVisible();

    // All 4 offices
    const main = page.locator('main');
    await expect(main.getByText('Ottawa')).toBeVisible();
    await expect(main.getByText('Shanghai')).toBeVisible();
    await expect(main.getByText('Montreal')).toBeVisible();
    await expect(main.getByText('Toronto')).toBeVisible();

    // Contact form
    await expect(main.getByLabel(/name/i)).toBeVisible();
    await expect(main.getByLabel(/email/i)).toBeVisible();
    await expect(main.getByLabel(/message/i)).toBeVisible();
  });

  test('form validates required fields', async ({ page }) => {
    await page.goto('/contact');

    // Try submitting empty form
    await page.getByRole('button', { name: /send/i }).click();

    // Should show validation errors (HTML5 validation or custom)
    const nameInput = page.locator('main').getByLabel(/name/i);
    const isInvalid = await nameInput.evaluate(
      (el: HTMLInputElement) => !el.validity.valid
    );
    expect(isInvalid).toBe(true);
  });

  test('renders in French at /fr/contact', async ({ page }) => {
    await page.goto('/fr/contact');

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.locator('h1')).toContainText('Contactez-nous');
  });

  test('renders in Chinese at /zh/contact', async ({ page }) => {
    await page.goto('/zh/contact');

    await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
    await expect(page.locator('h1')).toContainText('联系我们');
  });
});
