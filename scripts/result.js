'use strict';

// let results = [{
//         "name": "Domene",
//         "votes": 70,
//     },
//     {
//         "name": "Chinobi",
//         "votes": 69,
//     },

// ]

// retrieve user from local storage
var user= JSON.parse(localStorage.getItem('user'));
if (!user) {
    window.location.href = "/templates/home.html";
}