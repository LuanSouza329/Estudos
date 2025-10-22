document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.querySelector("#skill-container");

  if (!skillContainer) return;

  const barras = skillContainer.querySelectorAll(".progresso");

  // Inicializa todas as barras em 0%
  barras.forEach((barra) => {
    barra.style.width = "0%";
    barra.style.background = "#0077ff"; 
  });

  // Observa quando o container entra na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const barras = entry.target.querySelectorAll(".progresso");

        barras.forEach((barra) => {
          const span = barra.closest(".item")?.querySelector(".porcent");
          const perc = parseInt(span?.textContent.trim().replace("%", ""), 10) || 0;

          // Define o gradiente de cores conforme o valor da skill
          let bg = "#0077ff"; 
          if (perc > 66.6) {
            bg = "linear-gradient(to right, #0077ff 33.3%, #59b3fdff 66.6%, #f73030ff 100%)";
          } else if (perc > 33.3) {
            bg = "linear-gradient(to right,  #0077ff 33.3%, #59b3fdff 66.6%)";
          }

          // Aplica o gradiente e largura de forma suave
          requestAnimationFrame(() => {
            barra.style.background = bg;
            barra.style.width = perc + "%";
          });
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skillContainer);
});
