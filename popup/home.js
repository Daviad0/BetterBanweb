// store all of the settings
let settings = {
    "general_theme-enabled": null,
    "general_dark-mode": null
}

async function changeSetting(context){
    let setting = context.id;
    let type = context.type;

    let value = null;

    switch(type){
        case "checkbox":
            value = context.checked;
            break;
        case "text":
            value = context.value;
            break;
    }

    await saveData(setting, value);
    showSuccessMessage();
}

function updateControls(){
    let settingsKeys = Object.keys(settings);
    for(let i = 0; i < settingsKeys.length; i++){
        let setting = settingsKeys[i];
        let control = document.getElementById(setting);

        if(control){
            switch(control.type){
                case "checkbox":
                    control.checked = settings[setting];
                    break;
                case "text":
                    control.value = settings[setting];
                    break;
            }
        }
    }
}

async function initialGetSettings(){
    let settingsKeys = Object.keys(settings);
    for(let i = 0; i < settingsKeys.length; i++){
        let settingData = await getData(settingsKeys[i]);

        if(settingData){
            settings[settingsKeys[i]] = settingData;
        }
    }

    updateControls();
}

Array.from(document.querySelectorAll(".setting")).forEach(input => {
    if(input.type == "checkbox"){
        input.addEventListener("click", function(){
            changeSetting(this);
        });
    }else{
        input.addEventListener("change", function(){
            changeSetting(this);
        });
    }
});

document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        initialGetSettings();
    }
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Preferences saved successfully!';
    successMessage.style.position = 'fixed';
    successMessage.style.bottom = '20px';
    successMessage.style.right = '20px';
    successMessage.style.padding = '10px';
    successMessage.style.backgroundColor = '#4CAF50'; // Green background
    successMessage.style.color = 'white';
    successMessage.style.borderRadius = '5px';
    successMessage.style.zIndex = '1000'; // Ensure it's on top of other elements

    document.body.appendChild(successMessage);

    // Remove the message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Function to load data from local storage
function loadData(key) {
    return browser.storage.local.get(key).then(data => {
        return data[key]; // Return the stored value
    }).catch(error => {
        console.error(`Error loading data: ${error}`);
    });
}

