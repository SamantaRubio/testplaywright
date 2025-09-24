import { test, expect } from '@playwright/test'; //Import directly from playwright and not from a fixture
import { LoginPage } from '../pages/LoginPage.js';

test('valid login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PSW);
});
