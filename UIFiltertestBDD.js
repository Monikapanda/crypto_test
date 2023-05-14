const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');

let driver;

Given('I am on the CoinMarketCap homepage', async function() {
  // Set up the Selenium WebDriver
  driver = await new Builder().forBrowser('chrome').build();

  // Navigate to the homepage
  await driver.get('https://coinmarketcap.com/');
});

Then('the page title should be {string}', async function(expectedTitle) {
  // Wait for the page to load and verify that the title is correct
  await driver.wait(until.titleIs(expectedTitle), 5000);
  const actualTitle = await driver.getTitle();
  assert.strictEqual(actualTitle, expectedTitle, 'Page title does not match expected title');
});

// When('I capture all the page contents', async function() {
//   // Get all the rows of data on the page
//   const rows = await driver.findElements(By.css('.cmc-table tbody tr'));

//   // Print out the contents of each row, 20 at a time
//   for (let i = 0; i < rows.length; i += 20) {
//     console.log(`Displaying rows ${i+1} to ${Math.min(i+20, rows.length)}:`);
//     for (let j = i; j < Math.min(i+20, rows.length); j++) {
//       console.log(await rows[j].getText());
//     }
//     console.log('---');
//   }
// });

// Given('I am on the CoinMarketCap homepage', async function() {
//   driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://coinmarketcap.com/');
// });

// When('I filter by algorithm and select PoW', async function() {
//   // Click on the "Filter" button
//   const filterButton = await driver.findElement(By.css('.cmc-filter-trigger'));
//   await filterButton.click();

//   // Wait for the filter menu to appear and click on the "Algorithm" dropdown
//   const filterMenu = await driver.findElement(By.css('.cmc-filter-menu'));
//   await driver.wait(until.elementIsVisible(filterMenu), 5000);
//   const algorithmDropdown = await filterMenu.findElement(By.xpath("//div[contains(@class, 'cmc-filter__dropdown-button') and text()='Algorithm']"));
//   await algorithmDropdown.click();

//   // Select "PoW" LOG("I'm here 1");
// // some code
// LOG("I'm here 2");
// // some code
// LOG("I'm here 3");
// // some code the dropdown and click "Apply"
//   const powOption = await filterMenu.findElement(By.xpath("//span[contains(@class, 'cmc-filter__dropdown-item') and text()='PoW']"));
//   await powOption.click();
//   const applyButton = await filterMenu.findElement(By.xpath("//button[contains(@class, 'cmc-filter__apply')]"));
//   await applyButton.click();
// });

// When('I toggle "Mineable" and click "+ Add Filter"', async function() {
//   // Wait for the filter menu to disappear, then click on the "Mineable" toggle
//   const filterMenu = await driver.findElement(By.css('.cmc-filter-menu'));
//   await driver.wait(until.elementIsNotVisible(filterMenu), 5000);
//   const mineableToggle = await driver.findElement(By.css('.cmc-filter__toggle-wrapper'));
//   await mineableToggle.click();

//   // Click on the "+ Add Filter" button
//   const addFilterButton = await driver.findElement(By.css('.cmc-filter__add-filter'));
//   await addFilterButton.click();
// });

// When('I select "All Cryptocurrencies", "Coins", and set price filters', async function() {
//   // Click on the "Cryptocurrencies" dropdown and select "All Cryptocurrencies"
//   const filterMenu = await driver.findElement(By.css('.cmc-filter-menu'));
//   const cryptocurrenciesDropdown = await filterMenu.findElement(By.xpath("//div[contains(@class, 'cmc-filter__dropdown-button') and text()='Cryptocurrencies']"));
//   await cryptocurrenciesDropdown.click();
//   const allCryptocurrenciesOption = await filterMenu.findElement(By.xpath("//span[contains(@class, 'cmc-filter__dropdown-item') and text()='All Cryptocurrencies']"));
//   await allCryptocurrenciesOption.click();

//   // Click on the "Type" dropdown and select "Coins"
//   const typeDropdown = await filterMenu.findElement(By.xpath("//div[contains(@class, 'cmc-filter__dropdown-button') and text()='Type']"));
//   await typeDropdown.click();
//   const coinsOption = await filterMenu.findElement(By.xpath("//span[contains(@class, 'cmc-filter__dropdown-item') and text()='Coins']"));
//   await coinsOption.click();

//   // Set the minimum and maximum price filters
//   const minPriceInput = await driver.findElement(By.css('#price_min'));
//   const maxPriceInput = await driver.findElement(By.css('#price_max'));
//   await minPriceInput.clear();
//   await minPriceInput.sendKeys('100');
//   await maxPriceInput.clear();
//   await maxPriceInput.sendKeys('10000');

//     // Click on the "Apply" button
//     const applyButton = await filterMenu.findElement(By.xpath("//button[contains(@class, 'cmc-filter__apply')]"));
//     await applyButton.click();
  
//     // Wait for the page to load with the new filters
//     await driver.wait(until.urlContains('price_min=100'), 5000);
  
//     // Display the page contents
//     const pageContents = await driver.findElement(By.css('.cmc-table')).getText();
//     console.log(pageContents);
//   });
  
//   AfterAll(async function() {
//     await driver.quit();
//   });  


// AfterAll(async function() {
//   // Quit the WebDriver after the tests have finished running
//   await driver.quit();
// });
