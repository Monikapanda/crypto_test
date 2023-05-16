// const { Builder, By, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const assert = require('assert');
// const fs = require('fs');
// const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');

// const { setDefaultTimeout } = require('@cucumber/cucumber');
// setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 600000);

// let driver;

// Given('I am on the page {string}', async function(webpage) {
//     // Set Chrome options
//     const options = new chrome.Options();
//     options.addArguments('--headless');
//     options.addArguments("--window-size=1920,1080");
//     options.addArguments("--start-maximized");
//    // Set up the Selenium WebDriver
//    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

//    // Navigate to the homepage
//    await driver.get(webpage);
//    return 'success';
// });

// Then('the page title should be {string}', async function(expectedTitle) {
//   await driver.wait(until.titleIs(expectedTitle), 5000);
//   const actualTitle = await driver.getTitle();
//   assert.strictEqual(actualTitle, expectedTitle, 'Page title does not match expected title');
//   return 'success';
// });

// // click on "show rows" dropdown and select 20 rows
// When('I select {int} rows', async function(rows) {
//     await driver.manage().window().maximize();
//     //wait for the page to load
//     await driver.sleep(1000);
//     // remove the cookie banner
//     await driver.findElement(By.xpath('//*[@id="onetrust-reject-all-handler"]')).click();
//     // scroll the page to show "show rows" dropdown
//     await driver.executeScript("window.scrollBy(0, 300)");
//     await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div[2]/div[1]/div')).click();
//     // wait for the dropdown to appear
//     await driver.wait(until.elementLocated(By.xpath('//*[@id="tippy-1"]/div/div[1]/div/div/button[3]')), 5000);
//     await driver.findElement(By.xpath('//*[@id="tippy-1"]/div/div[1]/div/div/button[3]')).click();
//     return 'success';
//     });

// Then('I print the table', async function() {

//     var nextbutton_enabled = true;
//     var finalData = [];
//     var page = 0;
//     while (nextbutton_enabled == true) {
//         // wait for 3 seconds, to avoid stale element error
//         await driver.sleep(1000);
    
//         await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[4]/table')), 5000);
    
//         // Find the table element
//         let tableElement = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[4]/table'));
    
//         // Find all rows in the table
//         let rows = await tableElement.findElements(By.css('tbody tr'));
    
//         // Extract and display the data from each row
//         for (let row of rows) {
//         let columns = await row.findElements(By.css('tbody td'));
//         let rowData = [];
//         let review = {
//             rank: "",
//             name: "",
//             price: "",
//             marketcap: ""
//             };
        
    
//         for (let column of columns) {
//             let text = await column.getText();
//             rowData.push(text);
//         }
//             review.rank = rowData[1];
//             review.name = rowData[2];
//             review.price = rowData[3];
//             review.marketcap = rowData[7];
//             finalData.push(review)
    
//         }
//             let exists = await driver.findElements(By.xpath('//*[@class="next disabled"]')).then(found => !!found.length);
//             if(exists){
//             console.log('next button is disabled');
//             nextbutton_enabled = false;
//             break;
//         }
//         else {
//             let nextbutton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[6]/div[1]/div/ul/li[10]/a'));
//             // click on the next button
//             await nextbutton.click();
//             page++;
//             nextbutton_enabled = true;
//         }
//     }
//     require('fs').writeFile('filtered_data.json', JSON.stringify(finalData), (error) => {
//         if (error) {
//             throw error;
//         }
//     });
//     return 'success';
//     }
//     );

// //////////////////////////////////////////////////////////////////////////////////////////

// When('I filter by algorithm and select {string}', async function(fitercondition) {
    
//     // move the mouse to centre of the page
//     await driver.actions().move({x: 0, y: 0}).perform();
//     // Click on the "Filter" button
//     const filterButton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div[2]/div[2]/button[1]'));
//     await filterButton.click(); 
//     await driver.sleep(1000);
//     // Wait for the filter menu to appear and click on the "Algorithm" dropdown
//     const filterAlgo = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/ul/li[2]/div/span/button'));
//     await driver.wait(until.elementIsVisible(filterAlgo), 1000);
//     await filterAlgo.click(); 
//     // Wait for the "Algorithm" dropdown to appear and select the "PoW" option
//     await driver.sleep(1000);
//     const search = await driver.findElement(By.xpath('//*[@placeholder="Search"]'));
//     //type "PoW" in the search box
//     await search.sendKeys(fitercondition);
//     if (fitercondition == "PoW") {
//         const filterPoW = await driver.findElement(By.xpath('//*[text()="PoW"]')); 
//         await driver.wait(until.elementIsVisible(filterPoW), 5000);
//         await filterPoW.click();
//     }   
// });

// When('I add extra filter', async function() {
//     const addFilterButton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/ul/li[5]/button'));
//     await addFilterButton.click();
// });

// When('I toggle Mineable', async function() {
//     const optionButton = await driver.findElement(By.xpath('//label[@id="mineable"]'));
//     await driver.wait(until.elementIsVisible(optionButton), 5000);
//     await optionButton.click();
// });

