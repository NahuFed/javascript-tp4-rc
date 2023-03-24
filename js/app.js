class Persona{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }
    hablar(){
        console.log(`${this.nombre} esta hablando`)
    }
}

let juan = new Persona('Juan',25)
let pablo = new Persona('Pablo',22) 

class Profesor extends Persona{
    constructor(nombre,edad,tipo){
        super(nombre,edad)
        this.tipo=tipo
    }
    tipoFormateado(){
        return `Tipo de contratacion ${this.tipo}`
    }
}

let fabricio = new Profesor('Fabricio', 35, 'fulltime')