// Función para el manejo del botón de la barra de navegación (Toggler)
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');

    // Mostrar/ocultar el menú cuando se haga clic en el botón de navegación
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function () {
            navbarNav.classList.toggle('active'); // Alterna la clase active para mostrar/ocultar el menú
        });
    }

    // Animación de carga para las secciones con la clase 'animatable'
    const animatableElements = document.querySelectorAll('.animatable');
    
    function handleScroll() {
        animatableElements.forEach(function (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            
            if (elementPosition < viewportHeight * 0.8) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamamos a esta función al cargar la página para que las animaciones se apliquen también cuando se cargue.

});

// Función para la animación de elementos al cargar la página (solo para banner y secciones específicas)
window.addEventListener('load', function () {
    const bannerText = document.querySelector('.banner-text');
    const ctaButton = document.querySelector('.cta-button');
    
    // Aplicar animaciones de entrada al banner
    if (bannerText && ctaButton) {
        bannerText.classList.add('fade-in');
        ctaButton.classList.add('fade-in');
    }
});

// Función para cambiar la posición del menú al hacer scroll
// Obtener el menú y el banner
const navbar = document.getElementById('mainNavbar');
const banner = document.querySelector('.banner');

// Establecer la altura del banner
const bannerHeight = banner.offsetHeight;

// Función para cambiar la posición del menú
function handleScroll() {
    if (window.scrollY >= bannerHeight) {
        navbar.style.position = 'sticky';  // Cambiar a sticky cuando el scroll supera la altura del banner
        navbar.style.backgroundColor = 'white';  // Cambiar el fondo a blanco
    } else {
        navbar.style.position = 'absolute';  // Volver a absolute cuando se esté en la parte superior
        navbar.style.backgroundColor = 'transparent';  // Volver a fondo transparente
    }
}

// Detectar el evento de desplazamiento
window.addEventListener('scroll', handleScroll);

// Función para el manejo del botón de menú en dispositivos móviles
document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
    // Cambiar el icono del menú hamburguesa a un ícono de "cerrar" cuando está activo
     this.classList.toggle("active");
});
