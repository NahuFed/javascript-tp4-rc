// 1- Crea un objeto llamado auto que tenga algunas características como el color,
// marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
// permitir encender y apagar el auto.
class Auto {
  constructor(color, marca, modelo, estado) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado;
  }
  encender() {
    this.estado = `el auto esta encendido`;
    return this.estado;
  }
  apagar() {
    this.estado = `el auto esta apagado`;
    return this.estado;
  }
}

let auto = new Auto("rojo", "Toyota", "Etios", "el auto esta apagado");

let auto2 = {
  color: "rojo",
  marca: "toyota",
  modelo: "etios",
  estado: "el auto esta apagado",

  encender() {
    this.estado = `el auto esta encendido`;
    return this.estado;
  },
  apagar() {
    this.estado = `el auto esta apagado`;
    return this.estado;
  },
};

let auto3 = new Object();
auto3.color = "rojo";
auto3.marca = "toyota";
auto3.modelo = "etios";
auto3.estado = "el auto esta apagado";
auto3.encender = () => {
  auto3.estado = `el auto esta encendido`;
  return auto3.estado;
};
auto3.apagar = () => {
  auto3.estado = `el auto esta apagado`;
  return auto3.estado;
};
