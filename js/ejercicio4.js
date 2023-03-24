class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo
        this.nombre=nombre
        this.precio=precio
    }
    get imprimeDatos(){
        return document.write(`codigo: ${this.codigo} <br>nombre:${this.nombre}<br>precio:${this.precio}<hr>`)
    }
}

let producto1 = new Producto(1,'azucar',120)
let producto2 = new Producto(3,'leche',220)
let producto3 = new Producto(3,'cafe',190)

let arrayProductos = [producto1,producto2,producto3]

for(producto of arrayProductos){
    document.write(`producto n° ${arrayProductos.indexOf(producto)+1} <br>`)
    producto.imprimeDatos
}