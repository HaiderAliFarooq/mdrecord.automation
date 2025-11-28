import { test, expect } from '@playwright/test';

test('navigate to Psychiatry specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Psychiatry' link or button
  await page.getByText('Psychiatry').click();

  // Check if the URL changed to the expected Psychiatry specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/psychiatry');
});
