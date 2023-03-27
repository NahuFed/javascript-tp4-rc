// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
// aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
// objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
// de un avión y devolverá información en caso de encontrarlo, si no lo encontró
// indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
// de pasajeros. Los aviones tienen el método abordar el cual permite que un
// pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
// contrario mostrar un mensaje que indique que el avión está lleno.
// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
// objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar
// un avión y usar el método abordar.

class Aeropuerto {
  constructor(nombreAeropuerto, listaDeAviones) {
    this._nombreAeropuerto = nombreAeropuerto;
    this._listaDeAviones = listaDeAviones;
  }

  agregarAvion(avion) {
    this._listaDeAviones.push(avion);
  }

  buscarAvion(nombre) {
    if (this._listaDeAviones.some((avion) => avion.nombre === nombre)) {
      let avionEncontrado = this._listaDeAviones.find(
        (avion) => avion.nombre === nombre
      );
      return avionEncontrado.mostrarInformacion();
    } else {
      return "El avion buscado no existe";
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaDePasajeros) {
    this._nombre = nombre;
    this._capacidad = capacidad;
    this._destino = destino;
    this._listaDePasajeros = listaDePasajeros;
  }
  get nombre() {
    return this._nombre;
  }
  get capacidad() {
    return this._capacidad;
  }
  get destino() {
    return this._destino;
  }
  get listaDePasajeros() {
    return this._listaDePasajeros;
  }

  abordar(numeroDePasajeros) {
    if (this._capacidad >= numeroDePasajeros) {
      this._capacidad -= numeroDePasajeros;
      return "Todos los pasajeros subieron a bordo!<br>";
    } else {
      return "No hay capacidad suficiente<br>";
    }
  }
  mostrarInformacion() {
    return `Nombre del avion: ${this._nombre} <br> Capacidad: ${this._capacidad} pasajeros <br> Destino: ${this._destino}`;
  }
}

let boeing = new Avion("Boeing 737-800", 162, "Miami", []);
let airbus = new Avion("Airbus A320", 150, "Londres", []);
let embraer = new Avion("Embraer E190", 100, "Sao Paulo", []);

let aviones = [boeing, airbus, embraer];

ezeiza = new Aeropuerto("Aeropuerto Internacional de Ezeiza", aviones);

document.write(ezeiza.buscarAvion("Airbus A320"));
document.write("<hr>");
document.write(boeing.abordar(162));
document.write(boeing.abordar(1));
