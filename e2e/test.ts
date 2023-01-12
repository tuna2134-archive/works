import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
    await page.goto("http://localhost:3000")
    await page.screenshot({ path: 'test.png'})
})