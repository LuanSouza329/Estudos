// =====================
//  THEME TOGGLE
// =====================

// Seleciona o body (onde vamos colocar o tema)
const body = document.body;
const header = document.querySelector("header");

// Checa se já existe um tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");

// Aplica se existir
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
}

// Cria o botão no header depois que o DOM carrega
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");

    // Botão simples (vamos estilizar depois)
    const themeBtn = document.createElement("button");
    themeBtn.classList.add("theme-toggle");

    // Estrutura interna do switch
    themeBtn.innerHTML = `
    <span class="icon-sun">🌞</span>
    <span class="toggle-ball"></span>
    <span class="icon-moon">🌙</span>
  `;

    themeBtn.addEventListener("click", () => {
        const current = body.getAttribute("data-theme");

        // alternando claro ↔ escuro
        const newTheme = current === "dark" ? "light" : "dark";

        body.setAttribute("data-theme", newTheme);

        // salvar no localStorage
        localStorage.setItem("theme", newTheme);
    });

    menu.appendChild(themeBtn);
});

/* 
    Controle do menu hamburhuer
*/

const hamburguer = document.querySelector(".hamburger");
const links = [...document.querySelectorAll(".link")];
const menu = document.querySelector(".menu");

/* switch entre menu aberto e fechado */
let activeMenu = false;

hamburguer.addEventListener("click", () => {
    if (!activeMenu) {
        menu.style.display = "flex";
        activeMenu = true;

    } else if (activeMenu) {
        menu.style.display = "none";
        activeMenu = false;
    }
});


/* Controle do menu quando um link é clicado */
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        menu.style.display = "none";
    })
});

/* Controle do menu quando a janela é rendimencionada */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});