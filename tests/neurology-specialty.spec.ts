import { test, expect } from '@playwright/test';

test('navigate to Neurology specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Neurology' link or button
  await page.getByText('Neurology').click();

  // Check if the URL changed to the expected Neurology specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/neurology');
});
