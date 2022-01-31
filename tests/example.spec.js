const { test, firefox, expect } = require('@playwright/test');

const BASE_URL = 'https://juice-shop.herokuapp.com';
// @ts-ignore

let browser, page, context;

test.describe('Owasp juice shop', () => {
  test.beforeAll(async () => {
    browser = await firefox.launch({ headless : false });
    page = await browser.newPage();
    context = await browser.newContext();

    await page.goto(`${BASE_URL}/#/`);
    await context.clearCookies();
    await page.evaluate(() => window.localStorage.clear());
  });

  test.afterAll(async function () {
    browser.close();
});

  test('Should visit about us', async () => {
    await page.goto(`${BASE_URL}/#/about`);
    await page.goto(`${BASE_URL}/#/photo-wall`);
    await page.url(`${BASE_URL}/ftp/legal.md`);
    await page.goto(`${BASE_URL}/ftp`, { failOnStatusCode: false });
  });

  test('should close the welcome banner and cookie notice', async () => {
    await page.goto(`${BASE_URL}/#/`);
    await page.locator('button[aria-label=\'Close Welcome Banner\']').click();
    await page.locator('a[aria-label=\'dismiss cookie message\']').click();
  });

  test('should navigate to login page', async () => {
    await page.goto(`${BASE_URL}/#/`);
    await page.waitForSelector('#navbarAccount');
    await page.locator('#navbarAccount').click();
    await page.locator('#navbarLoginButton').click();
    await expect(page).toHaveURL(/.*login/);
  });

  test('should type in credentials, press the login button and be logged in', async () => {
    await page.goto(`${BASE_URL}/#/login`);
    await page.waitForSelector('#email');
    await page.fill('#email', 'mc.safesearch@juice-sh.op');
    await page.press('#email', 'Tab');
    await page.type('#password', 'Mr. N00dles');
    await page.locator('#rememberMe');
    await page.click('#rememberMe');
    await page.waitForSelector('#loginButton');
    await page.locator('#loginButton');
    await page.click('#loginButton');
  });

  test('should open and close the item detail and further browse the site', async () => {
    await page.goto(`${BASE_URL}/#/`);
    await page.waitForSelector('.ribbon-card');
    await page.click('.ribbon-card');
    let content = await page.textContent('mat-dialog-content');
    expect(content).toBeTruthy();

    await page.waitForSelector('button[aria-label=\'Close Dialog\']');
    await page.click('button[aria-label=\'Close Dialog\']');
    content = await page.textContent('mat-dialog-content');
    await expect(content).not.toBe(false);
    await page.goto(`${BASE_URL}/profile`);

    await page.click('#username');
    await page.fill('#username', 'testing');

    await page.waitForSelector('#submit');
    await page.click('#submit');

    await page.goto(`${BASE_URL}/rest/user/data-export`, { failOnStatusCode: false });

  });  

  test('should visit the score board', async () => {
    await page.goto(`${BASE_URL}/#/score-board`);
  })

   test('should enter XSS payload into the search field', async () => {
    // await page.locator('button[aria-label=\'Close Welcome Banner\']').click();
    // await page.locator('a[aria-label=\'dismiss cookie message\']').click();

    const payload = '<iframe src="javascript:alert(\'xss\')">';

    await page.waitForSelector('#searchQuery');
    await page.click('#searchQuery');
    await page.waitForSelector('#mat-input-0');
    await page.type('#mat-input-0', payload);
    await page.keyboard.press('Enter');
  });
});
