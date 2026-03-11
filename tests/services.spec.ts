import { test, expect } from '@playwright/test';

test.describe('Services', () => {
  test.describe('Services grid page', () => {
    test('renders all 6 services as linked cards', async ({ page }) => {
      await page.goto('/services');

      await expect(page.locator('h1')).toBeVisible();

      const main = page.locator('main');
      await expect(main.getByText('AI Readiness & Strategy')).toBeVisible();
      await expect(main.getByText('Process Automation & Digital Transformation')).toBeVisible();
      await expect(main.getByText('Agile Transformation & Coaching')).toBeVisible();
      await expect(main.getByText('Civic Technology Consulting')).toBeVisible();
      await expect(main.getByText('Leadership Development & Team Tuning')).toBeVisible();
      await expect(main.getByText('Grant Strategy & Stakeholder Engagement')).toBeVisible();

      // Each service card should be a link to its detail page
      const serviceLinks = main.locator('a[href*="/services/"]');
      await expect(serviceLinks).toHaveCount(6);
    });

    test('renders in French at /fr/services', async ({ page }) => {
      await page.goto('/fr/services');

      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toContainText('Nos services');
    });

    test('renders in Chinese at /zh/services', async ({ page }) => {
      await page.goto('/zh/services');

      await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
      await expect(page.locator('h1')).toContainText('我们的服务');
    });
  });

  test.describe('Service detail pages', () => {
    test('navigates from grid to detail page', async ({ page, isMobile }) => {
      test.skip(!!isMobile, 'Desktop-only — link text includes description on mobile');

      await page.goto('/services');

      // Click the first service card heading
      await page.locator('main a[href*="/services/ai-readiness"]').click();
      await expect(page).toHaveURL(/\/services\/ai-readiness/);
      await expect(page.locator('h1')).toBeVisible();
    });

    test('renders AI Readiness detail page', async ({ page }) => {
      await page.goto('/services/ai-readiness');

      await expect(page.locator('h1')).toContainText('AI Readiness');
    });

    test('renders service detail in French', async ({ page }) => {
      await page.goto('/fr/services/ai-readiness');

      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.locator('h1')).toBeVisible();
    });

    test('all 6 service detail pages load without error', async ({ page }) => {
      const slugs = [
        'ai-readiness',
        'automation',
        'agile-coaching',
        'civic-consulting',
        'leadership-development',
        'grant-strategy',
      ];

      for (const slug of slugs) {
        await page.goto(`/services/${slug}`);
        await expect(page.locator('h1')).toBeVisible();
      }
    });

    test('service detail page has back link to services', async ({ page }) => {
      await page.goto('/services/ai-readiness');

      const backLink = page.locator('main a[href*="/services"]').filter({ hasText: /services|All/i }).first();
      await expect(backLink).toBeVisible();
    });
  });
});
