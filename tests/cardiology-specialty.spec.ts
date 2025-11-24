import { test, expect } from '@playwright/test';

test('navigate to Cardiology specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Cardiology' link or button
  await page.getByText('Cardiology').click();

  // Check if the URL changed to the expected Cardiology specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/cardiology');
});
