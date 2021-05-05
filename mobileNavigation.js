const mobileNav = document.querySelector('.mobile-nav');
const dropDown = document.querySelector('.drop-down');
const closeMenu = document.querySelector('.close-menu');

dropDown.addEventListener("click", () => {
    mobileNav.classList.add('open');
    mobileNav.classList.remove('closed');
    dropDown.style.display = "none"
});

closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    mobileNav.classList.add('closed');
    dropDown.style.display = "initial"
});