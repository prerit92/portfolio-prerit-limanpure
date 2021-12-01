// ===========Preloader===========
let preloader = document.getElementById('preloader');

window.addEventListener('load', function () {
    preloader.style.display = "none";
})


// ===========Type.js Animation===========

let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 50,
    backDelay: 1000,
    loop: 10,
    showCursor: true,
    autoInsertCss: true,
});

// ===========Hamburger===============

let hamburger = document.querySelector('.hamburger');

let slidebar = document.querySelector('.slidebar');

hamburger.addEventListener('click', showMenu);

function showMenu() {
    hamburger.classList.toggle('change')
    slidebar.classList.toggle('slidebar-left')
}


document.onclick = function (e) {
    if (e.target.classList == 'nav-list') {
        hamburger.classList.remove('change')
        slidebar.classList.remove('slidebar-left')
    }
}


// =========Back to top start=========
let backToTopButton = document.querySelector(".back-to-top")

window.addEventListener('scroll', showBackToTopButton);

function showBackToTopButton() {
    if (window.scrollY > 100) {
        backToTopButton.classList.add('active-top')
    }
    else {
        backToTopButton.classList.remove('active-top')
    }
}


// =========Progress Bar animatoin on scroll=========
let progressBarLine1 = document.querySelector('.progress-bar-line-1');
let progressBarLine2 = document.querySelector('.progress-bar-line-2');
let progressBarLine3 = document.querySelector('.progress-bar-line-3');
let progressBarLine4 = document.querySelector('.progress-bar-line-4');

window.addEventListener('scroll', progressBar);

function progressBar() {
    if (window.scrollY > 1000) {
        console.log('object')
        progressBarLine1.style.animation = "html 5s forwards";
        progressBarLine2.style.animation = "css 5s forwards";
        progressBarLine3.style.animation = "javascript 5s forwards";
        progressBarLine4.style.animation = "bootstrap 5s forwards";
    }
}