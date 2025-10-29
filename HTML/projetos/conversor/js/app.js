const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const resultado = document.getElementById("resultado");
const btn_converter = document.getElementById("btn_converter");
const valor = document.getElementById("valor");

async function paises() {
    try {
        const resp = await fetch("https://api.frankfurter.app/currencies");
        if (!resp.ok) throw new Error("Erro ao obter moedas");

        const data = await resp.json();
        const moedas = Object.keys(data);


        moedas.forEach((pais) => {
            const option1 = document.createElement("option");
            option1.value = pais;
            option1.textContent = pais;

            const option2 = document.createElement("option");
            option2.value = pais;
            option2.textContent = pais;

            origem.appendChild(option1);
            destino.appendChild(option2);
        });

        // Define os valores iniciais dos selects
        origem.value = moedas[0];
        destino.value = moedas[1];

    } catch (error) {
        console.error("Erro ao obter Países:", error);
    }
}


/* Função de conversão via API */
async function converter(origem, destino, valor) {
    try {
        const resp = await fetch(`https://api.frankfurter.dev/v1/latest?base=${origem}&symbols=${destino}`);
        if (!resp.ok) throw new Error("Erro na requisição");

        const data = await resp.json();
        const convertedAmount = (valor * data.rates[destino]).toFixed(2);

        return `${valor} ${origem} = ${convertedAmount} ${destino}`;
    } catch (error) {
        console.error("Erro ao obter a conversão:", error);
        resultado.innerText = "Erro ao converter. Tente novamente.";
        return null;
    }
}


function validacao(element) {
    const valid = element.validity;

    element.setCustomValidity("");

    if (valid.valueMissing) {
        element.setCustomValidity("Campo Obrigatório");
    }
    else if (element.type === "number" && Number(element.value) < 1) {
        element.setCustomValidity("O valor mínimo do campo é 1");
    }
    else if (element.type === "number" && Number(element.value) > 100) {
        element.setCustomValidity("O valor máximo do campo é 100");
    }

    element.reportValidity();
}


/* Função para validar o Input */
paises().then(() => {

    converter(origem.value, destino.value, 1).then((res) => {
        resultado.innerText = res;
    })

    origem.addEventListener("change", () => {

        converter(origem.value, destino.value, 1).then((res) => {
            resultado.innerText = res;
        })
    })

    destino.addEventListener("change", () => {
        converter(origem.value, destino.value, 1).then((res) => {
            resultado.innerText = res;
        })
    })
})


btn_converter.addEventListener("click", () => {
    validacao(valor);
    if (valor.checkValidity()) {
        converter(origem.value, destino.value, Number(valor.value)).then((res) => resultado.innerText = res);
    }
});


