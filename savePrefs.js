// Function to save data to local storage
function saveData(key, value) {
    const data = {};
    data[key] = value;
    browser.storage.local.set(data).then(() => {
      console.log(`Data saved: ${key} = ${value}`);
    }).catch(error => {
      console.error(`Error saving data: ${error}`);
    });
  }