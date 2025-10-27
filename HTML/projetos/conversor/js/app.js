
const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const resultado = document.getElementById("resultado");
const btn_converter = document.getElementById("btn_converter");
const valor = document.getElementById("valor");

function  paises() {
    fetch("https://api.frankfurter.app/currencies")
        .then((resp) => resp.json())
        .then((data) => {
            for (let paises in data) {

                const option1 = document.createElement("option");
                option1.value = paises;
                option1.textContent = paises;

                const option2 = document.createElement("option");
                option2.value = paises;
                option2.textContent = paises;

                origem.appendChild(option1);
                destino.appendChild(option2);
            }
        })
        .catch((error) => {
            console.error("Erro ao obter Países:", error);
        })
};

function converter(origem, destino, valor) {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${origem}&symbols=${destino}`)
        .then((resp) => resp.json())
        .then((data) => {
            const convertedAmount = (valor * data.rates[destino]).toFixed(2);
            resultado.innerText = `${valor} ${origem} = ${convertedAmount} ${destino}`
        })
        .catch((error)=>{
            console.error("Erro ao obter a Conversão:", error);
        })
};

function validacao (element) {
    const validacao = element.validity;

    element.setCustomValidity("");

    if (validacao.valueMissing) {
        element.setCustomValidity("Campo Obrigatório");
    }
    
    element.reportValidity();
}


paises();

btn_converter.addEventListener("click", () => {
    validacao(valor);
    converter(origem.value, destino.value, valor.value);
});
