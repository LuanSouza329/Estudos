const numero = document.getElementById("numero");
const btn_resultado = document.getElementById("btn_resultado");
const txt_resultado = document.getElementById("resultado");

btn_resultado.addEventListener("click", ()=>{
    let number = Number(numero.value) || 0;

    if (number <= 1){
        txt_resultado.textContent = "Digite um valor maior que 1";
    }else {
        for (let c = 2; c <= Math.sqrt(number); c++)
        {
            if (number % c === 0){
               return txt_resultado.textContent = `O número ${number} não é primo`;
            }
        }
        return txt_resultado.textContent = `O número ${number} é primo`;
    }
})