import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await expect(page).toHaveTitle(/CivSafe/);
    expect(errors).toEqual([]);
  });

  test('renders all main sections', async ({ page }) => {
    await page.goto('/');

    // Hero
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Logo strip
    await expect(page.getByText('Trusted By', { exact: true })).toBeVisible();

    // Services
    await expect(page.getByText('Our Services')).toBeVisible();
    await expect(page.getByText('AI Readiness & Strategy').first()).toBeVisible();

    // Case Studies
    await expect(page.getByText('Proven Results Across Sectors')).toBeVisible();

    // Team
    await expect(page.getByText('Practitioners Who Have Done the Work')).toBeVisible();

    // Testimonials
    await expect(page.getByText('Results Speak Louder')).toBeVisible();

    // CTA
    await expect(page.getByText('Ready to Transform Your Organization?')).toBeVisible();
  });

  test('renders footer with all sections', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('CivSafe').first()).toBeVisible();
    await expect(footer.getByText('Privacy Policy')).toBeVisible();
  });

  test('has no console errors on load', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out known benign errors (favicon 404, rate-limited external images)
    const realErrors = consoleErrors.filter(
      (msg) =>
        !msg.includes('favicon') &&
        !msg.includes('429') &&
        !msg.includes('Failed to load resource')
    );
    expect(realErrors).toEqual([]);
  });
});
