let loadLock = false;
let showing = "contentHolder";
// all of the elements that have an expansion to them
let avoidRemoveClickEvents = [
    'bmenu--P_RegMnu___UID0',
    'bmenu--P_AdminMnu___UID1',
    'pmenu--P_BenMenu___UID2',
    'pmenu--P_PayMenu___UID3',
    'pmenu--P_TaxMenu___UID4',
    'pmenu--P_SafetyMenu___UID11'
];

let financialAidLinks = "https://www.banweb.mtu.edu/owassb/bwrkrhst.P_DispAwdAidYear";

        
const themedURLs = new Map([
    // FORMAT: [button id, link, open in new tab (optional, false default)]

    // Personal Information Tab Hyperlinks
    ["Update Safety First Alert",   ["mtu_safety_first_alert--p_update___UID0",       "https://www.banweb.mtu.edu/owassb/mtu_safety_first_alert.p_update", true]],
    ["View Addresses",              ["bwgkogad--P_SelectAtypView___UID1",             "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypView"]],
    ["Update Addresses",            ["bwgkogad--P_SelectAtypUpdate___UID2",           "https://www.banweb.mtu.edu/owassb/bwgkogad.P_SelectAtypUpdate"]],
    ["View Emergency Contacts",     ["bwgkoemr--P_ViewEmrgContacts___UID3",           "https://www.banweb.mtu.edu/owassb/bwgkoemr.P_ViewEmrgContacts"]],
    ["Update Emergency Contacts",   ["bwgkoemr--P_SelectEmrgContacts___UID4",         "https://www.banweb.mtu.edu/owassb/bwgkoemr.P_SelectEmrgContacts"]],
    ["Update Ethnicity",            ["mtu_ethnicity_update--p_review_current___UID5", "https://www.banweb.mtu.edu/owassb/mtu_ethnicity_update.p_review_current"]],
    ["Update Marital Status",       ["bwgkomar--P_SelectMtypUpdate___UID6",           "https://www.banweb.mtu.edu/owassb/bwgkomar.P_SelectMtypUpdate"]],
    ["Answer a Survey",             ["bwgksrvy--P_ShowSurveys___UID7",                "https://www.banweb.mtu.edu/owassb/bwgksrvy.P_ShowSurveys"]],
    ["Disability Status",           ["bwgkdisb--P_DispDisab___UID8",                  "https://www.banweb.mtu.edu/owassb/bwgkdisb.P_DispDisab"]],
    ["Update Email Address",        ["mtu_email_update--p_show___UID9",               "https://www.banweb.mtu.edu/owassb/mtu_email_update.p_show"]],
    ["Update Preferred First Name", ["mtu_preferred_name--p_show___UID10",            "https://www.banweb.mtu.edu/owassb/mtu_preferred_name.p_show"]],
    ["Update Job Information",      ["mtu_career_ctr_jobo--p_collection___UID11",     "https://www.banweb.mtu.edu/owassb/mtu_career_ctr_jobo.p_collection"]],
    ["Veterans Classifications",    ["bwgkvets--P_DispClass___UID12",                 "https://www.banweb.mtu.edu/owassb/bwgkvets.P_DispClass"]],
    ["Weapons Registration",        ["baninst1--mtu_weapon_reg.p_weapon_reg___UID13", "https://www.banweb.mtu.edu/owassb/baninst1.mtu_weapon_reg.p_weapon_reg"]],
    ["Michigan Tech Payments Form", ["mtu_payments--p_main___UID14",                  "https://www.banweb.mtu.edu/owassb/mtu_payments.p_main"]],

    // Student Tab Hyperlinks
    ["Fraternity/Sorority Release Authorization", ["mtu_student_release--p_collection___UID2", "https://www.banweb.mtu.edu/owassb/mtu_student_release.p_collection"]],
    ["International Arrival Information",         ["mtu_intl_itinerary--p_menu___UID3",        "https://www.banweb.mtu.edu/owassb/mtu_intl_itinerary.p_menu"]],
    ["VA Enrollment Form",                        ["va_enrollment_form--display___UID4",       "https://www.banweb.mtu.edu/owassb/va_enrollment_form.display"]],

    // Employee Tab Hyperlinks
    ["Time Sheet",                               ["bwpktais--P_SelectTimeSheetRoll___UID0",               "https://www.banweb.mtu.edu/owassb/bwpktais.P_SelectTimeSheetRoll"]],
    ["Compensation Statement",                   ["bwpkebst--P_DispIDSelect___UID1",                      "https://www.banweb.mtu.edu/owassb/bwpkebst.P_DispIDSelect"]],
    ["Leave Balances",                           ["bwpkeinf--P_ViewLeaveBalances___UID5",                 "https://www.banweb.mtu.edu/owassb/bwpkeinf.P_ViewLeaveBalances"]],
    ["Update Payroll Direct Deposit",            ["bwpkhpay--P_UpdateDirectDeposit___UID6",               "https://www.banweb.mtu.edu/owassb/bwpkhpay.P_UpdateDirectDeposit"]],
    ["Update Campus Directory",                  ["cd_addr_update--p_main___UID9",                        "https://www.banweb.mtu.edu/owassb/cd_addr_update.p_main"]],
    ["Summary of Current and Future Deductions", ["mtu_benefits_summary--p_main___UID10",                 "https://www.banweb.mtu.edu/owassb/mtu_benefits_summary.p_main"]],
    ["Cost Share",                               ["mtu_cost_share--p_display___UID0",                     "https://www.banweb.mtu.edu/owassb/mtu_cost_share.p_display"]],
    
    // Guest Tab Hyperlinks
    ["Request Guest Access",                ["W4P_SPONSOR--student_sponsor___UID0", "https://www.banweb.mtu.edu/owassb/W4P_SPONSOR.student_sponsor"]],
    ["Change/View Current Guest(s) Access", ["web4guest--P_AuthPackage___UID1",     "https://www.banweb.mtu.edu/owassb/web4guest.P_AuthPackage"]],
    ["View Authorization History",          ["web4guest--P_ShowAudit___UID2",       "https://www.banweb.mtu.edu/owassb/web4guest.P_ShowAudit"]],
    ["Update Email Addresses",              ["mtu_email_update--p_show___UID3",     "https://www.banweb.mtu.edu/owassb/mtu_email_update.p_show"]],

    // Payments/Confirm Enrollment Hyperlinks
    ["Michigan Tech Student Bill",             ["mtu_webbill--p_viewaccttotal___UID0",                  "https://www.banweb.mtu.edu/owassb/mtu_webbill.p_viewaccttotal"]],
    ["Account Summary By Term",                ["bwskoacc--P_ViewAcct___UID1",                          "https://www.banweb.mtu.edu/owassb/bwskoacc.P_ViewAcct"]],
    ["Student Account Detail",                 ["bzskoacc--P_ViewAcctTotal___UID2",                     "https://www.banweb.mtu.edu/owassb/bzskoacc.P_ViewAcctTotal"]],
    ["Insurance Payment",                      ["mtu_misc_payment--p_gather_message___UID3",            "https://www.banweb.mtu.edu/owassb/mtu_misc_payment.p_gather_message"]],
    ["Enrollment Deposit",                     ["mtu_enrollment_deposit--p_gather_message___UID4",      "https://www.banweb.mtu.edu/owassb/mtu_enrollment_deposit.p_gather_message"]],
    ["Parking Tickets Payment",                ["mtu_parking_tickets--p_gather_message___UID5",         "https://www.banweb.mtu.edu/owassb/mtu_parking_tickets.p_gather_message"]],
    ["Broomball Registration Payment",         ["mtu_broomball--p_gather_message___UID6",               "https://www.banweb.mtu.edu/owassb/mtu_broomball.p_gather_message"]],
    ["Graduate School Fees",                   ["mtu_binding_fee--p_gather_message___UID7",             "https://www.banweb.mtu.edu/owassb/mtu_binding_fee.p_gather_message"]],
    ["Anti-Virus",                             ["mtu_mcafee_payments--p_display___UID8",                "https://www.banweb.mtu.edu/owassb/mtu_mcafee_payments.p_display"]],
    ["Non-Payroll Direct Deposit History",     ["mtu_student_direct_deposits--p_gather_message___UID9", "https://www.banweb.mtu.edu/owassb/mtu_employee_direct_deposits.p_gather_message"]],
    ["Non-Payroll Direct Deposit Destination", ["mtu_direct_refunds--P_ModifyDirectDeposit___UID10",    "https://www.banweb.mtu.edu/owassb/mtu_direct_refunds.P_ModifyDirectDeposit"]],
]);

