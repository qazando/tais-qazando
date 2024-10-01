// @ts-check
const { test, expect } = require('@playwright/test');
const { logar, entrarcomdados, abrirSite } = require('./login-helper2');

test.beforeEach(async ({ page }) => {
    await abrirSite(page);
});

test('Login com sucesso chamando page @logar', async ({ page }) => {
    await entrarcomdados(page, '123456');
});