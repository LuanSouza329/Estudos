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
    BTN - MENU
*/

const hambuerguer = document.querySelector(".hamburger");

hambuerguer.addEventListener("click", ()=>{
    const menu = document.querySelector(".menu");
    menu.style.display = "flex";
})