const dropdownItemLinks = {
    // Registration Dropdown
    "Check Your Registration Status": "https://www.banweb.mtu.edu/owassb/bwskrsta.P_RegsStatusDisp",
    "Look-up Classes to Add": "https://www.banweb.mtu.edu/owassb/bwskfcls.p_sel_crse_search",
    "Student Final Exam Schedule": "https://www.banweb.mtu.edu/owassb/mtu_final_exam_schedule.p_display",
    "Select Term": "https://www.banweb.mtu.edu/owassb/bwskflib.P_SelDefTerm",
    "Student Detail Schedule": "https://www.banweb.mtu.edu/owassb/bwskfshd.P_CrseSchdDetl",
    "Express Textbook": "https://www.banweb.mtu.edu/owassb/gendev.express_text.p_link",
    "Add/Drop Classes": "https://www.banweb.mtu.edu/owassb/bwskfreg.P_AltPin",
    "Student Grid Schedule": "https://www.banweb.mtu.edu/owassb/bwskfshd.P_CrseSchd",

    // Student Records Dropdown
    "Academic Information": "https://www.banweb.mtu.edu/owassb/mtu_stu_academic_status.p_display",
    "View Status of Transcript Requests":"https://www.banweb.mtu.edu/owassb/bwskwtrr.p_disp_order_requests",
    "Final Grades":"https://www.banweb.mtu.edu/owassb/bwskogrd.P_ViewTermGrde",
    "Job Offer":"https://www.banweb.mtu.edu/owassb/mtu_career_ctr_jobo.p_collection",
    "Student Account Detail":"https://www.banweb.mtu.edu/owassb/bzskoacc.P_ViewAcctTotal",
    "Order Duplicate Diploma":"https://www.michaelsutter.com/mtu",
    "COVID-19 Pass/Fail Option":"https://www.banweb.mtu.edu/owassb/mtu_covid19_pass_fail_option.p_begin",
    "Academic Transcript Request (Official)":"https://www.mtu.edu/registrar/students/transcripts/",
    "Transfer History":"https://www.banweb.mtu.edu/owassb/mtu_stu_transfer_history.p_display",
    "Tax Notification (1098-T Electronic Consent)":"https://www.banweb.mtu.edu/owassb/mtu_1098t_consent.p_review_current",
    "International Student Employer Information":"https://www.banweb.mtu.edu/owassb/mtu_intl_opt.p_display",
    "Enrollment Verification":"https://www.banweb.mtu.edu/owassb/mtu_clearinghouse.p_home",
    "Academic Standing & Financial Aid Status": "https://www.banweb.mtu.edu/owassb/mtu_academic_finaid_status.p_display",
    "Academic Transcript (Unofficial)": "https://www.banweb.mtu.edu/owassb/bwskotrn.P_ViewTermTran",
    "Midterm Grades": "https://www.banweb.mtu.edu/owassb/bwskmgrd.p_write_term_selection",
    "Tax Notification (1098-T)":"https://www.banweb.mtu.edu/owassb/bwtktxns.p_disp_tax_notification",
    "Account Summary By Term":"https://www.banweb.mtu.edu/owassb/bwskoacc.P_ViewAcct",
    "Degree Audit":"https://www.banweb.mtu.edu/owassb/twbkwbis.P_GenMenu?name=bmenu.pz_sact",
    "Apply to Graduate":"https://www.banweb.mtu.edu/owassb/bwskgrad.p_disp_grad_term",

    // Benefits & Deductions Dropdown
    "Retirement Plans": "https://www.banweb.mtu.edu/owassb/bwpkdcmn.P_DispDednCurRet",
    "Miscellaneous": "https://www.banweb.mtu.edu/owassb/bwpkdcmn.P_DispDednCurMisc",
    "Compensation Statement": "https://www.banweb.mtu.edu/owassb/bwpkebst.P_DispIDSelect",
    "Health Benefits": "https://www.banweb.mtu.edu/owassb/bwpkdcmn.P_DispDednCurHlt",
    "Open Enrollment": "https://www.banweb.mtu.edu/EmployeeSelfService/ssb/benefits#/pOpenenrollment",
    "Husky Health Information": "https://www.banweb.mtu.edu/owassb/mtu_huskyhealth_info.p_display",
    "Flexible Spending Accounts": "https://www.banweb.mtu.edu/owassb/bwpkdcmn.P_DispDednCurFlxs",
    "Beneficiaries and Dependents": "https://www.banweb.mtu.edu/owassb/bwpkdbcv.P_NamesAndBenefits",

    // Pay Information Dropdown
    "Direct Deposit Allocation": "https://www.banweb.mtu.edu/owassb/bwpkhpay.P_ViewDirectDeposit",
    "Deductions History": "https://www.banweb.mtu.edu/owassb/bwpkhded.P_ChooseDedn",
    "Earnings History": "https://www.banweb.mtu.edu/owassb/bwpkhpay.P_ChooseEarnings",
    "Pay Stubs": "https://www.banweb.mtu.edu/owassb/bwpkhstb.P_ChoosePayStubYear",

    // Tax Forms Dropdown
    "W-4 Employee's Withholding Certificate": "https://www.banweb.mtu.edu/owassb/bwpkxtxs.P_ViewW4",
    "W-2c Corrected Wage and Tax Statement": "https://www.banweb.mtu.edu/owassb/bwpkxtxs.P_ChooseW2cKey",
    "Electronic Consent (W-2 and 1095-C)": "https://www.banweb.mtu.edu/owassb/bwpkxtxs.P_W2Consent",
    "1095-C Employer-Provided Health Insurance Offer and Coverage Statement": "https://www.banweb.mtu.edu/owassb/bwpkxtxs.P_Choose1095cKey",
    "W2 Year End Earnings Statement": "https://www.banweb.mtu.edu/owassb/bwpkxtxs.P_ChooseW2Key",

    // Safety Incidents and Injuries Dropdown
    "Submit Incident/Injury": "https://www.banweb.mtu.edu/owassb/safety_incidents.p_form",
    "Review Submitted Forms": "https://www.banweb.mtu.edu/owassb/safety_incidents.p_view_submissions",
    
};

