let suma = document.getElementById("btn-sumar");
let resta = document.getElementById("btn-restar");
let resultado=document.getElementById("resultado");

suma.addEventListener('click',()=>{
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let sumaDos=valor1+valor2;
    document.querySelector(".resultado").innerText=sumaDos;
})

resta.addEventListener('click',()=>{
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);
    let restaDos=valor1-valor2;
    if (restaDos<0) {
        restaDos=0;
        document.querySelector(".resultado").innerText=restaDos;
    }else
    document.querySelector(".resultado").innerText=restaDos;
})
