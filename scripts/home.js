const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', fadeOutEffect)

function fadeOutEffect(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    document.querySelector('.title').innerHTML = "Welcome" + " " + username;
    document.querySelector('.wrapper').classList.add("form-success");
    var fadeTarget = document.querySelector('form');
    var fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            window.location.href = "http://localhost:5500/templates/about.html";
        }
    }, 200);

}