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

    "Fraternity/Sorority Release Authorization" : "https://www.banweb.mtu.edu/owassb/mtu_student_release.p_collection",
    "International Arrival Information": "https://www.banweb.mtu.edu/owassb/mtu_intl_itinerary.p_menu",
    "VA Enrollment Form": "https://www.banweb.mtu.edu/owassb/va_enrollment_form.display",

    "Time Sheet": "https://www.banweb.mtu.edu/owassb/bwpktais.P_SelectTimeSheetRoll",
    "Compensation Statement": "https://www.banweb.mtu.edu/owassb/bwpkebst.P_DispIDSelect",
    "Leave Balances": "https://www.banweb.mtu.edu/owassb/bwpkeinf.P_ViewLeaveBalances",
    "Update Payroll Direct Deposit": "https://www.banweb.mtu.edu/owassb/bwpkhpay.P_UpdateDirectDeposit",
    "Non-Payroll Direct Deposits History": "https://www.banweb.mtu.edu/owassb/mtu_employee_direct_deposits.p_gather_message",
    "Non-Payroll Direct Deposit Destination": "https://www.banweb.mtu.edu/owassb/mtu_direct_refunds.P_ModifyDirectDeposit",
    "Update Campus Directory": "https://www.banweb.mtu.edu/owassb/cd_addr_update.p_main",
    "Summary of Current and Future Deductions": "https://www.banweb.mtu.edu/owassb/mtu_benefits_summary.p_main",

    "Cost Share": "https://www.banweb.mtu.edu/owassb/mtu_cost_share.p_display",
    "Request Guest Access": "https://www.banweb.mtu.edu/owassb/W4P_SPONSOR.student_sponsor",
    "Change/View Current Guest(s) Access": "https://www.banweb.mtu.edu/owassb/web4guest.P_AuthPackage",
    "View Authorization History": "https://www.banweb.mtu.edu/owassb/web4guest.P_ShowAudit",
    "Update Email Addresses": "https://www.banweb.mtu.edu/owassb/mtu_email_update.p_show",

    "Time Sheet": "https://www.banweb.mtu.edu/owassb/bwpktais.P_SelectTimeSheetRoll",
    "Compensation Statement": "https://www.banweb.mtu.edu/owassb/bwpkebst.P_DispIDSelect",
    "Leave Balances": "https://www.banweb.mtu.edu/owassb/bwpkeinf.P_ViewLeaveBalances",
    "Update Payroll Direct Deposit": "https://www.banweb.mtu.edu/owassb/bwpkhpay.P_UpdateDirectDeposit",
    "Update Campus Directory": "https://www.banweb.mtu.edu/owassb/cd_addr_update.p_main",
    "Summary of Current and Future Deductions": "https://www.banweb.mtu.edu/owassb/mtu_benefits_summary.p_main",
    "Cost Share": "https://www.banweb.mtu.edu/owassb/mtu_cost_share.p_display",
    "Request Guest Access": "https://www.banweb.mtu.edu/owassb/W4P_SPONSOR.student_sponsor",
    "Change/View Current Guest(s) Access": "https://www.banweb.mtu.edu/owassb/web4guest.P_AuthPackage",
    "View Authorization History": "https://www.banweb.mtu.edu/owassb/web4guest.P_ShowAudit",
    "Update Email Addresses": "https://www.banweb.mtu.edu/owassb/mtu_email_update.p_show",


    "Michigan Tech Student Bill": "https://www.banweb.mtu.edu/owassb/mtu_webbill.p_viewaccttotal",
    "Account Summary By Term": "https://www.banweb.mtu.edu/owassb/bwskoacc.P_ViewAcct",
    "Student Account Detail": "https://www.banweb.mtu.edu/owassb/bzskoacc.P_ViewAcctTotal",
    "Insurance Payment": "https://www.banweb.mtu.edu/owassb/mtu_misc_payment.p_gather_message",
    "Enrollment Deposit": "https://www.banweb.mtu.edu/owassb/mtu_enrollment_deposit.p_gather_message",
    "Parking Tickets Payment": "https://www.banweb.mtu.edu/owassb/mtu_parking_tickets.p_gather_message",
    "Broomball Registration Payment": "https://www.banweb.mtu.edu/owassb/mtu_broomball.p_gather_message",
    "Graduate School Fees": "https://www.banweb.mtu.edu/owassb/mtu_binding_fee.p_gather_message",
    "Anti-Virus": "https://www.banweb.mtu.edu/owassb/mtu_mcafee_payments.p_display",
    "Direct Deposit Destination": "https://www.banweb.mtu.edu/owassb/mtu_direct_refunds.P_ModifyDirect",


    // Students Tab Hyperlinks
    "Students Records": "https://www.banweb.mtu.edu/owassb/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu#pageName=bmenu--P_AdminMnu___UID1&pageReferrerId=bmenu--P_StuMainMnu___UID1&pageDepth=3&options=false",
    "Unofficial Transcript Request": "https://www.banweb.mtu.edu/owassb/bwskotrn.P_ViewTermTran",
    "Official Transcript Request": "https://www.mtu.edu/registrar/students/transcripts/",
    // Add more hyperlinks as needed mattyboy isnt done yet
};

