let formulario = document.getElementById("contactar");
let textoEnviado = document.getElementById("textoEnviado");

formulario.addEventListener("submit", sendChatText);

function sendChatText(evento) {
    evento.preventDefault();
    console.dir(formulario.contactarNombre.value + " " + formulario.contactarMail.value);
    console.log("Formulario Enviado " + formulario.contactarNombre.value + " " + formulario.contactarMail.value);
    textoEnviado.innerHTML = "Contacto Enviado";
    formulario.contactarNombre.value = "";
    formulario.contactarMail.value = "";
}

