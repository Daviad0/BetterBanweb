let loginButton = document.querySelector('input[name="submit"]');

if (loginButton) {
    loginButton.click();
} else {
    console.error('Login button not found');
}