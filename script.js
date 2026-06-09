/* ========================= */
/* SELECTORES */
/* ========================= */

const sideNav = document.querySelector(".side-nav");
const hoverZone = document.querySelector(".hover-zone");
const hero = document.querySelector("#inicio");

const sections = document.querySelectorAll("section, #inicio");
const sideLinks = document.querySelectorAll(".side-nav a");
const navLinks = document.querySelectorAll(".bottom-nav a");

let isInHero = true;
let timeout;

/* ========================= */
/* SCROLL - DETECCIÓN */
/* ========================= */

window.addEventListener("scroll", () => {
    let current = "";

    /* 🔥 DETECTAR HERO (CORRECTO) */
    const heroBottom = hero.getBoundingClientRect().bottom;

if (heroBottom > 0) {
    isInHero = true;
    sideNav.style.opacity = "0"; // oculto en hero
} else {
    isInHero = false;
    sideNav.style.opacity = "0.15"; // 👈 visible tenue
}

    /* 🔍 DETECTAR SECCIÓN ACTIVA */
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    /* NAV LATERAL */
    sideLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    /* NAV INFERIOR */
    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ========================= */
/* HOVER ZONA DERECHA */
/* ========================= */

hoverZone.addEventListener("mouseenter", () => {
    if (!isInHero) {
        sideNav.classList.add("active-hover");
    }
});

hoverZone.addEventListener("mouseleave", () => {
    sideNav.classList.remove("active-hover");
});

sideNav.addEventListener("mouseenter", () => {
    sideNav.classList.add("active-hover");
});

sideNav.addEventListener("mouseleave", () => {
    sideNav.classList.remove("active-hover");
});

/* ========================= */
/* INIT */
/* ========================= */

window.addEventListener("load", () => {
    // ❌ eliminamos scrollTo porque rompía todo
    window.dispatchEvent(new Event("scroll")); // 👈 clave
});