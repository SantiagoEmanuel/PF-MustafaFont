// Obtengo el botón para volver al inicio de la página.
const up = document.getElementById("up");

// Detecto cada vez que se realiza scrolling en la página
window.addEventListener("scroll", () => {
    // Detecto cuando el scrolling es mayor a 550
    if (window.scrollY > 550) {
        // Si es mayor, muestro el botón para volver al inicio de la página
        up.classList.add("flex")
        up.classList.remove("hidden")
    } else {
        // Caso contrario éste es ocultado.
        up.classList.add("hidden")
        up.classList.remove("flex")
    }
})