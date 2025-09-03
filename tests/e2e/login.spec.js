// In the specs you can create "business/user stories" using the actions (methods) from the LoginPage
import { test, expect } from '../fixtures/test-data.fixture.js';
import { LoginPage } from '../pages/LoginPage.js';

test('E2E', async ({ page, testData }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(testData.users.valid.username, testData.users.valid.password);
});