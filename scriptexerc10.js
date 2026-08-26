const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const selector = document.querySelector("#operacao");
const botao = document.querySelector("#igual");    
let resposta = document.querySelector("#resposta");

botao.addEventListener("click",calcular);

function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);

    if (selector.value === "soma"){
        resposta.innerHTML = valor1 + valor2;
    }
    if (selector.value === "subtracao"){
        resposta.innerHTML = valor1 - valor2;
    }
    if (selector.value === "multiplicacao"){
        resposta.innerHTML = valor1 * valor2;
    }
    if (selector.value === "divisao"){
        resposta.innerHTML = valor1 / valor2;
    }
}