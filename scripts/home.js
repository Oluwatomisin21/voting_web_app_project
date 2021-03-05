const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', fadeOutEffect)

function fadeOutEffect(event) {
    event.preventDefault();
    document.querySelector('.wrapper').classList.add("form-success");
    var fadeTarget = document.querySelector('form');
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            window.location.href = "http://localhost:52330/templates/about.html";
        }
    }, 200);
    
}