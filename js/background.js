// Two storage things?
// chrome.storage.local.get/set
// chrome.storage.sync.get/set

(window.chrome ?? window.browser).runtime.onInstalled.addListener(function() {
    // Stuff that runs on installation. Can perform global settings initialization here
});


