document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón del menú de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    // Selecciona el menú de navegación
    const navMenu = document.querySelector('.nav-menu');

    // Agrega un escuchador de eventos al botón de hamburguesa
    menuToggle.addEventListener('click', () => {
        // La función .toggle() añade o quita la clase 'activo' del menú
        // Esta clase es la que controla si el menú se muestra o se oculta con CSS
        navMenu.classList.toggle('activo'); 
    });
});