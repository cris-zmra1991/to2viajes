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

// JavaScript
const track = document.querySelector('.carousel-track');
const arrows = document.querySelectorAll('.carousel-arrow');
const indicatorsContainer = document.querySelector('.carousel-indicators');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Crear indicadores
items.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if(index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

// Función para mover el carrusel
function goToSlide(index) {
    currentIndex = index;
    const itemWidth = items[0].offsetWidth;
    track.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
    });
    
    // Actualizar indicadores
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

// Eventos para flechas
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const maxIndex = items.length - 1;
        
        if(arrow.classList.contains('next')) {
            currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        } else {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        }
        
        goToSlide(currentIndex);
    });
});

// Touch events para móvil
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const minSwipeDistance = 50;
    const swipeDistance = touchStartX - touchEndX;
    
    if(swipeDistance > minSwipeDistance) {
        // Swipe izquierda
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : currentIndex;
    } else if(swipeDistance < -minSwipeDistance) {
        // Swipe derecha
        currentIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    }
    
    goToSlide(currentIndex);
}