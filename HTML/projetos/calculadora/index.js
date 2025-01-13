let tela = document.getElementById("tela");

const numeros = [...document.querySelectorAll("#numbers")];
const operacoes = [...document.querySelectorAll("#operacao")];
const resultado = document.getElementById("resultado");
const limpar = document.getElementById("limpar")

tela.value = "0";

numeros.forEach((numbers)=>{
    numbers.addEventListener("click", (evt)=>{
        if (tela.value === "0" || tela.value === "Erro!") {
            tela.value = numbers.textContent;
        } else {
            tela.value += numbers.textContent;
        }
    })
})

operacoes.forEach((operacao)=>{
    operacao.addEventListener("click", (evt)=>{

        const ultimoCaractere = tela.value.trim().slice(-1);

       if("+-*/".includes(ultimoCaractere)) return;

       tela.value += ` ${operacao.textContent} `;
    })
})

resultado.addEventListener("click", (evt)=>{
    try {
        const resultado = eval(tela.value) || 0;
        
        tela.value = resultado;
    } catch (error) {
            
         tela.value = "Erro!";
    }
})

limpar.addEventListener("click", ()=>{
    tela.value = "0";
})


