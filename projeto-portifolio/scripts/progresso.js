document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.querySelector("#skill-container");

  if (!skillContainer) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const barras = entry.target.querySelectorAll(".progresso");

        barras.forEach((barra) => {
          let perc = barra.getAttribute("data-porcent");

          // tenta pegar o valor da porcentagem direto do span se não houver data-porcent
          if (!perc) {
            const item = barra.closest(".item");
            const span = item && item.querySelector(".porcent");
            if (span) perc = span.textContent.trim().replace("%", "");
          }

          perc = parseInt(perc, 10) || 0;

          // começa zerada
          barra.style.width = "0%";

          // dispara a animação suave
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              barra.style.width = perc + "%";
            });
          });
        });

        // anima só uma vez
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); // 30% do container visível já dispara

  observer.observe(skillContainer);
});
