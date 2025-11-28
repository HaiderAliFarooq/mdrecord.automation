import { test, expect } from '@playwright/test';

test('navigate to Primary Care specialty', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Primary Care' link or button
  await page.getByText('Primary Care').click();

  // Check if the URL changed to the expected Primary Care specialty page
  await expect(page).toHaveURL('https://mdrecord.ai/specialties/primary-care');
});
