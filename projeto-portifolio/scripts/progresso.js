document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.querySelector("#skill-container");

  if (!skillContainer) return;

  const barras = skillContainer.querySelectorAll(".progresso");

  // As barras começam sempre em 0%
  barras.forEach((barra) => {
    barra.style.width = "0%";
  });

  // Observa quando o container entra na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const barras = entry.target.querySelectorAll(".progresso");

        barras.forEach((barra) => {
          // Captura o valor da porcentagem do texto dentro da skill
          const span = barra.closest(".item")?.querySelector(".porcent");
          const perc = parseInt(span?.textContent.trim().replace("%", ""), 10) || 0;

          // Aplica o valor de forma suave
          requestAnimationFrame(() => {
            barra.style.width = perc + "%";
          });
        });

        // Para de observar (anima só uma vez)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // ativa quando metade do container estiver visível

  observer.observe(skillContainer);
});
