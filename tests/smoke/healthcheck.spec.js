import { test, expect } from '@playwright/test';

test.describe('Healthcheck', () => {
  test('App renders and shows main container', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('new5677user')).toBeVisible();
  });
});

//new_user