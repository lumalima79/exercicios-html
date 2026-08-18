let botao = document.querySelector('#botao');
botao.style.backgroundColor = "blue";
let estaQuebrado= false;
let contaCliques = 0;

botao.addEventListener("mouseover",e =>{
    if(!estaQuebrado){
    botao.style.backgroundColor = "green";
    }

});

botao.addEventListener("mouseout",e =>{
    if(!estaQuebrado)
    botao.style.backgroundColor = "blue";
});

botao.addEventListener("click",e =>{

    contaCliques=contaCliques+1;

    if(contaCliques>= 10){
    botao.style.backgroundColor = "red";
    botao.innerHTML = "quebrei";
    estaQuebrado = true;
    }
});