let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let seleccion=document.getElementById("caja");

btn1.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #e53e3e;height:100%;width:100%')
})

btn2.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #dd6b20;height:100%;width:100%')
})

btn3.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #faf089;height:100%;width:100%')
})

btn4.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #48bb78;height:100%;width:100%')
})

btn5.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #81e6d9;height:100%;width:100%')
})

btn6.addEventListener('click', () => {
    seleccion.setAttribute('style', 'background-color: #d53f8c;height:100%;width:100%')
})