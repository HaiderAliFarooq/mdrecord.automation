import { test, expect } from '@playwright/test';

test('subscribe on Coming Soon page', async ({ page }) => {
  await page.goto('https://mdrecord.ai/coming-soon');

  const email = `test+${Date.now()}@example.com`;
  const emailInput = page.locator('input[type="email"], input[name*="email"], input[placeholder*="email"]');
  await emailInput.fill(email);
  await emailInput.press('Enter');

  const successMessage = page.getByText(/thank you|successfully|subscribed|we will notify|we have received/i);
  await expect(successMessage).toBeVisible({ timeout: 10000 });
});
