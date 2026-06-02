const sideNav = document.querySelector(".side-nav");
const hoverZone = document.querySelector(".hover-zone");
const hero = document.querySelector("#inicio");

const sections = document.querySelectorAll("section, #inicio");
const sideLinks = document.querySelectorAll(".side-nav a");
const navLinks = document.querySelectorAll(".bottom-nav a");

let isInHero = true;

/* ========================= */
/* DETECTAR SECCIÓN ACTIVA */
/* ========================= */

window.addEventListener("scroll", () => {
    let current = "";

    const heroHeight = hero.offsetHeight;

    // 👇 detectar si estamos en el hero
    if (window.scrollY < heroHeight - 100) {
        isInHero = true;
        sideNav.classList.remove("visible"); // ocultar siempre
    } else {
        isInHero = false;
    }

    // detectar sección activa
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    // NAV INFERIOR
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // NAV LATERAL
    sideLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ========================= */
/* HOVER SOLO FUERA DEL HERO */
/* ========================= */

let timeout;

hoverZone.addEventListener("mouseenter", () => {
    if (!isInHero) { // 👈 CLAVE
        clearTimeout(timeout);
        sideNav.classList.add("visible");
    }
});

sideNav.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        sideNav.classList.remove("visible");
    }, 300);
});

window.onload = () => {
    window.scrollTo(0, 0);
};