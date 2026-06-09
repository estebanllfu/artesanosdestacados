const sideNav = document.querySelector(".side-nav");
const hoverZone = document.querySelector(".hover-zone");
const hero = document.querySelector("#inicio");

const sections = document.querySelectorAll("section, #inicio");
const sideLinks = document.querySelectorAll(".side-nav a");
const navLinks = document.querySelectorAll(".bottom-nav a");

let isInHero = true;

/* SCROLL */
window.addEventListener("scroll", () => {
    let current = "";

    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom > 0) {
        isInHero = true;
        sideNav.style.opacity = "0";
    } else {
        isInHero = false;
        sideNav.style.opacity = "0.2";
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

/* HOVER */
hoverZone.addEventListener("mouseenter", () => {
    if (!isInHero) {
        sideNav.style.opacity = "1";
    }
});

hoverZone.addEventListener("mouseleave", () => {
    if (!isInHero) {
        sideNav.style.opacity = "0.2";
    }
});

sideNav.addEventListener("mouseenter", () => {
    sideNav.style.opacity = "1";
});

sideNav.addEventListener("mouseleave", () => {
    if (!isInHero) {
        sideNav.style.opacity = "0.2";
    }
});

/* INIT */
window.addEventListener("load", () => {
    window.dispatchEvent(new Event("scroll"));
});