// This runs after the page content has loaded.
document.addEventListener('DOMContentLoaded', function () {
    // Find all links in the dropdown and set the data-url attribute dynamically.
    Object.keys(dropdownItemLinks).forEach(name => {
        // Find the link by its text content
        const link = [...document.querySelectorAll('a')].find(link => link.textContent.trim() === name);
        if (link) {
            // Add the corresponding data-url from the mapping
            link.setAttribute('data-url', dropdownItemLinks[name]);
        }
    });

    // Listen for clicks on any links with a data-url attribute
    document.querySelectorAll('a[data-url]').forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default navigation behavior
            event.preventDefault();

            // Get the URL from the data-url attribute
            const url = this.getAttribute('data-url');

            // Fetch and display the content from the URL
            fetchAndDisplayContent(url);
        });
    });
});

// Function to fetch content from the URL and display it in the #contentArea
function fetchAndDisplayContent(url) {
    let contentArea = document.getElementById('contentArea');

    // If contentArea doesn't exist, create it
    if (!contentArea) {
        contentArea = document.createElement('div');
        contentArea.id = 'contentArea';
        contentArea.style.marginTop = '20px';
        document.body.appendChild(contentArea);
    }

    // Fetch the content from the provided URL
    fetch(url)
        .then(response => response.text())  // Get the content as text (HTML)
        .then(data => {
            contentArea.innerHTML = data;  // Inject the fetched content into the contentArea
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            contentArea.innerHTML = "<p>Sorry, there was an error loading the content.</p>";
        });
}

