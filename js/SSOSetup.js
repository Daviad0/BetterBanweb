document.getElementById("login").classList.add("container-outer-border");
document.getElementById("login").classList.remove("box");
document.getElementById("login").parentElement.classList = "";

// document.body.classList.add("dark");

// add header div to the login form if one doesnt already exist

let existingHeader = document.querySelector('#login .header');

if(existingHeader){
    existingHeader.remove();
}

const header = document.createElement('div');
header.classList.add('header');
header.innerHTML = `<span>Login to Michigan Tech</span>`;

document.getElementById("login").prepend(header);

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
    let text = label.innerText;
    // remove all spaces
    text = text.replace(/\s/g, '');
    label.innerHTML = `<span>${text}</span>`;
});