// Two storage things?
// chrome.storage.local.get/set
// chrome.storage.sync.get/set

(window.chrome ?? window.browser).runtime.onInstalled.addListener(function() {
    // Stuff that runs on installation. Can perform global settings initialization here
});




browser.runtime.onMessage.addListener((message, sender, sendResponse) => {


    // message possible values: "getUserData"
    if(message === "getUserData") {
        console.log("HELPPPP");
        let promise = new Promise((resolve, reject) => {
        
            // Get user data from storage
            let url = "https://sso.mtu.edu/";

            console.log("HELPPPP");
            // get the content of the page
        
            let request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.withCredentials = true;
            request.onreadystatechange = function(){
                console.log(request.readyState);
                console.log(request.status);
                if(request.readyState == 4 && request.status == 200){

                    sendResponse({
                        string: request.responseText
                    });

                

                    
                    // let form = doc.querySelector('form');
                    // let formData = new FormData(form);
        
                    // let submitButton = form.querySelector('button[type="submit"]');
        
                    // let submitEvent = new MouseEvent('click', {
                    //     view: window,
                    //     bubbles: true,
                    //     cancelable: true
                    // });
        
                    // submitButton.dispatchEvent(submitEvent);
                }
                
            }
        
            request.send();


        
    });

    

    console.log("HELPPPP");

    
    
    }


    return true;
    

});