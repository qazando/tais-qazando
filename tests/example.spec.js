// @ts-check
const { test, expect } = require('@playwright/test');

test('Login com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('qazando@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Olá, qazando@gmail.com')).toBeVisible();
});