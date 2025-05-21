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
// Alternar tema claro / escuro
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já tem preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('light', savedTheme === 'light');
  toggleBtn.textContent = savedTheme === 'light' ? '🌞' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');
  toggleBtn.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Mensagem de boas-vindas no console
console.log(
  "%cOlá! Obrigado por visitar meu portfólio. 🚀",
  "color: #58a6ff; font-size: 16px;"
);
