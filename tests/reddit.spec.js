const { test, firefox, expect } = require("@playwright/test");

const BASE_URL = "https://www.reddit.com/";
// @ts-ignore

let browser, page, context;

// browser = await firefox.launch({ headless : false });
// page = await browser.newPage();
// context = await browser.newContext();

const username = 'learne2eplaywright';
const password = 'VDQy2dntG8TM263';

test.describe('Login', () => {
  test.beforeAll(async () => {
    browser = await firefox.launch({ headless: false });
    page = await browser.newPage();
    context = await browser.newContext();

    await page.goto(`${BASE_URL}`);
    await context.clearCookies();
    await page.evaluate(() => window.localStorage.clear());
  });

  test.afterAll(async function () {
    browser.close();
  });
  // Execute Following Tests
  test('Should visit reddit homepage', async () => {
    await page.locator('a[class=\'_3Wg53T10KuuPmyWOMWsY2F _2iuoyPiKHN3kfOoeIQalDT _2tU8R9NTqhvBrhoNAXWWcP HNozj_dKjQZ59ZsfEegz8 _2nelDm85zKKmuD94NequP0\']').click();
    await page.waitForSelector('input[id=\'loginUsername\']');
    await page.click('input[id=\'loginUsername\']');
    await page.fill('input[id=\'loginUsername\']', 'sandro');
    await page.type('input[id=\'loginPassword\']', 'sandro');
    await page.locator('button[class=\'AnimatedForm__submitButton m-full-width\']').click();
  });
});
