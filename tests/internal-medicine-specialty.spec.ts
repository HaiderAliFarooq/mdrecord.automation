import { test, expect } from '@playwright/test';

test('navigate to Internal Medicine specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Internal Medicine' link or button
  await page.getByText('Internal Medicine').click();

  // Check if the URL changed to the expected Internal Medicine specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/internal-medicine');
});
