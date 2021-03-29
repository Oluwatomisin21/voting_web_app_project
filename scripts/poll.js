const votingButton = document.querySelector('#vote-button');
votingButton.addEventListener('click', voterschoice)
var user= JSON.parse(localStorage.getItem('user'));
function voterschoice(){
// retrieve user object from the store and convert to an object
user.vote --;
localStorage.setItem('user', JSON.stringify(user));
if (user.vote <= 0) {
    document.querySelector('#vote-button').disabled = true;
    document.querySelector('#vote-button').style.cursor = "not-allowed";
}
}


// remove user from the localstorage
// localStorage.removeItem('user');