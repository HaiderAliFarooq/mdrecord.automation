import { test, expect } from '@playwright/test';

test('navigate to Dermatology specialty', async ({ page }) => {
    await page.goto('https://mdrecord.ai/');

    // Click on the 'Dermatology' link or button
    await page.getByText('Dermatology').click();

    // Check if the URL changed to the expected Dermatology specialty page
    await expect(page).toHaveURL('https://mdrecord.ai/specialties/dermatology');
});
