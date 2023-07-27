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
    await page.goto(`${baseUrl}`);
    await page.waitForSelector('#originalUrl');
    await page.waitForSelector('#linkName');

    // Type the original URL into the input field and submit the form
    await page.type('#originalUrl', 'https://www.google.com');
    await page.type('#linkName', 'google');
    await page.click('button[type="button"]');

    // Wait for the response from the server
    await page.waitForSelector('#shortUrl');
    
    // Assert that the short link has been generated
    expect(await page.$eval('#shortUrl', (el) => el.textContent)).toContain(returnedUrl);

    // Navigate to the short link and check if it redirects to the original URL
    await page.goto(returnedUrl, { waitUntil: 'networkidle0', timeout: 20000 });
    expect(page.url()).toContain('https://www.google.com');
  });
});
