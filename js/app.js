let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es: " + myUserProfile.darkmode);

/*let myInput = prompt("Quiere pasar a darkmode? [S]i o [N]o");

if( myInput.toLowerCase() == "s"){
    myUserProfile.darkmode = true;
    myUserProfile.save();
}
*/
console.dir(document);

console.log(document);

console.dir(document.body.children);

for (const element of document.body.children) {
    console.dir(element);
}

let signupButton = document.body.children[2];

signupButton.innerHTML = "Registrar"

console.log(signupButton);

let buttonlogin = document.getElementById("login");
let button_css = document.getElementsByClassName("button");
let all_buttons = document.getElementsByTagName("button");

console.log(buttonlogin);

for (const elements of button_css) {
    console.log(elements);
}

for (const elements of all_buttons) {
    console.log(elements);
}

let myElementP = document.createElement("p");

myElementP.innerHTML = "<h2> Hola CoderHouse </h2>";

buttonlogin.appendChild(myElementP);

/*
buttonlogin.removeChild(myElementP);
*/

myElementP.parentNode.removeChild(myElementP);

/*
let myUserInput = document.getElementById("usuario");

myUserInput.value = "Homero";
*/

let myListPersonas = document.getElementById("personas");

let personasList = ["Homero", "Marge","Lisa", "Bart", "Maggie"];

for (const persona of personasList) {
    let myItemList = document.createElement("li");
    myItemList.innerHTML = persona;
    myListPersonas.appendChild(myItemList);
}

let myTempObj = {id: 0, marca:"CocaCola", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto = new Producto( myTempObj.id, myTempObj.marca, myTempObj.precio );

localStorage.setItem("producto", JSON.stringify(myProducto));

let myTempObj2 = {id: 0, marca:"Pepsi", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto2 = new Producto( myTempObj2.id, myTempObj2.marca, myTempObj2.precio );

let myCarrito = [] // Que pasa si en lugar de usar un array uso objeto carrito?

let storedCarrito = sessionStorage.getItem("carrito");

if( storedCarrito != null){
    // primero cargo como array

    let tempMyCarrito = JSON.parse(storedCarrito); // Estoy un array de ojbetos que NO son Producto

    for (const producto of tempMyCarrito) {
        let loadedProduct = new Producto(producto.id, producto.marca, producto.precio)
        myCarrito.push(loadedProduct);
    }

} else{
    myCarrito.push(myProducto);
    myCarrito.push(myProducto2);
}



sessionStorage.setItem("carrito", JSON.stringify(myCarrito));

let myHTMLCarrito = document.getElementById("myCarrito");

for (const product of myCarrito) {
    let myItem = document.createElement("li");

    myItem.innerHTML = product.getHTML();

    myHTMLCarrito.appendChild(myItem);
}