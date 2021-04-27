let myButtonsLogin = document.getElementsByTagName("button");

function myButtonClicked() {
    console.log("Boton Clikeado");
    console.dir(parametro);
}

function myButtonMouseMove() {
    console.log("Boton Mouse move")
}

for (const button of myButtonsLogin) {
    button.addEventListener("click", myButtonClicked);
    button.addEventListener("mousemove", myButtonMouseMove);
}

let limpiar = document.getElementById("clean");

limpiar.onclick = () => {
    let lista = document.getElementById("myCarrito");
    lista.parentNode.removeChild(lista);
    console.log("Voy a limpiar el carrito");
}

/*
myButtonLogin.addEventListener("click", myButtonClicked);
*/

/*
myButtonLogin.onclick = (parametro) => console.log("Boton clikeado");
*/


let myNewUserInput = document.getElementById("usuario");

myNewUserInput.onkeydown = () => console.log("tecla presionada");
myNewUserInput.onkeyup = () => console.log("se dejo de presionar tecla");





let myForm = document.getElementById("support");
let mysupportInput = document.getElementById("supportInput");
let mysupportChat = document.getElementById("supportChat");
myForm.addEventListener("submit", sendChatText);

function sendChatText(evento) {
    evento.preventDefault();
    console.dir(mysupportInput);
    console.log("Enviando" + mysupportInput.value);
    mysupportChat.innerText = mysupportChat.innerText + "Texto Enviado"
    mysupportInput.value = "";

    let formulario = evento.target;

    for (const children of formulario.children) {
        console.log(children.value);
    }
}