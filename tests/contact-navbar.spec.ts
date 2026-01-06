import { test, expect } from '@playwright/test';

test('navigate to Contact via navbar', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Contact' link in the navbar
  await page.getByText('Contact').click();

  // Wait and verify the Contact page URL
  await page.waitForURL('https://mdrecord.ai/contact', { timeout: 10000 });
  await expect(page).toHaveURL('https://mdrecord.ai/contact');
});
