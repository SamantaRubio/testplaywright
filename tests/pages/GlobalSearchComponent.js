import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class GlobalSearch extends BasePage {
    constructor(page) {
      super(page);
      this.page = page;
      this.input = this.page.getByTestId('search_bar');
      this.dropdown = this.page.getByTestId('search_results_dropdown');
      this.items = this.dropdown.locator('a');
    }
  
    async typeSearch(query) {
      await this.goto('/');
      await expect(this.input).toBeVisible();
      await this.input.click();
      await this.input.fill(query);
      // Esperar a que aparezca el dropdown con items
      await this.dropdown.waitFor({ state: 'visible' });
      await this.items.first().waitFor();
    }
  
    async selectFirstResult() {
      const count = await this.items.count();
      if (count === 0) throw new Error('No results found in search dropdown');
      await this.items.first().click();
    }
  
    async selectResultByText(text) {
      await this.items.filter({ hasText: text }).first().click();
    }
  }
  