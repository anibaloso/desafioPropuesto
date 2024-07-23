let form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    const esValido = validacionDatos(nombre, asunto, mensaje);

    if (esValido) {

        document.getElementById("resultado").innerText = "Mensaje enviado con éxito!!!";
        limpiarError()
    }
})

function validacionDatos(nombre, asunto, mensaje) {
    const regNom = /^[a-z]+$/i;
    const regAsun = /^[a-z]+$/i;
    const regMen = /^[a-z]+$/i;

    if (!regNom.test(nombre)) {
        document.querySelector(".errorNombre").innerText = 'Nombre Invalido'
    }
    if (!regAsun.test(asunto)) {
        document.querySelector(".errorAsunto").innerText = 'Asunto Invalido'
    }
    if (!regMen.test(mensaje)) {
        document.querySelector(".errorMensaje").innerText = 'Mensaje Invalido'
    }

    return regNom.test(nombre) && regAsun.test(asunto) && regMen.test(mensaje)
}

function limpiarError() {
    let errNom = document.querySelector(".errorNombre");
    let errAsun = document.querySelector(".errorAsunto");
    let errMen = document.querySelector(".errorMensaje");
    errNom.innerText = '';
    errAsun.innerText = '';
    errMen.innerText = '';
}
