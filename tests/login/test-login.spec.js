// @ts-check
const { test, expect } = require('@playwright/test');
const { login } = require('./helper-login');

test('Login com sucesso 2 @login2', async ({ page }) => {
    await login(page);
});