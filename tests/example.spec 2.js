const { test, expect, firefox } = require('@playwright/test');
// @ts-ignore

const url = 'https://juice-shop.herokuapp.com';
const email = 'mc.safesearch@juice-sh.op';
const password = 'Mr. N00dles';

test.describe('Owasp juice shop', () => {

  test('Clear Cookies and localStorage', async ({ page, context }) => {
    await page.goto('https://juice-shop.herokuapp.com/#');
    await context.clearCookies();
    await page.evaluate(() => window.localStorage.clear());
  });

  test('Should visit about us', async ({ page, context }) => {
    await context.clearCookies();
    //await page.evaluate(() => window.localStorage.clear());
    await page.goto('https://juice-shop.herokuapp.com/#/about');
    await page.goto('https://juice-shop.herokuapp.com/#/photo-wall');
    await page.url('https://juice-shop.herokuapp.com/ftp/legal.md');
    await page.goto('https://juice-shop.herokuapp.com/ftp');
  });

  test('should close the welcome banner and cookie notice', async ({ page, context }) => {
    await context.clearCookies();
    //await page.evaluate(() => window.localStorage.clear());
    await page.goto('https://juice-shop.herokuapp.com/#');
    await page.locator('button[aria-label=\'Close Welcome Banner\']').click();
    await page.locator('a[aria-label=\'dismiss cookie message\']').click();
  });
  // -----------------------------------------
  test('should navigate to login page', async ({ page, context }) => {
    await context.clearCookies();
    //await page.evaluate(() => window.localStorage.clear());
    await page.goto('https://juice-shop.herokuapp.com/#');
    await page.locator("button#navbarAccount").waitFor().click();
    await page.locator("button#navbarLoginButton").waitFor().click();
    await page.url().should("include", "login");
  });

  test('should visit the score board', async ({ page }) => {
    await page.goto('https://juice-shop.herokuapp.com/#/score-board');
  });

  test('should type in credentials, press the login button and be logged in', async ({ page, browser, context }) => {

    await page.goto('https://juice-shop.herokuapp.com/#/login');
    //await page.waitForSelector('input[id = \'email\']');
    await page.fill('input[id = \'email\']', 'mc.safesearch@juice-sh.op');
    await page.press('input[id = \'email\']', 'Tab');
    await page.type('input[id = \'password\']', 'Mr. N00dles');
    // await page.locator('mat-checkbox-label');
    // await page.click('mat-checkbox-label');
    await page.waitForSelector('#loginButton');
    await page.locator('#loginButton');
    await page.click('#loginButton');

    await context.storageState({ path: 'user.json' });

  });

  test('should open and close the item detail and further browse the site', async ({ page, browser }) => {
    // await page.goto('https://juice-shop.herokuapp.com/#/');
    // await page.waitForSelector('.ribbon-card');
    // await page.click('.ribbon-card');
    // let content = await page.('mat-dialog-content');
    // expect(content).toBeTruthy();

    // await page.waitForSelector('button[aria-label=\'Close Dialog\']');
    // await page.click('button[aria-label=\'Close Dialog\']');
    // content = await page.textContent('mat-dialog-content');
    // await expect(content).not.toBe(false);
    await browser.newContext({ storageState: 'user.json' });

    await page.goto('https://juice-shop.herokuapp.com/profile');

    //await page.waitForSelector('#username');
    //await page.click('#username', {clickCount : 3});
    await page.locator('#username');
    await page.fill('input[id = \'username\']', 'testing');

    await page.waitForSelector('#submit');
    await page.click('#submit');

    await page.goto('https://juice-shop.herokuapp.com/rest/user/data-export', { failOnStatusCode: false });

  });


  //   it("should enter XSS payload into the search field", () => {
  //       cy.get("button[aria-label='Close Welcome Banner']").click();
  //       cy.get("a[aria-label='dismiss cookie message']").click();

  //       const payload = '<iframe src="javascript:alert('xss')">';

  //       cy.get("#searchQuery").click();
  //       cy.get("#mat-input-0").clear().type(payload) + '{enter}';
  //   })

  // test('should enter XSS payload into the search field', async ({ page }) => {
  //   await page.waitForSelector('button[aria-label=\'Close Welcome Banner\']');
  //   await page.click('button[aria-label=\'Close Welcome Banner\']');

  //   await page.waitForSelector('a[aria-label=\'dismiss cookie message\']');
  //   await page.click('a[aria-label=\'dismiss cookie message\']');

  //   const payload = '<iframe src="javascript:alert('xss')">';

  //   await page.waitForSelector('#searchQuery');
  //   await page.click('#searchQuery');

  //   await page.locator('#mat-input-0').clear();
  // });

});
