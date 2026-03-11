import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test.describe('French locale', () => {
    test('renders page in French at /fr', async ({ page }) => {
      await page.goto('/fr');

      await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
      await expect(page.getByText('Nos services')).toBeVisible();
      await expect(page.getByText('Ils nous font confiance')).toBeVisible();
    });

    test('renders French testimonials', async ({ page }) => {
      await page.goto('/fr');

      await expect(page.getByText('Ce que disent nos clients')).toBeVisible();
      await expect(page.getByRole('heading', { name: /résultats parlent/ })).toBeVisible();
      await expect(page.getByText('Ville de Calgary').first()).toBeVisible();
    });

    test('renders French footer', async ({ page }) => {
      await page.goto('/fr');

      const footer = page.locator('footer');
      await expect(footer.getByText('Entreprise')).toBeVisible();
      await expect(footer.getByText('Politique de confidentialité')).toBeVisible();
    });
  });

  test.describe('Chinese locale', () => {
    test('renders page in Chinese at /zh', async ({ page }) => {
      await page.goto('/zh');

      await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
      await expect(page.getByText('我们的服务')).toBeVisible();
      await expect(page.getByText('信赖我们的客户')).toBeVisible();
    });

    test('renders Chinese testimonials', async ({ page }) => {
      await page.goto('/zh');

      await expect(page.getByText('客户评价')).toBeVisible();
      await expect(page.getByText('成果胜于雄辩')).toBeVisible();
      await expect(page.getByText('卡尔加里市')).toBeVisible();
    });
  });

  test.describe('Default locale (English)', () => {
    test('serves English at root without /en prefix', async ({ page }) => {
      await page.goto('/');

      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('English content is fully translated (no raw keys)', async ({ page }) => {
      await page.goto('/');

      // Ensure no untranslated keys leak through (next-intl shows key name on missing translation)
      const body = await page.locator('body').textContent();
      expect(body).not.toContain('hero.headline');
      expect(body).not.toContain('services.sectionLabel');
      expect(body).not.toContain('testimonials.headline');
    });
  });
});
