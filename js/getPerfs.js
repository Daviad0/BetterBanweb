  // Function to retrieve data from local storage
  function getData(key) {
    browser.storage.local.get(key).then(result => {
      console.log(`Retrieved data: ${key} = ${result[key]}`);
    }).catch(error => {
      console.error(`Error retrieving data: ${error}`);
    });
  }