import { test, expect } from '@playwright/test';

test('navigate to Orthopedics specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Orthopedics' link or button
  await page.getByText('Orthopedics').click();

  // Check if the URL changed to the expected Orthopedics specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/orthopedics');
});
