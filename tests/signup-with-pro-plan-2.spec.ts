import { test, expect } from '@playwright/test';

// Function to generate a unique email address for Pro Plan 2 testing
function generateRandomEmail() {
  const timestamp = Date.now();
  // Using 'userpro2' prefix for clear identification in test runs
  return `userpro2_${timestamp}@example.com`;
}

test.describe('Signup with Pro Plan 2', () => {
  test('should sign up for Pro 2 and redirect to dashboard', async ({ page }) => {
    // Navigate to the main page
    await page.goto('https://mdrecord.ai/');
    // Wait until network activity subsides
    await page.waitForLoadState('networkidle');

    // Scroll down to ensure the target button is in the viewport
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Click the 'Upgrade to Pro 2' button
    // *** CHANGE: Targeting Pro 2 button instead of Pro 1 ***
    await page.getByText('Upgrade to Pro 2').click();

    // Check if redirected to the correct signup URL with the pro2 plan query
    // *** CHANGE: Expecting plan=pro2 in the URL ***
    await expect(page).toHaveURL('https://mdrecord.ai/signup?plan=pro2');

    // Fill the signup form
    await page.waitForSelector('input[name="name"], input[placeholder="Name"]');
    await page.locator('input[name="name"], input[placeholder="Name"]').fill('testuserpro2');
    await page.locator('input[name="email"], input[placeholder="Email"]').fill(generateRandomEmail());
    await page.locator('input[name="password"], input[placeholder="Password"]').fill('testpro2');

    // Handle optional confirm password field
    const confirmPassword = page.locator('input[name="confirmPassword"], input[placeholder*="Confirm"]');
    if (await confirmPassword.count()) {
      await confirmPassword.fill('testpro2');
    }

    // Submit the signup form by clicking a common button role/name
    await page.getByRole('button', { name: /sign up|register|create account|submit|Upgrade/i }).click();

    // Expect successful signup (redirect to dashboard)
    await expect(page).toHaveURL(/dashboard/);
  });
});