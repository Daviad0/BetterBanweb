getData("general_dark-mode").then(result => {

    if(result){
        document.body.classList.add("dark");
    }
    
});



document.getElementById("welcomemessage").innerHTML = `
    <img src="${browser.runtime.getURL("resources/images/MTU_LOGO.png")}" alt="Michigan Tech Logo">
`;

document.getElementById("menuTrackInst").style.width = "";