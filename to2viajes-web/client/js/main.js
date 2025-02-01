window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const banner = document.querySelector('.banner');
    const bannerHeight = banner.offsetHeight; // Altura del banner

    // Cambia a sticky después de pasar el banner
    if (window.scrollY > bannerHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


// Añade este script para efectos adicionales
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Efecto de onda al hacer clic
    let ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255,255,255,0.4)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s linear';
    
    // Posicionar la onda
    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    this.appendChild(ripple);
    
    // Eliminar la onda después de la animación
    setTimeout(() => ripple.remove(), 600);
    
    // Redirección después de la animación (opcional)
    setTimeout(() => window.location.href = this.href, 300);
});

// Añadir animación de ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        to {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const animatables = document.querySelectorAll('.animatable');

    const handleScroll = () => {
        animatables.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar la página
});
