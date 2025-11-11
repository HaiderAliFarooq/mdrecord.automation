import { test, expect } from '@playwright/test';

function generateRandomEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@example.com`;
}

test.describe('Signup', () => {
  test('signup with random email', async ({ page }) => {
    await page.goto('https://mdrecord.ai/');

    // Click the 'Try For Free' button to open the signup form
    await page.getByText('Try For Free').click();
    // Wait for the signup form to appear
    await page.waitForSelector('input[name="name"], input[placeholder="Name"], label:has-text("Name")');
    await page.waitForSelector('input[name="email"], input[placeholder="Email"], label:has-text("Email")');
    await page.waitForSelector('input[name="password"], input[placeholder="Password"], label:has-text("Password")');

    // Fill in the signup form
    await page.locator('input[name="name"], input[placeholder="Name"]').fill('TestUser123!');
    await page.locator('input[name="email"], input[placeholder="Email"]').fill(generateRandomEmail());
    await page.locator('input[name="password"], input[placeholder="Password"]').fill('TestPassword123!');

    // If there's a confirm password field
    const confirmPassword = page.locator('input[name="confirmPassword"], input[placeholder*="Confirm"]');
    if (await confirmPassword.count()) {
      await confirmPassword.fill('TestPassword123!');
    }

    // Submit the signup form
    await page.getByRole('button', { name: /sign up|register|create account|submit|Try For Free/i }).click();

    // Expect successful signup (update selector as needed)
    await expect(page).toHaveURL(/dashboard|home|welcome|verify|success/);
  });
});
