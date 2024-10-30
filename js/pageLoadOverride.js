let loadLock = false;
let showing = "contentHolder";
// all of the elements that have an expansion to them
let avoidRemoveClickEvents = [
    'bmenu--P_RegMnu___UID0',
    'bmenu--P_AdminMnu___UID1'
];

const themedURLs = {
    // Personal Information Tab Hyperlinks
    "Update Safety First Alert": "https://www.banweb.mtu.edu/owassb/mtu_safety_first_alert.p_update",
    "View Addresses": "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView",
    "Update Addresses": "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypUpdate",
    "View Emergency Contacts": "https://www.banweb.mtu.edu/owassb/bwgkoemr.P_ViewEmrgContacts",
    "Update Emergency Contacts": "https://www.banweb.mtu.edu/owassb/bwgkoemr.P_SelectEmrgContacts",
    "Update Ethnicity": "https://www.banweb.mtu.edu/owassb/mtu_ethnicity_update.p_review_current",
    "Update Marital Status": "https://www.banweb.mtu.edu/owassb/bwgkomar.P_SelectMtypUpdate",
    "Answer a Survey": "https://www.banweb.mtu.edu/owassb/bwgksrvy.P_ShowSurveys",
    "Disability Status": "https://www.banweb.mtu.edu/owassb/bwgkdisb.P_DispDisab",
    "Update Email Address": "https://www.banweb.mtu.edu/owassb/mtu_email_update.p_show",
    "Update Preferred First Name": "https://www.banweb.mtu.edu/owassb/mtu_preferred_name.p_show",
    "Update Job Information": "https://www.banweb.mtu.edu/owassb/mtu_career_ctr_jobo.p_collection",
    "Veterans Classifications": "https://www.banweb.mtu.edu/owassb/bwgkvets.P_DispClass",
    "Weapons Registration": "https://www.banweb.mtu.edu/owassb/baninst1.mtu_weapon_reg.p_weapon_reg",
    "Michigan Tech Payments Form": "https://www.banweb.mtu.edu/owassb/mtu_payments.p_main",

    // Students Tab Hyperlinks
    "Students Records": "https://www.banweb.mtu.edu/owassb/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu#pageName=bmenu--P_AdminMnu___UID1&pageReferrerId=bmenu--P_StuMainMnu___UID1&pageDepth=3&options=false",
    "Unofficial Transcript Request": "https://www.banweb.mtu.edu/owassb/bwskotrn.P_ViewTermTran",
    "Official Transcript Request": "https://www.mtu.edu/registrar/students/transcripts/",
    // Add more hyperlinks as needed mattyboy isnt done yet
};

const buttonMapping = {
    // Peronal Information Tab UIDs for button mapping
    "Update Safety First Alert": "mtu_safety_first_alert--p_update___UID0",
    "View Addresses": "bwgkogad--P_SelectAtypView___UID1",
    "Update Addresses": "bwgkogad--P_SelectAtypUpdate___UID2",
    "View Emergency Contacts": "bwgkoemr--P_ViewEmrgContacts___UID3",
    "Update Emergency Contacts": "bwgkoemr--P_SelectEmrgContacts___UID4",
    "Update Ethnicity": "mtu_ethnicity_update--p_review_current___UID5",
    "Update Marital Status": "bwgkomar--P_SelectMtypUpdate___UID6",
    "Answer a Survey": "bwgksrvy--P_ShowSurveys___UID7",
    "Disability Status": "bwgkdisb--P_DispDisab___UID8",
    "Update Email Address": "mtu_email_update--p_show___UID9",
    "Update Preferred First Name": "mtu_preferred_name--p_show___UID10",
    "Update Job Information": "mtu_career_ctr_jobo--p_collection___UID11",
    "Veterans Classifications": "bwgkvets--P_DispClass___UID12",
    "Weapons Registration": "baninst1--mtu_weapon_reg.p_weapon_reg___UID13",
    "Michigan Tech Payments Form": "mtu_payments--p_main___UID14",
    
    // Students Tab UIDs for button mapping
};

function loadPageWithCookies(url){
    // get contentHolder content of loaded page and set it to the contentHolder of the current page

    let contentHolder = document.getElementById('contentSubHolder');
    // let loading = document.getElementById('loading');

    contentHolder.innerHTML = '';
    contentHolder.style.display = 'none'; // Hide until loaded

    // show loading

    // loading.style.display = 'block';

    // get the content of the page

    loadLock = true;
    contentHolder.style.display = 'none';

    fetch(url, {
        credentials: 'include'
    }).then(response => {
        return response.text();
    }).then(data => {
        
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');

        contentHolder.innerHTML = data;

        let onlyTakeContentHolder = () => {
            let innerContentHolder = contentHolder.querySelector('.pagebodydiv');
            if(innerContentHolder){
                contentHolder.innerHTML = innerContentHolder.innerHTML;
            }

            switchContent("sub");
            loadLock = false;
        }

        setTimeout(onlyTakeContentHolder, 1000);

        // hide loading

        // loading.style.display = 'none';
    });
}

