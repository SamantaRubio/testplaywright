import { test, expect } from '@playwright/test';

test.describe('Healthcheck', () => {
  test('App renders and shows main container', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('new_user')).toBeVisible();
  });
});

//new_user