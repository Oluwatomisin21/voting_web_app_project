'use strict';

// retrieve user object from the store and convert to an object
var users = JSON.parse(localStorage.getItem('user'));
// display below objects (menu items) when a user is signed in
if (users) {
    document.querySelector('#poll').style.display = 'inline-block';
    document.querySelector('#result').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'inline-block';
}
// get logout object and listen to an event
const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', logOut);

// User logout
function logOut(event) {
    // prevent default navigation
    event.preventDefault();
    // remove user from the localstorage
    localStorage.removeItem('user');
    // remove candidates from the localstorage
    localStorage.removeItem('candidates');
    // Return home
    window.location.href = "/templates/home.html";
}