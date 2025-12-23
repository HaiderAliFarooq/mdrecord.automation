import { test, expect } from '@playwright/test';

test('navigate to Contact page from navbar', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Contact' link in the navbar
  await page.getByText('Contact').click();

  // Wait until the contact URL opens
  await page.waitForURL('https://mdrecord.ai/contact', { timeout: 10000 });
  await expect(page).toHaveURL('https://mdrecord.ai/contact');
});
