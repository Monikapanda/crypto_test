# crypto_test
UI Test:
There are 2 files for UI Filter test coinmarketBDD.js and coinmarketfulldata.js
Since I was not aware comparison between filtered and all data of the website or just comparing with the first 20 rows of the website. 
coinmarketBDD.js : compares the filtered data with the 1st 20 rows of the website. There is a chance that the data might not match hence assert is not used.
coinmarketfulldata.js : ompares the filtered data with all data of the website. This file is commented out now entirely. For running it, you can uncomment it and comment out coinmarketBDD.js as it will create conflicts if both are left uncommented.

All the dependencies have been added into the package.json file. You can install it in your project by:
npm install

The given code runs only for chrome. We can also run it for firfox by intsalling geckodriver.

You can clone the project to your local folder by:
git clone https://github.com/Monikapanda/crypto_test.git
And run it by:
npx cucumber-js

No reporting has been added yet hence the results will be displayed in the console.
You can see the unfiltered and filtered data in the respective json files.

API test:
To run the API test which is not in BDD, you can run:
node coinmarketapi.js

The API key should be stored in the config.json which is stored in the gitignore. While running the api test, you can create a config.json file and add your API Key as:
{
  "apikey": "******"
}
