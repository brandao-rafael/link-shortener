import { log } from 'console';
import puppeteer, { Browser, Page } from 'puppeteer';

describe('Link Shortener E2E Test', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should generate and redirect a short link', async () => {

    const baseUrl = 'http://localhost:3000';
    const returnedUrl = 'http://localhost:3005/google';

    // Navigate to the generate short link page
    console.log('Navigating to base URL');
    await page.goto(`${baseUrl}`);
    console.log('Waiting for #originalUrl');
    await page.waitForSelector('#originalUrl');
    console.log('Waiting for #linkName');
    await page.waitForSelector('#linkName');

    // Type the original URL into the input field and submit the form
    console.log('Typing into #originalUrl');
    await page.type('#originalUrl', 'https://www.google.com');
    console.log('Typing into #linkName');
    await page.type('#linkName', 'google');
    console.log('Clicking button[type="button"]');
    await page.click('button[type="button"]');

    // Wait for the response from the server
    console.log('Waiting for #shortUrl');
    await page.waitForSelector('#shortUrl');
    
    // Assert that the short link has been generated
    console.log('Asserting #shortUrl');
    expect(await page.$eval('#shortUrl', (el) => el.textContent)).toContain(returnedUrl);

    // Navigate to the short link and check if it redirects to the original URL
    console.log('Navigating to #shortUrl');
    await page.goto(returnedUrl, { waitUntil: 'networkidle0', timeout: 20000 });
    expect(page.url()).toContain('https://www.google.com');

  }, 30000);
});