const dropdownItemLinks = {
    "Check Your Registration Status": "https://www.banweb.mtu.edu/owassb/bwskrsta.P_RegsStatusDisp",
    "Look-up Classes to Add": "https://www.banweb.mtu.edu/owassb/bwskfcls.p_sel_crse_search",
    "Student Final Exam Schedule": "https://www.banweb.mtu.edu/owassb/mtu_final_exam_schedule.p_display",
    "Select Term": "https://www.banweb.mtu.edu/owassb/bwskflib.P_SelDefTerm",
    "Student Detail Schedule": "https://www.banweb.mtu.edu/owassb/bwskfshd.P_CrseSchdDetl",
    "Express Textbook": "https://www.banweb.mtu.edu/owassb/gendev.express_text.p_link",
    "Add/Drop Classes": "https://www.banweb.mtu.edu/owassb/bwskfreg.P_AltPin",
    "Student Grid Schedule": "https://www.banweb.mtu.edu/owassb/bwskfshd.P_CrseSchd",
    "Academic Information": "https://www.banweb.mtu.edu/owassb/mtu_stu_academic_status.p_display",
    "View Status of Transcript Requests":"https://www.banweb.mtu.edu/owassb/bwskwtrr.p_disp_order_requests",
    "Final Grades":"https://www.banweb.mtu.edu/owassb/bwskogrd.P_ViewTermGrde",
    "Job Offer":"https://www.banweb.mtu.edu/owassb/mtu_career_ctr_jobo.p_collection",
    "Student Account Detail":"https://www.banweb.mtu.edu/owassb/bzskoacc.P_ViewAcctTotal",
    "Order Duplicate Diploma":"",
    "COVID-19 Pass/Fail Option":"https://www.banweb.mtu.edu/owassb/mtu_covid19_pass_fail_option.p_begin",
    "Academic Transcript Request (Official)":"",
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
    "Apply to Graduate":"https://www.banweb.mtu.edu/owassb/bwskgrad.p_disp_grad_term"
}

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
    "Fraternity/Sorority Release Authorization": "mtu_student_release--p_collection___UID2",
    "International Arrival Information": "mtu_intl_itinerary--p_menu___UID3",
    "VA Enrollment Form": "va_enrollment_form--display___UID4",
    "Time Sheet": "bwpktais--P_SelectTimeSheetRoll___UID0",
    "Compensation Statement": "bwpkebst--P_DispIDSelect___UID1",
    "Leave Balances": "bwpkeinf--P_ViewLeaveBalances___UID5",
    "Update Payroll Direct Deposit": "bwpkhpay--P_UpdateDirectDeposit___UID6",
    "Update Campus Directory": "cd_addr_update--p_main___UID9",
    "Summary of Current and Future Deductions": "mtu_benefits_summary--p_main___UID10",
    "Cost Share": "mtu_cost_share--p_display___UID0",
    "Request Guest Access": "W4P_SPONSOR--student_sponsor___UID0",
    "Change/View Current Guest(s) Access": "web4guest--P_AuthPackage___UID1",
    "View Authorization History": "web4guest--P_ShowAudit___UID2",
    "Update Email Addresses": "mtu_email_update--p_show___UID3",
    "Michigan Tech Student Bill": "mtu_webbill--p_viewaccttotal___UID0",
    "Account Summary By Term": "bwskoacc--P_ViewAcct___UID1",
    "Student Account Detail": "bzskoacc--P_ViewAcctTotal___UID2",
    "Insurance Payment": "mtu_misc_payment--p_gather_message___UID3",
    "Enrollment Deposit": "mtu_enrollment_deposit--p_gather_message___UID4",
    "Parking Tickets Payment": "mtu_parking_tickets--p_gather_message___UID5",
    "Broomball Registration Payment": "mtu_broomball--p_gather_message___UID6",
    "Graduate School Fees": "mtu_binding_fee--p_gather_message___UID7",
    "Anti-Virus": "mtu_mcafee_payments--p_display___UID8",
    "Non-Payroll Direct Deposits History": "mtu_student_direct_deposits--p_gather_message___UID9",
    "Non-Payroll Direct Deposit Destination": "mtu_direct_refunds--P_ModifyDirectDeposit___UID10"
    // Students Tab UIDs for button mapping
};

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

let oldElem = document.getElementById("/owassb/bwrkrhst--P_DispAwdAidYear___UID2")
// replace element to remove click events
let newElem = oldElem.cloneNode(true);
oldElem.parentNode.replaceChild(newElem, oldElem);

newElem.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    loadPageWithCookies(financialAidLinks);
});

let accountElement = document.createElement('div');
accountElement.innerHTML = `
Currently Logged in as <span class="name">blizzard</span>
<input type="button" id="logout" class="logout" value="Log Out">
`
accountElement.classList.add('current-account');
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

let pageElement = document.createElement('div');
pageElement.innerHTML = `
<span id="page-title">Welcome to Banweb</span>
`
pageElement.classList.add('current-page');
document.body.prepend(pageElement);


setTimeout(setup, 1000);