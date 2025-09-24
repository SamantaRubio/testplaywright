import { test, expect } from '@playwright/test';
import { GlobalSearch } from '../pages/GlobalSearchComponent.js';

test('Search for a Task', async ({ page }) => {
    const gs = new GlobalSearch(page);
    await gs.typeSearch('Cross-group global forecast Task 25');
    await gs.selectFirstResult();

    // Validations
    await expect(page).toHaveURL(/tasks/); 
    await expect(page.locator('h1')).toContainText(/Cross-group global forecast Task 25/i);

  });

