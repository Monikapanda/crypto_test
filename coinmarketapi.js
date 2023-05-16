const axios = require('axios');
var CONFIG = require('./config.json');

var apikey = CONFIG.apikey;

let response = null;
var convert_id = 2791;
var amount = 10000000;
var id = 3541
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?convert_id='+convert_id+'&amount='+amount+'&id='+id, {
      headers: {
        'X-CMC_PRO_API_KEY': apikey,
      },
      
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const results = response.data;
    status_code = response.status;
    console.log(status_code);
    if (status_code == 200) {
      console.log('success');
      if (results.data.quote == null) {
        console.log('unable to get data');
      }
      else {
        // print the price in json data 
        price = results.data.quote[2791].price;
        console.log('10000000 Guatemalan Quetzal = '+price+' GBP');
      }
    }
    else {
      console.log('error');
      console.log('error code:' + status_code);
    }
   }

   let response2 = null;
    convert_id = 1458;
    amount = price;
    id = 2791;
   try {
    response2 = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?convert_id='+convert_id+'&amount='+amount+'&id='+id, {
      headers: {
        'X-CMC_PRO_API_KEY': apikey,
      },
    });
    //dogeswap(convert-id): 1458
    //pound(id): 2791
  } catch(ex) {
    response2 = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response2) {
    // success
    const results = response2.data;
    status_code = response2.status;
    console.log(status_code);
    if (status_code == 200) {
      console.log('success');
      length = Object.keys(results.data.quote).length;
      if (length == 0) {
        console.log('The api call is successfull but the data is empty,hence unable to get final price');
      }
      else {
        dogeprice = results.data.quote[1458].price;
        console.log(price+' GBP = '+dogeprice+' DOGE');
      }
    }
    else {
      console.log('error');
      console.log('error code:' + status_code);
    }
   }
});
