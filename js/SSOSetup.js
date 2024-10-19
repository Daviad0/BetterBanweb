document.getElementById("login").classList.add("container-outer-border");
document.getElementById("login").classList.remove("box");
document.getElementById("login").parentElement.classList = "";

document.getElementById("login").parentElement.classList.add("login-parent")

// document.body.classList.add("dark");

// add header div to the login form if one doesnt already exist

let existingHeader = document.querySelector('#login .header');

if(existingHeader){
    existingHeader.remove();
}

const header = document.createElement('div');
header.classList.add('header');
header.innerHTML = `<span>Login With Your Michigan Tech ISO</span>`;

document.getElementById("login").prepend(header);

let logoDiv = document.createElement('div');
let supportingImageSource = document.getElementById("service-ui-logo").src;
let showSupportingImage = supportingImageSource != "https://www.mtu.edu/it/images/mtu-logo.png";

logoDiv.classList.add('logo-container');
logoDiv.innerHTML = `
    <img src="${browser.runtime.getURL("resources/images/MTU_LOGO.png")}" alt="Michigan Tech Logo">
    ${showSupportingImage ? `<img src="${supportingImageSource}" alt="Service Logo">` : ''}
`;

document.getElementById("login").parentElement.prepend(logoDiv);


let questionElem = document.querySelector('.fa-question-circle');
// delete parent div of question mark
questionElem.parentElement.remove();

document.getElementById("username").placeholder = "blizzard";
document.getElementById("password").placeholder = "password";

// for each input, put inside of a flex-center div

Array.from(document.querySelectorAll('#login section')).forEach(input => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    input.parentElement.append(container);
    container.append(input);
});
Array.from(document.querySelectorAll('#login label')).forEach(input => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    input.parentElement.prepend(container);
    container.append(input);
});
Array.from(document.querySelectorAll('#login [type="submit"]')).forEach(input => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    input.parentElement.prepend(container);
    container.append(input);
});

// replace each label with a span

Array.from(document.querySelectorAll('#login label')).forEach(label => {
    // get for attribute

    let forAttr = label.getAttribute('for');
    let formatted = forAttr.substring(0, 1).toUpperCase() + forAttr.substring(1);

    label.innerHTML = `<span>${formatted}</span>`;
});

document.getElementById("username").addEventListener('change', function(){
    this.classList.remove('error');
});

document.getElementById("password").addEventListener('change', function(){
    this.classList.remove('error');
});

let errorMessage = document.querySelector('form .alert-danger');
if(errorMessage){
    // move to base of page, but remove from original location
    errorMessage.remove();
    document.body.append(errorMessage);

    // check to see what the error message is

    let message = errorMessage.textContent;
    message = message.toLowerCase();

    if(message.includes("password")){
        document.getElementById("password").classList.add('error');
    }
    if(message.includes("username")){
        document.getElementById("username").classList.add('error');
    }
}

