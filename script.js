console.log("JS conectado");

const boton = document.getElementById("btnSaludo");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Gracias por visitar mi sitio!";
});

const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
});
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim().toLowerCase();

    if (nombre === "") {
        respuesta.textContent = "Por favor escribe tu nombre";
        respuesta.style.color = "red";
    } 
    else if (nombre === "steve") {
        respuesta.textContent = "Hola Steve, este mensaje es solo para ti, no te rindas, vamos bien y esto será un cambio para mejor.💚";
        respuesta.style.color = "#0057b7";
    } 
    else if (nombre === "marlene") {
        respuesta.textContent = "Gracias por visitar mi página, recuerda que te amo 💜";
        respuesta.style.color = "purple";
    } 
    else {
        respuesta.textContent = "Formulario enviado correctamente 👍";
        respuesta.style.color = "green";
    }
});

let cuenta = 0;

const contador = document.getElementById("contador");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");

sumar.addEventListener("click", function () {
    cuenta++;
    contador.textContent = cuenta;
});

restar.addEventListener("click", function () {
    if (cuenta > 0) {
        cuenta--;
        contador.textContent = cuenta;
    }
});


