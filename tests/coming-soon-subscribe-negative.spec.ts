import { test, expect } from '@playwright/test';

test('subscribe without email shows error (separate file)', async ({ page }) => {
  await page.goto('https://mdrecord.ai/coming-soon');

  const emailInput = page.locator('input[type="email"], input[name*="email"], input[placeholder*="email"]');
  await emailInput.fill('');

  const submitBtn = page.locator('button[type="submit"], button:has-text("Subscribe"), button:has-text("Notify"), button:has-text("Submit")');
  if (await submitBtn.count() > 0) {
    await submitBtn.first().click();
  } else {
    await emailInput.press('Enter');
  }

  const errorMessage = page.getByText(/please enter|required|invalid email|enter a valid email|this field is required/i);
  await expect(errorMessage).toBeVisible({ timeout: 5000 });
});
