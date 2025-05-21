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

// Mensagem de boas-vindas no console
console.log("%cOlá! Obrigado por visitar meu portfólio. 🚀", "color: #58a6ff; font-size: 16px;");
