import { test, expect } from '@playwright/test';

test.describe('Insights', () => {
  test.describe('Insights list page', () => {
    test('lists insight articles with titles and previews', async ({ page }) => {
      await page.goto('/insights');

      await expect(page.locator('h1')).toBeVisible();

      const main = page.locator('main');
      // Should show both mock posts
      await expect(main.getByText(/AI Governance/)).toBeVisible();
      await expect(main.getByText(/Agile Transformation in Government/)).toBeVisible();
    });

    test('renders in French at /fr/insights', async ({ page }) => {
      await page.goto('/fr/insights');

      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toBeVisible();
    });
  });

  test.describe('Insight detail page', () => {
    test('renders full article content', async ({ page }) => {
      await page.goto('/insights/ai-governance-public-sector');

      await expect(page.locator('h1')).toContainText('AI Governance');
      // Article body should be visible
      await expect(page.getByText('The Governance Gap')).toBeVisible();
    });

    test('navigates from list to detail', async ({ page, isMobile }) => {
      test.skip(!!isMobile, 'Desktop-only — avoids link text resolution issues');

      await page.goto('/insights');

      await page.locator('main a[href*="/insights/ai-governance"]').first().click();
      await expect(page).toHaveURL(/\/insights\/ai-governance/);
      await expect(page.locator('h1')).toBeVisible();
    });

    test('has back link to insights list', async ({ page }) => {
      await page.goto('/insights/ai-governance-public-sector');

      const backLink = page.locator('main a[href*="/insights"]').filter({ hasText: /insights|All|back/i }).first();
      await expect(backLink).toBeVisible();
    });
  });
});
