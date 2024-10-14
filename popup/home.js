// store all of the settings
let settings = {
    "general_theme-enabled": null
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

Array.from(document.querySelectorAll("setting")).forEach(input => {
    if(input.type === "checkbox"){
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

