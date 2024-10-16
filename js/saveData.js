// Function to save data to local storage
function saveData(key, value) {

  let prom = new Promise((resolve, reject) => {
    const data = {};
    data[key] = value;
    chrome.storage.local.set(data).then(() => {
      console.log(`Data saved: ${key} = ${value}`);
      resolve();
    }).catch(error => {
      console.error(`Error saving data: ${error}`);
      reject(error);
    });
  });

  return prom;

}