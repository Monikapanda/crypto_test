const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?convert_id=2791&amount=10000000&id=3541', {
      headers: {
        'X-CMC_PRO_API_KEY': '1856fe81-aacb-4097-8c0b-22fc61313f48',
      },
      parameters: {
        'convert_id':'2791',
        'amount':'10000000',
        'id':'3541'
      }
    });
    //dogeswap(conver-id): 1458
    //pound(id): 2791
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const results = response.data;
    //console.log(results.data); 
    status_code = response.status;
    console.log(status_code);
    if (status_code == 200) {
      console.log('success');
      // console.log(results.data); 
      // print the price in json data 
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
   try {
    response2 = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?convert_id=1458&amount='+price+'&id=2791', {
      headers: {
        'X-CMC_PRO_API_KEY': '1856fe81-aacb-4097-8c0b-22fc61313f48',
      },
      parameters: {
        'convert_id':'1458',
        'amount':price,
        'id':'2791'
      }
    });
    //dogeswap(conver-id): 1458
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
      // console.log(results.data); 
      // find lenght of json data
      length = Object.keys(results.data.quote).length;
      if (length == 0) {
        console.log('unable to get data');
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