function switchContent(view){
    // view can be "base" or "sub"


    if(view == "base"){
        document.getElementById('contentSubHolder').style.display = 'none';
        document.getElementById('contentHolder').style.display = 'block';
    }
    else{
        document.getElementById('contentHolder').style.display = 'none';
        document.getElementById('contentSubHolder').style.display = 'block';
    }
}

function stripEventsFromButtons() {
    Array.from(document.getElementsByClassName("htmlButtonLevel2-3")).forEach((orig_table_elem) => {
        // Preserve the original button content and subtext
        const buttonText = orig_table_elem.querySelector("h3"); // Button name
        const subtext = orig_table_elem.querySelector("p"); // Subtext
        // const browser = (browser ?? window.chrome);

        if(avoidRemoveClickEvents.includes(orig_table_elem.id)){
            // do not remove click events from these buttons
            // remove hover events

            // replace paragraph element with an iframe
            let iframe = document.createElement('iframe');
            iframe.src = `${browser.runtime.getURL("resources/images/arrow_drop_down.svg")}`
            iframe.classList.add("icon");
            let paragraph = orig_table_elem.querySelector('p');
            paragraph.remove();

            orig_table_elem.appendChild(iframe);


            return;
            
        }

        // Create a new button element
        const new_table_elem = document.createElement("div");
        new_table_elem.className = "htmlButtonLevel2-3"; // Copy the class for styling
        new_table_elem.id = orig_table_elem.id; // Preserve the original ID

        // Recreate the button name
        if (buttonText) {
            const buttonName = document.createElement("h3");
            buttonName.textContent = buttonText.textContent; // Copy button text
            new_table_elem.appendChild(buttonName); // Add button name
        }

        // Reinsert the subtext if it exists
        if (subtext) {
            const newSubtext = document.createElement("p");
            newSubtext.textContent = subtext.textContent; // Preserve subtext
            new_table_elem.appendChild(newSubtext);
        }

        // replace the original table element with the new one
        orig_table_elem.parentNode.replaceChild(new_table_elem, orig_table_elem);



        


      // Map button IDs to URLs
      const urlMap = {
        "bwgkogad--P_SelectAtypView___UID1": themedURLs["View Addresses"],
        "bwgkogad--P_SelectAtypUpdate___UID2": themedURLs["Update Addresses"],
        "bwgkoemr--P_ViewEmrgContacts___UID3": themedURLs["View Emergency Contacts"],
        "bwgkoemr--P_SelectEmrgContacts___UID4": themedURLs["Update Emergency Contacts"],
        "mtu_ethnicity_update--p_review_current___UID5": themedURLs["Update Ethnicity"],
        "bwgkomar--P_SelectMtypUpdate___UID6": themedURLs["Update Marital Status"],
        "bwgksrvy--P_ShowSurveys___UID7": themedURLs["Answer a Survey"],
        "bwgkdisb--P_DispDisab___UID8": themedURLs["Disability Status"],
        "mtu_email_update--p_show___UID9": themedURLs["Update Email Address"],
        "mtu_preferred_name--p_show___UID10": themedURLs["Update Preferred First Name"],
        "mtu_career_ctr_jobo--p_collection___UID11": themedURLs["Update Job Information"],
        "bwgkvets--P_DispClass___UID12": themedURLs["Veterans Classifications"],
        "baninst1--mtu_weapon_reg.p_weapon_reg___UID13": themedURLs["Weapons Registration"],
        "mtu_payments--p_main___UID14": themedURLs["Michigan Tech Payments Form"]
    };

    const url = urlMap[new_table_elem.id];
    console.log("URL: " + new_table_elem.id);
        if (url) {
            new_table_elem.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                loadPageWithCookies(url);
            });
        }
    });
}

function setup(){


    // create a div contentSubHolder right below the contentHolder and hide it

    let contentSubHolder = document.createElement('div');
    contentSubHolder.id = 'contentSubHolder';
    contentSubHolder.style.display = 'none';

    let contentHolder = document.getElementById('contentHolder');
    contentHolder.parentNode.insertBefore(contentSubHolder, contentHolder.nextSibling);

  // Add event listeners to buttons for themed pages
    stripEventsFromButtons();

}

Array.from(document.getElementsByClassName("menubaseButton")).forEach((baseButton) => {
    baseButton.addEventListener('click', function (e){
        setTimeout(stripEventsFromButtons, 1000);
        switchContent("base");
    });
});


setTimeout(setup, 1000);