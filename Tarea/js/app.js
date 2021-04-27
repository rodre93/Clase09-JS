let myUserInput = document.getElementById("usuario");

myUserInput.innerHTML = prompt("Hola, ingresa tu nombre");

const productos = [];

productos.push(new rBuzo("Adidas", 65, "L", "Negro", 34, "Si"));
productos.push(new rBuzo("Nike", 35, "M", "Blanco", 34));
productos.push(new rBuzo("New Balance", 22, "XL", "Gris y azul", 25));
productos.push(new rBuzo("Stussy", 98, "L", "Amarillo", 25, "Si"));
productos.push(new rBuzo("Supreme", 150, "XS", "Blanco y rojo", 34));

for (const rBuzo of productos) {
    console.log(rBuzo.marca);
    console.log(rBuzo.precio);
    console.log(rBuzo.talle);
    console.log(rBuzo.color);
    console.log(rBuzo.envio);
    console.log(rBuzo.disponibilidad);
}

for (const rBuzo of productos)
    rBuzo.sumaImp();

for (const rBuzo of productos)    
    rBuzo.sumaEnvio();

localStorage.setItem("buzo", JSON.stringify(productos));

/*
let myHTMLCarrito = document.getElementById("myCarrito");

for (const product of productos) {
    let myItem = document.createElement("li");

    myItem.innerHTML = product.getHTML();

    myHTMLCarrito.appendChild(myItem);
}
*/