// When('I select All Cryptocurrencies and then select Coins', async function() {
//         // Click on the "All Cryptocurrencies" dropdown
//         // wait for 3 seconds, to avoid stale element error
//         await driver.sleep(2000);
//         const allCryptoDropdown = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]/div[1]/div[1]/button'));
//         await driver.wait(until.elementIsVisible(allCryptoDropdown), 5000);
//         await allCryptoDropdown.click();
//         // Wait for the dropdown to appear and click on the "Coins" option
//         // wait for 3 seconds, to avoid stale element error
//         await driver.sleep(2000);
//         const coinsOption = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]/div[1]/div[2]/div[2]/button'));
//         await driver.wait(until.elementIsVisible(coinsOption), 1000);
//         await coinsOption.click();
//     });

// When('I select price and set minimum value to {float} and maximum to {int}', async function(min, max) {
//     // Click on the "Price" dropdown
//     await driver.sleep(1000);
//     const priceDropdown = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]/div[1]/div[3]/button'));
//     await priceDropdown.click();
//     // Wait for the "Price" dropdown to appear and set the minimum value to 1000 and the maximum value to 100000
//     const minPrice = await driver.findElement(By.xpath('//*[@data-qa-id="range-filter-input-min"]'));
//     await driver.wait(until.elementIsVisible(minPrice), 5000);
//     await minPrice.sendKeys(min);
//     const maxPrice = await driver.findElement(By.xpath('//*[@data-qa-id="range-filter-input-max"]'));
//     await maxPrice.sendKeys(max);

//     // Click on the "Apply" button
//     const applyButton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]/div/div[4]/div[2]/div/button[1]'));
//     await applyButton.click();
//     // click on the "Show results" button
//     const showResultsButton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[5]/div/div/div[2]/div[2]/button[1]'));
//     await showResultsButton.click();

// });

// let rowlength = 0;
// Then('I print the filtered table', async function() {

// var nextbutton_enabled = true;
// var finalData = [];
// while (nextbutton_enabled == true) {
//     // wait for 3 seconds, to avoid stale element error
//     await driver.sleep(1000);

//     await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[4]/table')), 5000);

//     // Find the table element
//     let tableElement = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[4]/table'));

//     // Find all rows in the table
//     let rows = await tableElement.findElements(By.css('tbody tr'));

//     //display row count
//     rowlength = rows.length;
//     console.log("row count: " + rowlength);
//     // Extract and display the data from each row
//     for (let row of rows) {
//     let columns = await row.findElements(By.css('tbody td'));
//     let rowData = [];
//     let review = {
//         rank: "",
//         name: "",
//         price: "",
//         marketcap: ""
//         };
    

//     for (let column of columns) {
//         let text = await column.getText();
//         rowData.push(text);
//     }
//         review.rank = rowData[1];
//         review.name = rowData[2];
//         review.price = rowData[3];
//         review.marketcap = rowData[7];
//         finalData.push(review)
//     }
//         let exists = await driver.findElements(By.xpath('//*[@class="next disabled"]')).then(found => !!found.length);
//         if(exists){
//         console.log('next button is disabled');
//         nextbutton_enabled = false;
//         break;
//     }
//     else {
//         let nextbutton = await driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div[1]/div[6]/div[1]/div/ul/li[4]/a'));
//         // click on the next button
//         await nextbutton.click();
//         nextbutton_enabled = true;
//     }
// }
// require('fs').writeFile('filtered_data.json', JSON.stringify(finalData), (error) => {
//     if (error) {
//         throw error;
//     }
// });
// return 'success';
// }
// );

// //////////////////////////////////
// var count = 0;
// let finalData = [];
// When('I match the filtered data with unfiltered data', async function() {

//     const filecontents = await fs.promises.readFile('filtered_data.json', 'utf8');
//     // get data from filtered_data.json
//     const filteredData = JSON.parse(filecontents);
//     // get data from unfiltered_data.json
//     const filecontents2 = await fs.promises.readFile('unfiltered_data.json', 'utf8');
//     const unfilteredData = JSON.parse(filecontents2);

//     // compare the data
//     var i = 0;
//     var j = 0;
//     for (i = 0; i < filteredData.length; i++) {
//         for (j = 0; j < unfilteredData.length; j++) {
//                 if (filteredData[i].name == unfilteredData[j].name) {
//                     if (filteredData[i].price == unfilteredData[j].price) {
//                         if (filteredData[i].marketcap == unfilteredData[j].marketcap) {
//                             finalData.push(filteredData[i]);
//                             count++;
//                     }
//                 }
//             }
//         }
//     }
// });

// Then('I print the results', async function() {
//     if (count > 0) {
//         console.log(count + " filtered data matches with unfiltered data");
//         console.log(finalData);
//     }
//     else {
//         console.log("\nAll fields of the filtered data do not match with unfiltered data");
//     }
//     assert.strictEqual(count, rowlength, 'Data does not match');
//     return 'success';
// });


// AfterAll(async function() {
//     // Quit the WebDriver after the tests have finished running
//     await driver.quit();
// });