# crypto_test
UI Test:
All the dependencies have been added into the package.json file. You can install it in your project by:
npm install

Also, install the chromedriver to match the version of your chrome by:
npm install chromedriver

The given code runs only for chrome. We can also run it for firfox by intsalling geckodriver.

You can clone the project to your local folder and run it by:
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
