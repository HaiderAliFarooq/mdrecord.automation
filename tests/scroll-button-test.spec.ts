import { test, expect } from '@playwright/test';

test('Click "Start Your Free Trial" button after scrolling and verify sign-up URL', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('https://mdrecord.ai/');
    // Wait for the network to be idle to ensure all elements are loaded
    await page.waitForLoadState('networkidle');

    // 2. Scroll down to the end of the page to ensure the button is in the viewport
    // This JavaScript command scrolls the viewport to the very bottom of the document
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 3. Locate and click the "Start Your Free Trial" button using getByText for robustness
     await page.getByRole('link', { name: 'Start Your Free Trial' }).last().click();

    // 4. Expect the URL to change to the sign-up page (allow for possible redirects)
    await expect(page).toHaveURL(/signup|register|free-trial/);
});