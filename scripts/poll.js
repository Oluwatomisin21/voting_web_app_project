'use strict';

const votingButtons = document.querySelectorAll('.poll-btn');
votingButtons.forEach(button => {
    button.addEventListener('click', voterschoice);
})

// retrieve user object from the store and convert to an object
var user = JSON.parse(localStorage.getItem('user'));

// retrieve candidates object from the store and convert to an object
var candidates = JSON.parse(localStorage.getItem('candidates'));
//console.log(candidates.length);
function voterschoice(event) {
    console.log(event.target.name);
    user.vote--;

    localStorage.setItem('user', JSON.stringify(user));
    alert("Thank you for your vote")
    var votingButtons = document.querySelectorAll('.poll-btn');
    votingButtons.forEach(button => {
        button.disabled = true;
        button.style.cursor = "not-allowed";

    })

    var i;
    for (i = 0; i < candidates.length; i++) {

        if (candidates[i].name == event.target.name) {
            candidates[i].votes += 1;
        }
    }
    localStorage.setItem('candidates', JSON.stringify(candidates));

    if (user.vote <= 0) {
        alert("Max vote reached")
    }
}

if (!user) {
    window.location.href = "/templates/home.html";
}

//remove user from the localstorage
// localStorage.removeItem('user');