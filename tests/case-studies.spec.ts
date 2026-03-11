import { test, expect } from '@playwright/test';

test.describe('Case Studies', () => {
  test.describe('Case Studies list page', () => {
    test('lists all case studies with preview text', async ({ page }) => {
      await page.goto('/case-studies');

      await expect(page.locator('h1')).toBeVisible();

      const main = page.locator('main');
      // Should show all 5 existing case studies (checking titles)
      await expect(main.getByText(/Accelerating Digital Service Delivery/)).toBeVisible();
      await expect(main.getByText(/Provincial AI Readiness/)).toBeVisible();
      await expect(main.getByText(/Scaling Agile Delivery/)).toBeVisible();

      // 5 case study cards
      const cards = main.locator('a[href*="/case-studies/"]');
      await expect(cards).toHaveCount(5);
    });

    test('renders in French at /fr/case-studies', async ({ page }) => {
      await page.goto('/fr/case-studies');

      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toBeVisible();
    });
  });

  test.describe('Case Study detail pages', () => {
    test('renders full case study content', async ({ page }) => {
      await page.goto('/case-studies/city-of-calgary-digital-transformation');

      await expect(page.locator('h1')).toBeVisible();
      // Article content should be rendered
      await expect(page.locator('article')).toBeVisible();
    });

    test('navigates from list to detail', async ({ page, isMobile }) => {
      test.skip(!!isMobile, 'Desktop-only — avoids link text resolution issues');

      await page.goto('/case-studies');

      await page.locator('main a[href*="/case-studies/city-of-calgary"]').first().click();
      await expect(page).toHaveURL(/\/case-studies\/city-of-calgary/);
      await expect(page.locator('h1')).toBeVisible();
    });

    test('has back link to case studies list', async ({ page }) => {
      await page.goto('/case-studies/city-of-calgary-digital-transformation');

      const backLink = page.locator('main a[href*="/case-studies"]').filter({ hasText: /case|All|back/i }).first();
      await expect(backLink).toBeVisible();
    });

    test('all case study detail pages load', async ({ page }) => {
      const slugs = [
        'city-of-calgary-digital-transformation',
        'ontario-ai-readiness',
        'bc-housing-agile-transformation',
        'regional-municipality-community-engagement',
        'telus-automation-strategy',
      ];

      for (const slug of slugs) {
        await page.goto(`/case-studies/${slug}`);
        await expect(page.locator('h1')).toBeVisible();
      }
    });
  });
});
