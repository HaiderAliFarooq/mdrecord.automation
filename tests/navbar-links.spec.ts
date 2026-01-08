import { test, expect } from '@playwright/test';

test('verify common navbar links navigate correctly when present', async ({ page }) => {
  await page.goto('https://mdrecord.ai/');

  const navChecks = [
    { name: 'Home', contains: 'https://mdrecord.ai/' },
    { name: 'Features', contains: '#features' },
    { name: 'Contact', contains: '/contact' },
    { name: 'Sign up', contains: '/signup' },
    { name: 'Pricing', contains: '/pricing' },
  ];

  for (const nav of navChecks) {
    const link = page.getByRole('link', { name: nav.name });
    if (await link.count() === 0) continue; // skip if not present

    await Promise.all([
      page.waitForURL((url) => url.toString().includes(nav.contains), { timeout: 8000 }).catch(() => {}),
      link.first().click(),
    ]);

    const current = page.url();
    expect(current.includes(nav.contains), `${nav.name} did not navigate to expected location: ${current}`).toBeTruthy();

    // return to home for next check if not already there
    if (!current.startsWith('https://mdrecord.ai/')) {
      await page.goto('https://mdrecord.ai/');
    }
  }
});
