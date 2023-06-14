
const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay: 100, origin: 'left'})
sr.reveal('.home-img', {delay: 100, origin: 'right'})
sr.reveal('.item', {delay: 100, origin: 'bottom'})
sr.reveal('.about_img', {delay: 100, origin: 'left'})
sr.reveal('.about_text', {delay: 100, origin: 'right'})
sr.reveal('.heading', {delay: 100, origin: 'top'})
sr.reveal('.service-content', {delay: 100, origin: 'bottom'})
