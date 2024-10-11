const activeModules = [];
let options = {};

///////////////////////////////////////////////////////////////////////////////

class Module {
    // Can create some sort of standardized thingy here.
    // We can define methods here and override them when extending the class.
    // But defining them prior will make sure that no errors get thrown.

    activate() {
        //
    }

    deactivate() {
        //
    }

    onReceiveMessage(content) {
        // This one is for when we receive a message so we can see if it's relevant
    }

    onOptionsChange(changes) {
        // This one is for when the options change, so we can update the page
    }
}

class ExampleModule extends Module {
    constructor() {
        console.log("Hello!");
    }
}

function getModulesForPage(page) {
    switch (page) {
        // Cases for certain pages
        case "": return [new ExampleModule()];

        // Non-Banweb websites
        default: return null;
    }
}

///////////////////////////////////////////////////////////////////////////////

/**
 * Run when the extension is started
 */
function startExtension() {
    // Check if we're in a BanWeb page or something else
    // TODO: this
    const domain = window.location.origin;
    const current_page = window.location.pathname;
    
    let page = "";

    // Now we do things if so
    // Also TODO: this
    let scripts = getModulesForPage(page);
    if (scripts != null && scripts instanceof Array) {
        chrome.storage.sync.get(null, result => {
            options = { ...options, ...result };
        });

        for (const script of scripts) {
            script.initialize();
            chrome.runtime.onMessage.addListener(script.onReceiveMessage);
            chrome.storage.onChanged.addListener(script.onOptionsChange);
        }
    }
}

startExtension();
