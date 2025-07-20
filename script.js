const closeButton = document.querySelector('#close-icon');
const menuButton = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector(".body");
menuButton.addEventListener('click', () => {
    console.log("Menu button clicked");
    navLinks.classList.remove('in-active');
    body.classList.add("purple")
});
closeButton.addEventListener('click', () => {
    console.log("Close button clicked");
    navLinks.classList.add('in-active');
    menuButton.classList.remove('in-active');
    body.classList.remove("purple");
});
