const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', fadeOutEffect)

function fadeOutEffect(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
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

    // retrieve user object from the store and convert to an object
    var users = JSON.parse(localStorage.getItem('user'));

    // remove user from the localstorage
    // localStorage.removeItem('user');
}