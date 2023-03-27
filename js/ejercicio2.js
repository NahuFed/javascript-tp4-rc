// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ● Una propiedad titular con el valor "Alex".
// ● Una propiedad saldo, teniendo como valor inicial 0.
// ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
// cantidad como parámetro
// ● Un método extraer() que permita retirar la cantidad pasada como
// parámetro.
// ● Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
// mostrar la descripción del estado de la cuenta.

const menu = (cuenta) => {
  let opcion = "";
  let cantidad;
  do {
    opcion = prompt(
      `Bienvenido ${cuenta.titular}\nElija una opcion: \n1 - Extraer dinero\n2 - Depositar dinero\n3 - Saldo disponible \n4 - Salir`
    );
    switch (opcion) {
      case "1":
        do {
          cantidad = prompt("Ingrese el monto que va a retirar");
          if (isNaN(cantidad) || cantidad < 0) {
            alert("Ingrese un monto valido");
          }
        } while (isNaN(cantidad) || cantidad < 0);
        cuenta.extraer(parseInt(cantidad));
        break;
      case "2":
        do {
          cantidad = prompt("Ingrese el monto que va a depositar");
          if (isNaN(cantidad) || cantidad < 0) {
            alert("Ingrese un monto valido");
          }
        } while (isNaN(cantidad) || cantidad < 0);
        cuenta.ingresar(parseInt(cantidad));
        break;

      case "3":
        cuenta.informar();
        break;
      case "4":
        alert("Hasta luego");
        break;
      default:
        alert("Opcion Incorrecta");
    }
  } while (opcion != "4");
};

let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar(dinero) {
    this.saldo += dinero;
  },
  extraer(dinero) {
    if (this.saldo >= dinero) {
      this.saldo -= dinero;
    } else {
      alert("Saldo insuficiente, intente un importe menor");
    }
  },
  informar() {
    alert(
      `Titular de la cuenta: ${this.titular}\nDinero en cuenta: $${this.saldo}`
    );
  },
};

cuenta.informar();
cuenta.ingresar(100);
cuenta.extraer(30);
cuenta.informar();
menu(cuenta);
