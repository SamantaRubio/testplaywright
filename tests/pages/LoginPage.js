import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  //Constructor: define all the page elements
  constructor(page) {
    super(page);
    this.usernameInput = this.getByTestId('username');
    this.passwordInput = this.getByTestId('password');
    this.loginBtn = this.getByTestId('login-button');
    this.errorMsg = this.getByTestId('error');
  }

  // Action Methods: Perform actions using the page's elements

  async open() {
    await this.goto('/'); // uses baseURL from config
    // Makes sure you are in SauceDemo and the form is ready
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginBtn).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
