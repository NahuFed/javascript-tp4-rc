// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
// las propiedades código, nombre y precio, además del método imprime datos, el
// cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores
// de los tres objetos instanciados.
class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    return document.write(
      `codigo: ${this.codigo} <br>nombre: ${this.nombre}<br>precio: $${this.precio}<hr>`
    );
  }
}

let producto1 = new Producto(1, "Azucar", 320);
let producto2 = new Producto(3, "Leche", 217);
let producto3 = new Producto(3, "Cafe", 839);

let arrayProductos = [producto1, producto2, producto3];

for (producto of arrayProductos) {
  document.write(`producto n° ${arrayProductos.indexOf(producto) + 1} <br>`);
  producto.imprimeDatos();
}