function setClickEventsOnDropdownItem(){
    console.log("Setting click events on dropdown items");
    let dropdownItems = Array.from(document.querySelectorAll("#level3Container a"));
    dropdownItems.forEach((item) => {
        console.log("Replacing"); 
        // replace item to remove click events

        let newElem = item.cloneNode(true);
        item.parentNode.replaceChild(newElem, item);

        // on click, get the text from the h3
        newElem.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            let text = newElem.querySelector('h3').textContent;
            let url = dropdownItemLinks[text];
            loadPageWithCookies(url);
        });
    });

}

function loadPageWithCookies(url){
    // get contentHolder content of loaded page and set it to the contentHolder of the current page

    let contentHolder = document.getElementById('contentSubHolder');
    // let loading = document.getElementById('loading');

    contentHolder.innerHTML = '';
    contentHolder.style.display = 'none'; // Hide until loaded

    switchContent("loading");

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

        try{
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            contentHolder.innerHTML = data;

            let onlyTakeContentHolder = () => {
                let innerContentHolder = contentHolder.querySelector('.pagebodydiv');
                if(innerContentHolder){
                    contentHolder.innerHTML = innerContentHolder.innerHTML;
                }

                switchContent("sub");
                checkForFormGetOrPost();
                loadLock = false;
            }

            setTimeout(onlyTakeContentHolder, 1000);
        }catch(e){
            switchContent("base");
        }
        
        
        

        // hide loading

        // loading.style.display = 'none';
    });
}

