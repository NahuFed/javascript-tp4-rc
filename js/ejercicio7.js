const crearContacto = () => {
  let nombre = prompt("escriba el nombre");
  let telefono = prompt("escriba el telefono");
  let contacto = new Contacto(nombre, telefono);
  return contacto;
};

const menu = () => {
  let opcion = "";
  let nombre = "";
  do {
    opcion = prompt(
      "Seleccione una opcion \n1-Agregar contacto \n2-Existe el contacto? \n3-Listar contactos \n4-Buscar un contacto \n5-Eliminar un contacto \n6-La agenda esta llena? \n7-Espacios libres en la agenda \n8-Salir"
    );
    switch (opcion) {
      case "1":
        if (agenda.contactos.length < 10){
        let contacto = crearContacto();
        agenda.aniadirContacto(contacto);
        } else{
            alert("No se puede añadir mas contactos, la agenda está llena ");
        }
        break;
      case "2":
        agenda.existeContacto(prompt("Escriba el nombre que quiere buscar"))
          ? alert("Si existe el contacto")
          : alert("No existe el contacto");
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        nombre = prompt("Escriba el nombre que quiere buscar");
        alert(
          `Nombre: ${agenda.buscarContacto(nombre).obtenerNombre} Telefono: ${
            agenda.buscarContacto(nombre).obtenerTelefono
          }`
        );
        break;
      case "5":
        nombre = prompt("Escriba el nombre que quiere eliminar");
        agenda.eliminarContacto(nombre);
        break;
      case "6":
        alert(agenda.agendaLLena());
        break;
      case "7":
        alert(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

      case "8":
        alert("Hasta luego");
        break;
      default:
        alert("OPCION INCORRECTA");
        break;
    }
  } while (opcion != "8");
};

const agenda = {
  contactos: [],

  aniadirContacto(contacto) {
    this.contactos.push(contacto);
  },
  existeContacto(nombre) {
    let bandera = false;
    for (contacto of this.contactos) {
      if (contacto.obtenerNombre === nombre) {
        bandera = true;
        break;
      } else {
        bandera = false;
      }
    }
    return bandera;
  },
  listarContactos() {
    lista = "";
    for (contacto of this.contactos) {
      lista += `
          -  Nombre: ${contacto.obtenerNombre}  Telefono: ${contacto.obtenerTelefono}\n`;
    }
    alert(lista);
  },
  buscarContacto(nombre) {
    if (this.existeContacto(nombre)) {
      const contacto = this.contactos.find(
        (contacto) => contacto.obtenerNombre === nombre
      );
      return contacto;
    } else {
      alert(`el contacto ${nombre} no existe`);
    }
  },
  eliminarContacto(nombre) {
    if (this.existeContacto(nombre)) {
      this.contactos = this.contactos.filter(
        (contacto) => contacto.obtenerNombre != nombre
      );
    } else {
      alert(`el contacto ${nombre} no existe`);
    }
  },
  agendaLLena() {
    return this.contactos.length >= 10
      ? `La agenda esta llena`
      : `La agenda tiene espacio`;
  },
  huecosLibres() {
    return 10 - this.contactos.length;
  },
};

class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
  }

  set modificarNombre(nombre) {
    this._nombre = nombre;
  }
  get obtenerNombre() {
    return this._nombre;
  }
  set modificarTelefono(telefono) {
    this._telefono = telefono;
  }
  get obtenerTelefono() {
    return this._telefono;
  }
}

menu();
