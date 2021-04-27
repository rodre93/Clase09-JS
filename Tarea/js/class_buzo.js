class rBuzo {
    constructor(rMarca, rPrecio, rTalle, rColor, rEnvio, rDisponibilidad = " ", rTotal = ""){
        this.marca = rMarca.toUpperCase();
        this.precio = parseFloat(rPrecio);
        this.talle = rTalle.toUpperCase();
        this.color = rColor;
        this.envio = rEnvio;
        this.disponibilidad = rDisponibilidad;
        this.total = rTotal;
    }
    sumaImp() {
        console.log(this.precio = this.precio * 1.65);
    }
    sumaEnvio() {
        console.log(this.total = this.precio + this.envio);
    }
}