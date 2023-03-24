function determinarGeneracion(edad){
    if (edad <= 29 && edad >= 13){
        return 'Generacion Z'
    } else    if (edad <= 42 && edad >= 30){
        return 'Generacion Y'
    } else if (edad <= 54 && edad >= 43){
        return 'Generacion X'
    } else if (edad <= 74 && edad >= 55){
        return 'Baby Boom'
    } else if (edad <= 93 && edad >= 75){
        return 'Silent Generation'
    } 
}



class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
  get generacion(){
   return determinarGeneracion(this.edad)
  }
  get esMayorDeEdad(){
    return this.edad >= 18 ? 'Es mayor de edad' : 'No es mayor de edad'
  }
  get mostrarDatos(){
    return document.write(`
    Nombre: ${this.nombre} <br> 
    Edad: ${this.edad} <br>
    Dni: ${this.dni} <br>
    Sexo: ${this.sexo} <br>
    Peso: ${this.peso} <br>
    Altura: ${this.altura} <hr>`)
  }
   generaDNI(){
   this.dni = Math.floor(Math.random() *99999999) + 1
  }
}

let nahuel = new Persona('Nahuel',27,39077984,'H',70,175)