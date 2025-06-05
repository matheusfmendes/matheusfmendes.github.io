// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mensagem de boas-vindas no console.
console.log("%cOlá! Obrigado por visitar meu portfólio. 🚀", "color: #58a6ff; font-size: 16px;");

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${width * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