function switchContent(view){
    // view can be "base", "sub", "loading"


    if(view == "base"){
        document.getElementById('contentSubHolder').style.display = 'none';
        document.getElementById('contentHolder').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }
    else if(view == "sub"){
        document.getElementById('contentHolder').style.display = 'none';
        document.getElementById('contentSubHolder').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }else{
        document.getElementById('contentHolder').style.display = 'none';
        document.getElementById('contentSubHolder').style.display = 'none';
        document.getElementById('loading').style.display = 'block';
    }
}

function checkForFormGetOrPost(){
    let contentWindow = document.getElementById('contentSubHolder');

    let forms = contentWindow.querySelectorAll('form');

    // for each form, we will strip the URL and the methods
    // on the post of the form, we will get the content of the page and set it to the contentHolder of the current page
    // we will also post the data to the URL

    forms.forEach((form) => {
        console.log("Form found");
        let method = form.getAttribute('method').toLowerCase();
        let action = form.getAttribute('action');


        if(method == 'post'){

            let submitButton = form.querySelector('input[type="submit"]');

            if(!submitButton){
                // ignore this form
                return;
            }
            submitButton.addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();


                // get the form data
                let formData = new FormData(form);

                // get the content of the page
                fetch(action, {
                    method: 'POST',
                    credentials: 'include',
                    body: formData
                }).then(response => {
                    return response.text();
                }).then(data => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(data, 'text/html');

                    let contentHolder = document.getElementById('contentSubHolder');
                    let pagebodydiv = doc.querySelector('.pagebodydiv');

                    if(!pagebodydiv)
                    {
                        // post and open in new tab
                        let newTab = window.open();
                        newTab.document.write(data);
                        return;
                    }

                    contentHolder.innerHTML = pagebodydiv.innerHTML;

                    let isMainMenu = contentHolder.querySelectorAll(".menuplaintable").length > 0;
                    

                    if(isMainMenu){
                        switchContent("base");
                    }else{
                        switchContent("sub");
                        checkForFormGetOrPost();
                    }
                });
            });
            
        }else if(method == "get"){
            let submitButton = form.querySelector('input[type="submit"]');

            submitButton.addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();

                let formData = new FormData(form);
                let url = new URL(action);

                for(let pair of formData.entries()){
                    url.searchParams.append(pair[0], pair[1]);
                }

                loadPageWithCookies(url);
            });
        }

    });


    let links = contentWindow.querySelectorAll('a');

    links.forEach((link) => {

        let newLink = link.cloneNode(true);

        link.parentNode.replaceChild(newLink, link);

        newLink.addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            

            let url = newLink.getAttribute('href');
            loadPageWithCookies(url);
        });
    });
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
            iframe.style.width = "50px";
            iframe.style.height = "50px";
            iframe.style.border = "none";
            iframe.style.textAlign = "center";
            iframe.style.margin = "auto";
            iframe.style.display = "block";

            let paragraph = orig_table_elem.querySelector('p');
            paragraph.remove();

            orig_table_elem.appendChild(iframe);

            orig_table_elem.addEventListener('click', function(e){

                console.log("Clicked");

                setClickEventsOnDropdownItem();

                let internalIframe = orig_table_elem.querySelector('iframe');
                if(internalIframe.style.transform == 'rotate(180deg)'){
                    internalIframe.style.transform = 'rotate(0deg)';
                }
                else{
                    internalIframe.style.transform = 'rotate(180deg)';
                }
            });




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

        const url = [...themedURLs.values()].find(x => x instanceof Array && x.length > 1 && x[0] == new_table_elem.id);
        console.log("URL: " + new_table_elem.id);
        if (url != undefined) {
            new_table_elem.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (url.length >= 3 && url[2]) {
                    const a = document.createElement("a");
                    a.href = url[1];
                    a.target = "_blank";
                    a.click();
                    a = null;
                } else {
                    loadPageWithCookies(url[1]);
                }
            });
        }
    });

    const orphans = [...themedURLs.entries()].filter(x => x[1].length <= 1);
    for (const o of orphans) {
        console.warn(
            "WARNING: orphan in themedURLs (pageLoadOverride.js)\nKey: '" + o[0] + "', Values: ["
            + o[1].map(x => (typeof x === "string") ? ('"' + x + '"') : x.toString()).join(", ") + "]");
    }
}

