const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker')

let emailfake = faker.internet.email();

async function abrirSite(page) {
    await page.goto('https://automationpratice.com.br/');       
}

async function logar(page) {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').fill('qazando@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Olá, qazando@gmail.com')).toBeVisible();
}

async function entrarcomdados(page, password) {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').fill(emailfake);
    await page.locator('#password').fill(password);
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Olá, ' + emailfake)).toBeVisible();
}

module.exports = {
    logar,
    entrarcomdados,
    abrirSite
}