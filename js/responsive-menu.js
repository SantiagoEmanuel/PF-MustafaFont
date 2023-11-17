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
    window.addEventListener("resize", () => {
        if (window.innerWidth > responsiveSize) {
            menu.classList.add("hidden")
            menu.classList.remove("flex")
        }
    })

})