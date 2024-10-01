const {expect } = require('@playwright/test');
const {faker} = require('@faker-js/faker')

let emailfake = faker.internet.email();

async function login(page) {

    await page.goto('https://automationpratice.com.br/');

    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').fill(emailfake);
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Olá, ' + emailfake)).toBeVisible();
}

module.exports = {
    login
}