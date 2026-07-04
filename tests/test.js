import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'light'));
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Hazim Imanuddin/ })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'SvelteKit PDF Editor' })).toBeVisible();

	await page.getByRole('button', { name: 'Toggle dark mode' }).click();
	await expect(page.locator('html')).toHaveClass(/dark/);
});
