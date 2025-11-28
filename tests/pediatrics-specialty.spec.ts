import { test, expect } from '@playwright/test';

test('navigate to Pediatrics specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Pediatrics' link or button
  await page.getByText('Pediatrics').click();

  // Check if the URL changed to the expected Pediatrics specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/pediatrics');
});
