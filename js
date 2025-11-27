// =============================
// COMPROBACIÓN DE CARGA DEL JS
// =============================
console.log("¡JavaScript cargado correctamente!");

// =============================
// 1. MOSTRAR MENSAJE DE IDIOMA Y HORA EN LA PÁGINA
// =============================

// HTML debe tener:
// <div id="mensaje-idioma"></div>
// <div id="mensaje-hora"></div>

function mostrarIdioma() {
    const lang = navigator.language || navigator.userLanguage;
    let mensaje = "";

    if (lang.startsWith("es")) {
        mensaje = "Idioma detectado: Español 🇪🇸";
    } else if (lang.startsWith("en")) {
        mensaje = "Language detected: English 🇺🇸";
    } else {
        mensaje = "Idioma detectado automáticamente.";
    }

    const contenedorIdioma = document.getElementById("mensaje-idioma");
    if (contenedorIdioma) {
        contenedorIdioma.textContent = mensaje;
    }

    console.log("Idioma:", mensaje); // Para verificar en la consola
}
mostrarIdioma();

function mostrarHora() {
    const hora = new Date().getHours();
    let mensaje = "";

    if (hora < 12) {
        mensaje = "🌅 Buenos días";
    } else if (hora < 18) {
        mensaje = "☀️ Buenas tardes";
    } else {
        mensaje = "🌙 Buenas noches";
    }

    const contenedorHora = document.getElementById("mensaje-hora");
    if (contenedorHora) {
        contenedorHora.textContent = mensaje;
    }

    console.log("Hora:", mensaje); // Para verificar en la consola
}
mostrarHora();

// =============================
// 2. EFECTO DINÁMICO EN MENÚ
// =============================
const menuItems = document.querySelectorAll("header nav ul li a");

menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "#02aa18";
    });
    item.addEventListener("mouseout", () => {
        item.style.color = "#0b1ae7";
    });
});

// =============================
// 3. SLIDER AUTOMÁTICO DEL BANNER
// =============================
const sliderImagenes = [
    "imagenes/Paisaje.jpg",
    "imagenes/Paisaje2.jpg",
    "imagenes/Paisaje3.jpg"
];

let indice = 0;

function cambiarBanner() {
    const banner = document.querySelector(".banner");
    if (!banner) return;

    banner.style.backgroundImage = `url('${sliderImagenes[indice]}')`;
    indice = (indice + 1) % sliderImagenes.length;
}

// Mostrar la primera imagen inmediatamente
cambiarBanner();

// Cambiar imagen cada 4 segundos
setInterval(cambiarBanner, 4000);