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
    const header = document.querySelector(".header-content");

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

    header.appendChild(themeBtn);
});


const hamburger = document.querySelector('.hamburger');
const headerContent = document.querySelector('.header-content');
const links = [...document.querySelectorAll(".header-content a")];

let clicked = false;

hamburger.addEventListener('click', () => {
    if (!clicked) {
        const option = document.createElement("div");
        option.classList = "list";
        header.after(option);

        links.forEach(link => {
            const clone = link.cloneNode(true);
            option.appendChild(clone);
        });

        requestAnimationFrame(() => {
            option.classList.add('show');
        });

        clicked = true;
    }
});

hamburger.addEventListener("", () => {
    const option = document.querySelector(".list");

    option.style.display = "none";

    clicked = false;

});
