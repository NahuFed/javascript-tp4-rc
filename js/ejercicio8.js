class Persona {
    constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
    }
    
    get nombre() {
    return this.#nombre;
    }
    
    set nombre(nombre) {
    this.#nombre = nombre;
    }
    
    get edad() {
    return this.#edad;
    }
    
    set edad(edad) {
    this.#edad = edad;
    }
    
    get profesion() {
    return this.#profesion;
    }
    
    set profesion(profesion) {
    this.#profesion = profesion;
    }

  saludar(nombre) {
    return `Hola don ${nombre}`;
  }

  despedirse(nombre) {
    return `Adios don ${nombre}`;
  }
}

let pepito = new Persona("Pepito", 45, "Dentista");
let jose = new Persona("Jose", 47, "Abogado");

console.log(jose.saludar(pepito.nombre));
console.log(pepito.saludar(jose.nombre));
console.log(jose.despedirse(pepito.nombre));
console.log(pepito.despedirse(jose.nombre));