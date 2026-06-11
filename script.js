/* ========================= */
/* SELECTORES */
/* ========================= */

const sideNav = document.querySelector(".side-nav");
const hoverZone = document.querySelector(".hover-zone");
const hero = document.querySelector("#inicio");

const sections = document.querySelectorAll("section, #inicio");
const sideLinks = document.querySelectorAll(".side-nav a");
const navLinks = document.querySelectorAll(".bottom-nav a");

const grid = document.getElementById("gridGanadores");
const detalle = document.getElementById("detalleGanador");

const detalleNombre = document.getElementById("detalleNombre");
const detalleCategoria = document.getElementById("detalleCategoria");
const detalleBio = document.getElementById("detalleBio");
const detalleGaleria = document.getElementById("detalleGaleria");

let isInHero = true;

/* ========================= */
/* SCROLL - MENÚ LATERAL */
/* ========================= */

window.addEventListener("scroll", () => {
    let current = "";

    const heroBottom = hero.getBoundingClientRect().bottom;

    /* 👇 VISIBILIDAD SIDE NAV */
    if (heroBottom > 0) {
        isInHero = true;
        sideNav.style.opacity = "0";
        sideNav.style.transform = "translateY(-50%) translateX(20px)";
    } else {
        isInHero = false;
        sideNav.style.opacity = "0.3";
        sideNav.style.transform = "translateY(-50%) translateX(0)";
    }

    /* 👇 DETECTAR SECCIÓN ACTIVA */
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }
    });

    /* 👇 SIDE NAV */
    sideLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    /* 👇 NAV INFERIOR */
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ========================= */
/* HOVER SIDE NAV */
/* ========================= */

hoverZone.addEventListener("mouseenter", () => {
    if (!isInHero) {
        sideNav.style.opacity = "1";
    }
});

hoverZone.addEventListener("mouseleave", () => {
    if (!isInHero) {
        sideNav.style.opacity = "0.3";
    }
});

sideNav.addEventListener("mouseenter", () => {
    if (!isInHero) {
        sideNav.style.opacity = "1";
    }
});

sideNav.addEventListener("mouseleave", () => {
    if (!isInHero) {
        sideNav.style.opacity = "0.3";
    }
});

/* ========================= */
/* INIT */
/* ========================= */

window.addEventListener("load", () => {
    window.dispatchEvent(new Event("scroll"));
});

/* ========================= */
/* DATA GANADORES */
/* ========================= */

const dataGanadores = {
    1: {
        nombre: "Juana Paillalef",
        categoria: "Excelencia",
        bio: "Maestra artesana en fibras vegetales del territorio lafkenche.",
        imagen: "img/ganadores/1.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    2: {
        nombre: "Pedro Huenchul",
        categoria: "Trayectoria",
        bio: "Más de 30 años trabajando la madera nativa.",
        imagen: "img/ganadores/2.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    3: {
        nombre: "María Antileo",
        categoria: "Aprendiz",
        bio: "Representa la nueva generación de artesanas del territorio.",
        imagen: "img/ganadores/3.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    4: {
        nombre: "Luis Nahuelpan",
        categoria: "Innovación",
        bio: "Fusiona técnicas tradicionales con diseño contemporáneo.",
        imagen: "img/ganadores/2.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    5: {
        nombre: "Rosa Calfunao",
        categoria: "Inclusión",
        bio: "Trabajo comunitario con enfoque social.",
        imagen: "img/ganadores/5.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    6: {
        nombre: "Ana Quilaqueo",
        categoria: "Excelencia",
        bio: "Destacada por su precisión técnica.",
        imagen: "img/ganadores/6.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    7: {
        nombre: "José Painequeo",
        categoria: "Trayectoria",
        bio: "Referente local del oficio.",
        imagen: "img/ganadores/7.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    8: {
        nombre: "Elena Marileo",
        categoria: "Aprendiz",
        bio: "Nueva voz del arte local.",
        imagen: "img/ganadores/8.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    9: {
        nombre: "Carlos Huircán",
        categoria: "Innovación",
        bio: "Explora nuevos formatos artesanales.",
        imagen: "img/ganadores/9.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    },
    10: {
        nombre: "Patricia Ñanco",
        categoria: "Inclusión",
        bio: "Promueve el trabajo colaborativo.",
        imagen: "img/ganadores/10.jpg",
        galeria: Array(9).fill("img/papay-marialuisa.jpeg")
    }
};
/* ========================= */
/* INTERACCIÓN GANADORES */
/* ========================= */

const cards = document.querySelectorAll(".ganador-card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        const id = card.getAttribute("data-id");
        const data = dataGanadores[id];

        if (!data) return;

        /* 👇 ocultar grid */
        grid.style.display = "none";

        /* 👇 mostrar detalle */
        detalle.classList.add("active");

        /* 👇 cargar info */
        detalleNombre.innerText = data.nombre;
        detalleCategoria.innerText = data.categoria;
        detalleBio.innerText = data.bio;

        /* 👇 limpiar galería */
        detalleGaleria.innerHTML = "";

        /* 👇 cargar galería */
        data.galeria.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            detalleGaleria.appendChild(img);
        });

        /* 👇 scroll suave al detalle */
        detalle.scrollIntoView({ behavior: "smooth" });
    });
});

/* ========================= */
/* GENERAR CARDS */
/* ========================= */

window.addEventListener("DOMContentLoaded", () => {

    Object.keys(dataGanadores).forEach(id => {
        const data = dataGanadores[id];

        const card = document.createElement("div");
        card.classList.add("ganador-card");
        card.dataset.id = id;

        card.innerHTML = `
            <img src="${data.imagen}">
            <div class="ganador-overlay">
                <strong>${data.nombre}</strong>
                <span>${data.categoria}</span>
            </div>
        `;

        grid.appendChild(card);

        /* CLICK */
        card.addEventListener("click", () => abrirGanador(id));
    });

});

function abrirGanador(id) {
    const data = dataGanadores[id];

    grid.style.display = "none";
    detalle.classList.add("active");

    detalleNombre.innerText = data.nombre;
    detalleCategoria.innerText = data.categoria;
    detalleBio.innerText = data.bio;

    detalleGaleria.innerHTML = "";

    data.galeria.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        detalleGaleria.appendChild(img);
    });

    detalle.scrollIntoView({ behavior: "smooth" });
}

function cerrarGanador() {
    const grid = document.getElementById("gridGanadores");
    const detalle = document.getElementById("detalleGanador");

    detalle.classList.remove("active");
    grid.style.display = "grid";

    grid.scrollIntoView({ behavior: "smooth" });
}