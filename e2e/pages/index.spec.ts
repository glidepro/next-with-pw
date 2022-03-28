import { test, expect } from '@playwright/test'

test('should visit the home-page and ensure it renders correctly', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expect(page.locator('h1')).toContainText('Groovy...')

  expect(await page.screenshot()).toMatchSnapshot()
})
