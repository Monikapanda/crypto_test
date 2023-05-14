const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('CoinMarketCap', function() {
  let driver;

  before(async function() {
    // Set up the Selenium WebDriver
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('should have the correct title', async function() {
    // Navigate to the homepage and verify that the title is correct
    await driver.get('https://coinmarketcap.com/');
    await driver.wait(until.titleIs('Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap'), 5000);
    const actualTitle = await driver.getTitle();
    assert.strictEqual(actualTitle, 'Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap', 'Page title does not match expected title');
  });

  it('should display page contents in groups of 20 rows', async function() {
    // Navigate to the homepage and get all the rows of data on the page
    await driver.get('https://coinmarketcap.com/');
    const rows = await driver.findElements(By.css('.cmc-table tbody tr'));

    // Print out the contents of each row, 20 at a time
    for (let i = 0; i < rows.length; i += 20) {
      console.log(`Displaying rows ${i+1} to ${Math.min(i+20, rows.length)}:`);
      for (let j = i; j < Math.min(i+20, rows.length); j++) {
        console.log(await rows[j].getText());
      }
      console.log('---');
    }
  });

  after(async function() {
    // Quit the WebDriver after the tests have finished running
    await driver.quit();
  });
});
