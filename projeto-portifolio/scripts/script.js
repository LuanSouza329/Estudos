const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema (usa localStorage; se não existir, usa preferência do sistema)
const temasalvo = localStorage.getItem('tema');
if (temasalvo) {
  temaEscuro(temasalvo === 'escuro');
} else if (window.matchMedia) {
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  temaEscuro(prefereEscuro);
}

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    body.setAttribute('data-theme', 'dark');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    body.removeAttribute('data-theme');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});