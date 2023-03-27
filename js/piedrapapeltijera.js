//  Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :crear un script (en el repo de conceptos de JS o realizar un nuevo repo) 
// con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) 
// la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.

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
  
const jugarPiedraPapelTijeras = (eleccion, eleccionComputadora) => {

    if (!['piedra', 'papel', 'tijera','1','2','3'].includes(eleccion.toLowerCase())) {
        return "Opción inválida";
      }
    alert("computadora eligio " + eleccionComputadora);
    switch (eleccion) {
      case '1':  
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
      case '2':  
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
      case '3':  
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
  let resultado =''
  let ganoJugador = 0
  let ganoComputadora = 0
  let partidasJugadas = 0
  let empates = 0

  do {
    let eleccionComputadora = Math.floor(Math.random() * 3) + 1;    
    let eleccion = prompt(`Bienvenido al juego de piedra papel o tijeras! \n Elija o escriba su jugada:\n1 - piedra \n2 - papel\n3 - tijera \nPartidas jugadas: ${partidasJugadas}  -  Partidas ganadas: ${ganoJugador} \nPartidas perdidas: ${ganoComputadora}  -  Empates: ${empates}`);
    
    alert(
      resultado = jugarPiedraPapelTijeras(eleccion, parsearEleccion(eleccionComputadora))
    )
    if(resultado === 'gana jugador'){
        ganoJugador++
    }else if(resultado === 'gana computadora'){
        ganoComputadora++
    }else{
        empates++
    }
    partidasJugadas++
    ;
  } while (confirm("jugar de nuevo?"));
  