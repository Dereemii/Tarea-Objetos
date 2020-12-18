
let marca = prompt("Ingresa la marca del equipo");
let tipo = prompt("Ingresa su tipo");
let serial = Number(prompt("Ingresa la serial"));
let precio = Number(prompt("Ingresa el precio del equpo"));

function Producto (marca, tipo, serial, precio){
    this.marca = marca;
    this.tipo = tipo;
    this.serial = serial;
    this.precio = precio;

    this.getDatosPC = function(){
        console.log(`La marca es ${this.marca} y su tipo es ${this.tipo}`);
        console.log(`La serial es: ${this.serial} y el precio es: ${this.precio}`)
    };
 
    this.getMarca = function(){
        return this.marca;
    }
    this.setMarca = marca;

    this.getTipo = function(){
        return this.tipo
    };

    this.setTipo = tipo 

    this.getSerial = function(){
        return this.serial
    }

    this.setSerial = serial;

    this.getPrecio = function(){
        return this.precio;
    }

    this.setPrecio = precio;
}

const producto = new Producto(marca, tipo, serial, precio);

producto.getDatosPC();