let menu = document.querySelector(".head");

menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active-link');
    
    if (clickTarget.classList.contains('link')){
        clickTarget.classList.add('active-link');
        activeBtn.classList.remove('active-link');
   }
   if (!body.classList.contains("off-scroll") &&
    !mobileMenu.classList.contains('hide')) {
        body.classList.add("off-scroll");
    } else {
        body.classList.remove("off-scroll"); 
    }
});

let classLink = '.main-link';
window.onscroll = function() {
let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*3) {
        classLink = '.reviews-link';
    }
    else if (window.scrollY >= h*2) {
        classLink = '.works-link';
    }
    else if (window.scrollY >= h) {
        classLink = '.skills-link';
    }
    else if (window.scrollY >= h/2) {
        classLink = '.about-link';
    }
    else {
        classLink = '.main-link';
    }

    let activeBtn = document.querySelector('.active-link');
    let newActiveBtn = document.querySelector(classLink);
    
    if (!newActiveBtn.classList.contains('active-link')) {
        newActiveBtn.classList.add('active-link');
        activeBtn.classList.remove('active-link')
    }
};

document.querySelector('.mobile-button').addEventListener('click',
function(event) {
    document.querySelector('.mobile-menu').classList.toggle('hide');
});

let body = document.querySelector("body");
let mobileMenu = document.querySelector(".mobile-menu");

function hide() {
    document.querySelector('.mobile-menu').classList.add('hide');
}