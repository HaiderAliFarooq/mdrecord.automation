import { test, expect } from '@playwright/test';

test('navigate to Features via navbar', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Click on the 'Features' link in the navbar
  await page.getByText('Features').click();

  // Wait and verify the Features anchor URL (hash)
  await page.waitForURL('https://mdrecord.ai/#features', { timeout: 10000 });
  await expect(page).toHaveURL('https://mdrecord.ai/#features');
});
