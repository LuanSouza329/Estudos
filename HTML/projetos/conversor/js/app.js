const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const resultado = document.getElementById("resultado");
const btn_converter = document.getElementById("btn_converter");
const valor = document.getElementById("valor");
const valorInicial = document.getElementById("inicial");

// Objeto para mapear nomes e códigos
let mapaMoedas = {};

/* --- Criação das opções dinâmicas --- */
async function paises() {
  try {
    const resp = await fetch("https://api.frankfurter.app/currencies");
    if (!resp.ok) throw new Error("Erro ao obter moedas");

    const data = await resp.json();
    mapaMoedas = data;
    const moedas = Object.entries(data);

    moedas.forEach(([codigo, nome]) => {
      const option1 = document.createElement("option");
      option1.value = nome;
      option1.dataset.codigo = codigo;
      option1.textContent = nome;

      const option2 = document.createElement("option");
      option2.value = nome;
      option2.dataset.codigo = codigo;
      option2.textContent = nome;

      origem.appendChild(option1);
      destino.appendChild(option2);
    });

    origem.value = moedas[29][1];
    destino.value = moedas[2][1];

    origem.addEventListener("change", () => {
      atualizarOpcoesDestino();
    });

    destino.addEventListener("change", () => {
      atualizarOpcoesOrigem();
    });

    function atualizarOpcoesDestino() {
      const origemSelecionada = origem.value;
      Array.from(destino.options).forEach(option => {
        option.disabled = option.value === origemSelecionada;
      });

      if (destino.value === origemSelecionada) {
        const primeiraDisponivel = Array.from(destino.options).find(opt => !opt.disabled);
        destino.value = primeiraDisponivel?.value;
      }
    }

    function atualizarOpcoesOrigem() {
      const destinoSelecionado = destino.value;
      Array.from(origem.options).forEach(option => {
        option.disabled = option.value === destinoSelecionado;
      });

      if (origem.value === destinoSelecionado) {
        const primeiraDisponivel = Array.from(origem.options).find(opt => !opt.disabled);
        origem.value = primeiraDisponivel?.value;
      }
    }

    atualizarOpcoesDestino();
    atualizarOpcoesOrigem();

  } catch (error) {
    console.error("Erro ao obter Países:", error);
  }
}


/* --- Conversão via API --- */
async function converter(nomeOrigem, nomeDestino, valor) {
  try {
    const codigoOrigem = Object.keys(mapaMoedas).find(k => mapaMoedas[k] === nomeOrigem);
    const codigoDestino = Object.keys(mapaMoedas).find(k => mapaMoedas[k] === nomeDestino);

    const resp = await fetch(`https://api.frankfurter.app/latest?base=${codigoOrigem}&symbols=${codigoDestino}`);
    if (!resp.ok) throw new Error("Erro na requisição");

    const data = await resp.json();
    const taxa = data.rates[codigoDestino];
    const valorConvertido = (valor * taxa).toFixed(2);
    return valorConvertido;

  } catch (error) {
    console.error("Erro ao obter a conversão:", error);
    resultado.innerText = "Erro ao converter. Tente novamente.";
    return null;
  }
}

/* --- Validação do campo de entrada --- */
function validacao(element) {
  const valid = element.validity;
  element.setCustomValidity("");

  if (valid.valueMissing) {
    element.setCustomValidity("Campo Obrigatório");
  } else if (element.type === "number" && Number(element.value) < 1) {
    element.setCustomValidity("O valor mínimo é 1");
  }
  element.reportValidity();
}

/* --- Atualiza os resultados --- */
async function resultadoFinal(res) {
  const nomeMoedaOrigem = origem.value;
  const nomeMoedaDestino = destino.value;

  if (valor.value === "0.00" || valor.value === "") {
    valorInicial.innerText = `1 ${nomeMoedaOrigem} equals`;
  } else {
    valorInicial.innerText = `${valor.value} ${nomeMoedaOrigem} equals`;
  }
  resultado.innerText = `${res} ${nomeMoedaDestino}`;
}

async function gerarGraficoEstiloFinanceiro(nomeOrigem, nomeDestino) {
  const codigoOrigem = Object.keys(mapaMoedas).find(k => mapaMoedas[k] === nomeOrigem);
  const codigoDestino = Object.keys(mapaMoedas).find(k => mapaMoedas[k] === nomeDestino);

  const hoje = new Date();
  const trintaDiasAtras = new Date();
  trintaDiasAtras.setDate(hoje.getDate() - 30);

  const inicio = trintaDiasAtras.toISOString().split("T")[0];
  const fim = hoje.toISOString().split("T")[0];

  const resp = await fetch(`https://api.frankfurter.app/${inicio}..${fim}?from=${codigoOrigem}&to=${codigoDestino}`);
  const data = await resp.json();

  const labels = Object.keys(data.rates);
  const valores = Object.values(data.rates).map(obj => Object.values(obj)[0]);

  const ctx = document.getElementById("grafico").getContext("2d");
  const gradiente = ctx.createLinearGradient(0, 0, 0, 200);
  gradiente.addColorStop(0, "rgba(0, 200, 83, 0.4)");
  gradiente.addColorStop(1, "rgba(0, 200, 83, 0)");

  if (window.grafico instanceof Chart) {
    window.grafico.destroy();
  }
  
  window.grafico = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: `${nomeOrigem} → ${nomeDestino}`,
        data: valores,
        borderColor: "#00C853",
        backgroundColor: gradiente,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0, // remove pontos para visual mais limpo
        pointHoverRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: "index",
          intersect: false,
          backgroundColor: "#222",
          titleColor: "#fff",
          bodyColor: "#fff",
          callbacks: {
            label: (ctx) => `${ctx.parsed.y.toFixed(2)}`
          }
        }
      },
      interaction: { mode: "index", intersect: false },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#aaa" }
        },
        y: {
          grid: { color: "rgba(255,255,255,0.05)" },
          ticks: { color: "#aaa" }
        }
      }
    }
  });
}


/* --- Atualiza automaticamente a conversão --- */
function atualizarResultado(valor = 1) {
  converter(origem.value, destino.value, valor).then(res => resultadoFinal(res));
  gerarGraficoEstiloFinanceiro(origem.value, destino.value);
}


/* --- Inicialização --- */
paises().then(() => {
  atualizarResultado();

  gerarGraficoEstiloFinanceiro(origem.value, destino.value);

  origem.addEventListener("change", () => atualizarResultado());
  destino.addEventListener("change", () => atualizarResultado());
});

/* --- Botão converter --- */
btn_converter.addEventListener("click", () => {
  validacao(valor);
  if (valor.checkValidity()) {
    converter(origem.value, destino.value, Number(valor.value)).then(res => {
      resultadoFinal(res);
      valor.value = "";
      valor.focus();
    });
  }
});

/* --- Pressionar Enter também converte --- */
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validacao(valor);
    if (valor.checkValidity()) {
      converter(origem.value, destino.value, Number(valor.value)).then(res => {
        resultadoFinal(res);
        valor.value = "";
        valor.focus();
      });
    }
  }
});

/* --- Limpa o campo ao focar --- */
valor.addEventListener("focus", () => valor.value = "");
