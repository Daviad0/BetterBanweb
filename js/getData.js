// Function to retrieve data from local storage
function getData(key) {
  let browser = window.chrome ?? window.browser;

  let prom = new Promise((resolve, reject) => {
    browser.storage.local.get(key).then(result => {
      console.log(`Retrieved data: ${key} = ${result[key]}`);
      resolve(result[key]);
    }).catch(error => {
      console.error(`Error retrieving data: ${error}`);
      reject(error);
    });
  });

  return prom;
}
