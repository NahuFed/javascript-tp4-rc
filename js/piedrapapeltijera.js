// Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :crear un script (en el repo de conceptos de JS o realizar un nuevo repo) con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.

const jugarPiedraPapelTijeras = (eleccion, eleccionComputadora) => {
    switch (eleccion) {
      case "piedra":
        switch (eleccionComputadora) {
          case "piedra":
            return "empate";
          case "papel":
            return "gana computadora";
          case "tijera":
            return "gana jugador";
        }
        break;
      case "papel":
        switch (eleccionComputadora) {
          case "piedra":
            return "gana jugador";
          case "papel":
            return "empate";
          case "tijera":
            return "gana computadora";
        }
        break;
      case "tijera":
        switch (eleccionComputadora) {
          case "piedra":
            return "gana computadora";
          case "papel":
            return "gana jugador";
          case "tijera":
            return "empate";
        }
        break;
    }
  };
  const parsearEleccion = (eleccion) => {
    switch (eleccion) {
      case 1:
        return "piedra";
      case 2:
        return "papel";
      case 3:
        return "tijera";
    }
  };
  
  
  
  do {
    let eleccionComputadora = Math.floor(Math.random() * 3) + 1;
    let eleccion = prompt("elija piedra, papel o tijera");
    alert("computadora eligio " + parsearEleccion(eleccionComputadora));
    alert(
      jugarPiedraPapelTijeras(eleccion, parsearEleccion(eleccionComputadora))
    );
  } while (confirm("jugar de nuevo?"));
  