function setup(){


    // create a div contentSubHolder right below the contentHolder and hide it

    let contentSubHolder = document.createElement('div');
    contentSubHolder.id = 'contentSubHolder';
    contentSubHolder.style.display = 'none';

    let contentLoading = document.createElement('div');
    contentLoading.id = 'loading';
    contentLoading.innerHTML = 'Loading';
    contentLoading.style.display = 'none';

    let contentHolder = document.getElementById('contentHolder');
    contentHolder.parentNode.insertBefore(contentSubHolder, contentHolder.nextSibling);
    contentHolder.parentNode.insertBefore(contentLoading, contentHolder.nextSibling);

    switchContent("base");

  // Add event listeners to buttons for themed pages
    setTimeout(stripEventsFromButtons, 1000);


}

Array.from(document.getElementsByClassName("menubaseButton")).forEach((baseButton) => {
    baseButton.addEventListener('click', function (e){

        updateCurrentPage(baseButton.querySelector('span').innerText, "");

        setTimeout(stripEventsFromButtons, 1000);
        switchContent("base");
    });
});

let oldElem = document.getElementById("/owassb/bwrkrhst--P_DispAwdAidYear___UID2")
// replace element to remove click events
let newElem = oldElem.cloneNode(true);
oldElem.parentNode.replaceChild(newElem, oldElem);

newElem.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    loadPageWithCookies(financialAidLinks);
});

// Create the account element
let accountElement = document.createElement('div');
accountElement.innerHTML = `
    Currently Logged in as <span class="name">username</span>
    <input type="button" id="logout" class="logout" value="Log out">
`;

// Add a class to style the element
accountElement.classList.add('current-account');

// Prepend the element to the body of the page
document.body.prepend(accountElement);

document.getElementById('logout').addEventListener('click', function(e){

    // remove all cookies

    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    e.preventDefault();
    e.stopPropagation();
    window.location = 'https://sso.mtu.edu/cas/logout';
});

function updateCurrentPage(submenu, content){
    if(submenu){
        document.getElementById("submenu-title").innerHTML = submenu;
    }
    if(content){
        document.getElementById("content-title").innerHTML = content;
    }
}

let pageElement = document.createElement('div');
pageElement.innerHTML = `
<button type = "button" class = "clear-button"> Clear </button>
<span style="font-weight:600" id="submenu-title">Welcome to Banweb</span>
<span id="content-title"></span>
`
pageElement.classList.add('current-page');
document.body.prepend(pageElement);


setTimeout(setup, 1000);