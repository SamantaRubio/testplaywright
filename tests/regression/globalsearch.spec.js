import { test, expect } from '@playwright/test';
import { GlobalSearch } from '../pages/GlobalSearchComponent.js';
import searchData from '../fixtures/globalSearch-data.json' assert { type: 'json' };

const categories = [
  { type: 'Task', value: searchData.tasks.valid, selectorType: 'h1' },
  { type: 'Opportunities', value: searchData.opportunities.valid, selectorType: 'h1' },
  { type: 'Accounts', value: searchData.accounts.valid, selectorType: 'h1' },
  { type: 'Contacts', value: searchData.contacts.valid, selectorType: 'h1' },
  { type: 'Email', value: searchData.emails.valid, selectorType: 'mailto' },
  { type: 'Phone', value: searchData.phones.valid, selectorType: 'tel' }
];

for (const item of categories) {
  test(`Search for ${item.type}`, async ({ page }) => {
    const gs = new GlobalSearch(page);

    // Search
    await gs.typeSearch(item.value);
    await gs.selectFirstResult();

    // Validations
    switch (item.selectorType) {
      case 'h1':
        await expect(page.locator('h1')).toContainText(new RegExp(item.value, 'i'));
        break;

      case 'mailto':
        await expect(
          page.locator(`a[href*="mailto:${item.value}"]`)
        ).toBeVisible();
        break;

      case 'tel':
        await expect(
          page.locator(`a[href*="tel:${item.value}"]`)
        ).toBeVisible();
        break;

      default:
        throw new Error(`No selectorType for ${item.type}`);
    }
  });
}