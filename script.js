const sideNav = document.querySelector(".side-nav");
const hoverZone = document.querySelector(".hover-zone");
const hero = document.querySelector("#inicio");

const sections = document.querySelectorAll("section, #inicio");
const sideLinks = document.querySelectorAll(".side-nav a");
const navLinks = document.querySelectorAll(".bottom-nav a");

let isInHero = true;

window.addEventListener("scroll", () => {
    let current = "";

    const heroHeight = hero.offsetHeight;

    if (window.scrollY < heroHeight - 100) {
        isInHero = true;
        sideNav.classList.remove("visible");
    } else {
        isInHero = false;
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    sideLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* HOVER SOLO FUERA DEL HERO */
let timeout;

hoverZone.addEventListener("mouseenter", () => {
    if (!isInHero) {
        clearTimeout(timeout);
        sideNav.classList.add("visible");
    }
});

sideNav.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        sideNav.classList.remove("visible");
    }, 300);
});

/* FORZAR INICIO ARRIBA */
window.onload = () => {
    window.scrollTo(0, 0);
};