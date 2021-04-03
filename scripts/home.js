'use strict';

const usernameValidation = document.querySelector('#username--validation').innerHTML = '';
const passwordValidation = document.querySelector('#password--validation').innerHTML = '';
const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', logIn)

// User login
function logIn(event) {
    event.preventDefault();
    // Shortcuts to DOM Elements.
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (username === '' || password === '') {
        // Shortcuts to DOM Elements.
        document.querySelector('#username--validation').innerHTML = 'Username is required!';
        document.querySelector('#password--validation').innerHTML = 'Password is required!';
        // Clear error messages on the page
        setTimeout(() => {
            document.querySelector('#username--validation').innerHTML = '';
            document.querySelector('#password--validation').innerHTML = '';
        }, 5000);
        return;
    }
    document.querySelector('.account-title').innerHTML = "Welcome" + " " + username+"!\nProceeding to voting page . . .";
    document.querySelector('.account-wrapper').classList.add("form-success");
    var fadeTarget = document.querySelector('form');
    var fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            window.location.href = "/templates/poll.html";
        }
    }, 200);
    
    // define user object
    var user = {
        username: username,
        vote: 1
    }
    // serialize and store user object to localstorage
    localStorage.setItem('user', JSON.stringify(user));
}