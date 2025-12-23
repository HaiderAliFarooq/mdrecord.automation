import { test, expect } from '@playwright/test';

test('navigate to Allergy & Immunology specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Allergy & Immunology' link or button
  await page.getByText('Allergy & Immunology').click();

  // Check if the URL changed to the expected Allergy & Immunology specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/allergy-immunology');
});
