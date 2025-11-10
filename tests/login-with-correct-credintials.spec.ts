// spec: login with correct credintials
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();



test.describe('Login', () => {
  test('login with correct credintials', async ({ page }) => {
    // 1. Go to the login page
    await page.goto('https://mdrecord.ai/');

    // 2. Fill in email and password
    await page.getByLabel('Email').fill(process.env.EMAIL!);
    await page.getByLabel('Password').fill(process.env.PASSWORD!);

    // 3. Click the login button
    await page.getByRole('button', { name: /login/i }).click();

    // 4. Verify successful login (adjust selector as needed)
    await expect(page).toHaveURL(/dashboard|home/);
  });
});