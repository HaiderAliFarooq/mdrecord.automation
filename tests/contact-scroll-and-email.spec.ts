import { test, expect } from '@playwright/test';

test('scroll down and open Contact page', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  // Scroll to the bottom to expose footer links
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);

  // Click the Contact link (prefer footer instance)
  const contactLink = page.locator('text=Contact');
  if (await contactLink.count() === 0) {
    throw new Error('Contact link not found on page');
  }
  await contactLink.last().click();

  // Wait for contact page to load and verify URL
  await page.waitForURL(/https:\/\/mdrecord\.ai\/contact/, { timeout: 10000 });
  await expect(page).toHaveURL(/https:\/\/mdrecord\.ai\/contact/);
});
