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
    mapaMoedas = data; // Guarda pares código → nome
    const moedas = Object.entries(data); // Ex: [ ["USD", "US Dollar"], ["EUR", "Euro"] ]

    moedas.forEach(([codigo, nome]) => {
      const option1 = document.createElement("option");
      option1.value = nome; // o nome da moeda vai no select
      option1.dataset.codigo = codigo; // guarda o código para a API
      option1.textContent = nome;

      const option2 = document.createElement("option");
      option2.value = nome;
      option2.dataset.codigo = codigo;
      option2.textContent = nome;

      origem.appendChild(option1);
      destino.appendChild(option2);
    });

    origem.value = moedas[0][1];
    destino.value = moedas[1][1];

  } catch (error) {
    console.error("Erro ao obter Países:", error);
  }
}

/* --- Conversão via API --- */
async function converter(nomeOrigem, nomeDestino, valor) {
  try {
    // Encontra os códigos correspondentes
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


/* --- Atualiza automaticamente a conversão --- */
function atualizarResultado(valor = 1) {
  converter(origem.value, destino.value, valor).then(res => resultadoFinal(res));
}


/* --- Inicialização --- */
paises().then(() => {
  atualizarResultado();
  
  gerarGrafico()

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
