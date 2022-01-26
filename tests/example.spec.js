const { test, expect } = require('@playwright/test');
// @ts-ignore

const url = 'https://juice-shop.herokuapp.com';
const email = 'mc.safesearch@juice-sh.op';
const password = 'Mr. N00dles';

test.describe('Owasp juice shop', () => {

  test.beforeEach(async ({ page, context }) => {
    await page.goto(`${url}/#`);
    await context.clearCookies();
    await page.evaluate(() => window.localStorage.clear());
  });

  test('Should visit about us', async ({ page }) => {
    await page.goto(`${url}#/about`);
    await page.goto(`${url}/#/photo-wall`);
    await page.url(`${url}/ftp/legal.md`);
    await page.goto(`${url}/ftp`);
  });

  test('should close the welcome banner and cookie notice', async ({ page }) => {
    await page.goto(`${url}/`);
    await page.locator('button[aria-label=\'Close Welcome Banner\']').click();
    await page.locator('a[aria-label=\'dismiss cookie message\']').click();
  });
// -----------------------------------------
  test('should navigate to login page', async ({ page }) => {
    await page.goto(`${url}/#`);
    await page.waitForSelector('button#navbarAccount');
    await page.click('button#navbarAccount');

    await page.waitForSelector('button#navbarLoginButton');
    await page.click('button#navbarLoginButton');
    await page.url('include', 'login');
  });

  test('should visit the score board', async ({ page }) => {
    await page.goto('https://juice-shop.herokuapp.com/#/score-board');
  });

  test.describe('Authenticated Pages', () => {
    test('should type in credentials, press the login button and be logged in', async ({ page }) => {
      await page.goto('https://juice-shop.herokuapp.com/#/login');
      await page.waitForSelector('input#email');
      await page.click('input#email');
      await page.fill('#email', email);
  
      await page.click('#password');
      await page.fill('#password', password);
  
      await page.click('#rememberMe');
      await page.click('#loginButton');
    });

    test('should open and close the item detail and further browse the site', async ({ page }) => {
      // await page.goto('https://juice-shop.herokuapp.com/#/');
      // await page.waitForSelector('.ribbon-card');
      // await page.click('.ribbon-card');
      // let content = await page.('mat-dialog-content');
      // expect(content).toBeTruthy();
  
      // await page.waitForSelector('button[aria-label=\'Close Dialog\']');
      // await page.click('button[aria-label=\'Close Dialog\']');
      // content = await page.textContent('mat-dialog-content');
      // await expect(content).not.toBe(false);
  
      await page.goto('https://juice-shop.herokuapp.com/profile');
  
      await page.waitForSelector('#username');
      //await page.click('#username', {clickCount : 3});
      await page.fill('#username', 'testing');
  
      await page.waitForSelector('#submit');
      await page.click('#submit');
  
      await page.goto('https://juice-shop.herokuapp.com/rest/user/data-export', { failOnStatusCode: false });
  
    });
  });
  

  //   it("should enter XSS payload into the search field", () => {
  //       cy.get("button[aria-label='Close Welcome Banner']").click();
  //       cy.get("a[aria-label='dismiss cookie message']").click();

  //       const payload = '<iframe src="javascript:alert(`xss`)">';

  //       cy.get("#searchQuery").click();
  //       cy.get("#mat-input-0").clear().type(payload) + '{enter}';
  //   })

  // test('should enter XSS payload into the search field', async ({ page }) => {
  //   await page.waitForSelector('button[aria-label=\'Close Welcome Banner\']');
  //   await page.click('button[aria-label=\'Close Welcome Banner\']');

  //   await page.waitForSelector('a[aria-label=\'dismiss cookie message\']');
  //   await page.click('a[aria-label=\'dismiss cookie message\']');

  //   const payload = '<iframe src="javascript:alert(`xss`)">';

  //   await page.waitForSelector('#searchQuery');
  //   await page.click('#searchQuery');

  //   await page.locator('#mat-input-0').clear();
  // });

});
