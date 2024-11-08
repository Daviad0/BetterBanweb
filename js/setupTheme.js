function setupTheme(){
    getData("general_dark-mode").then(result => {
        if(result){
            document.body.classList.add("dark");
        }
    });

    let specialColors = [
        "general_mtu-color",
        "general_mtu-black",
        "general_mtu-container",
        "general_mtu-light",
        "general_mtu-dark-color",
        "general_mtu-dark-text",
        "general_mtu-dark-background",
        "general_mtu-success"
    ]

    specialColors.forEach(color => {
        getData(color).then(result => {

            let colorPortion = color.split("_")[1];

            if(result && result != ""){
                document.body.style.setProperty(`--${colorPortion}`, result);
            }
        });
    });

    document.body.classList.add("ready");
}

setupTheme();