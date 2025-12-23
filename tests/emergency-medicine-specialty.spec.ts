import { test, expect } from '@playwright/test';

test('navigate to Emergency Medicine specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Emergency Medicine' link or button
  await page.getByText('Emergency Medicine').click();

  // Check if the URL changed to the expected Emergency Medicine specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/emergency-medicine');
});
