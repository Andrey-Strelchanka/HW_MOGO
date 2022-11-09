import Carousel from 'bootstrap/js/dist/carousel';
import Collapse from 'bootstrap/js/dist/collapse';

let hamb = document.querySelector(".header__hamb");
let headerMenu = document.querySelector(".header__navbar");
let bannerContainer = document.querySelector(".banner__container")

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    headerMenu.classList.toggle("active");
    bannerContainer.classList.toggle("active");
}

const navLink = document.querySelectorAll(".header__navbar-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    headerMenu.classList.remove("active");
    bannerContainer.classList.remove("active");
}