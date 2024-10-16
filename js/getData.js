  // Function to retrieve data from local storage
  function getData(key) {

    let prom = new Promise((resolve, reject) => {
      chrome.storage.local.get(key).then(result => {
        console.log(`Retrieved data: ${key} = ${result[key]}`);
        resolve(result[key]);
      }).catch(error => {
        console.error(`Error retrieving data: ${error}`);
        reject(error);
      });
    });

    return prom;
  }
  