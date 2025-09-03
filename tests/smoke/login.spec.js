// In the specs you can create "business/user stories" using the actions (methods) from the LoginPage
import { test, expect } from '../fixtures/test-data.fixture.js';
import { LoginPage } from '../pages/LoginPage.js';

test('valid login', async ({ page, testData }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login(testData.users.valid.username, testData.users.valid.password);
});


/**
 * Login business stories examples
 * - As a user, I want to log in with valid credentials to view my dashboard.
 * - As a locked user, I want to see a clear message explaining that I cannot access.
 * - As a user, I want an error message if I enter invalid credentials.
 * - As a user, I should not be able to submit the form with empty fields.
 */