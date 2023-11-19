document.addEventListener("DOMContentLoaded", () => {

    // Botones para abrir y cerrar el menú
    const openMenuBtn = document.getElementById("menuBtn")
    const closeMenuBtn = document.getElementById("btnCloseMenu")

    // Menú de tablet y celulares
    const menu = document.getElementById("menu")

    // Tamaño donde empieza el diseño responsive de tablet 990px.
    const responsiveSize = 990

    // Abrir el menú
    openMenuBtn.addEventListener("click", () => {
        menu.classList.add("flex")
        menu.classList.remove("hidden")
    })

    // Cerrar el menú
    closeMenuBtn.addEventListener("click", () => {
        menu.classList.add("hidden")
        menu.classList.remove("flex")
    })

    // Con este código evito que la navegación de celular aparezca cuando pasamos los 990px, si es que tiene la clase flex, que es donde comienza el diseño responsive para tablet y celular.
    // Detecto cuando la página cambia su tamaño
    window.addEventListener("resize", () => {
        // Detecto cada vez que su ancho es modificado y corroboro que sea mayor a 990px
        if (window.innerWidth > responsiveSize) {
            // Si es mayor, oculto forzadamente el menú responsive, para que éste no cause problemas en el diseño.
            menu.classList.add("hidden")
            menu.classList.remove("flex")
        }
    })

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

})