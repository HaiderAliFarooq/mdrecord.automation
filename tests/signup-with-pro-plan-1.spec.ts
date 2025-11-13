import { test, expect } from '@playwright/test';

function generateRandomEmail() {
  const timestamp = Date.now();
  return `userpro1_${timestamp}@example.com`;
}

test.describe('Signup with Pro Plan 1', () => {
  test('should sign up and redirect to dashboard', async ({ page }) => {
    await page.goto('https://mdrecord.ai/');
    await page.waitForLoadState('networkidle');

    // Scroll down to make the button visible
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Click the 'Upgrade to Pro 1' button
    await page.getByText('Upgrade to Pro 1').click();

    // Check if redirected to the correct signup URL
    await expect(page).toHaveURL('https://mdrecord.ai/signup?plan=pro1');

    // Fill the signup form
    await page.waitForSelector('input[name="name"], input[placeholder="Name"]');
    await page.locator('input[name="name"], input[placeholder="Name"]').fill('testuserpro1');
    await page.locator('input[name="email"], input[placeholder="Email"]').fill(generateRandomEmail());
    await page.locator('input[name="password"], input[placeholder="Password"]').fill('testpro1');

    // If there's a confirm password field
    const confirmPassword = page.locator('input[name="confirmPassword"], input[placeholder*="Confirm"]');
    if (await confirmPassword.count()) {
      await confirmPassword.fill('testpro1');
    }

    // Submit the signup form
    await page.getByRole('button', { name: /sign up|register|create account|submit|Upgrade/i }).click();

    // Expect successful signup (redirect to dashboard)
    await expect(page).toHaveURL(/dashboard/);
  });
});
