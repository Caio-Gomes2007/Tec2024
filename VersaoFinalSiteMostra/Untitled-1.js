let front = document.getElementById('front');
let back = document.getElementById('back');

function rotateCard() {
    if (front.style.transform === 'rotateY(180deg)') {
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';
    } else {
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(0deg)';
    }
}

// Event listener para os links
let forgotPasswordLink = document.querySelector('a[href="#temcont"]');
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    rotateCard();
});

let signUpLink = document.querySelector('a[href="#naotem"]');
signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    rotateCard();
});

function voltar() {
    window.location.href = "home.html";
}
