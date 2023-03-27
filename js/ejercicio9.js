// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
// el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
// que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
// crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
// métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
class Animal{
    constructor(nombre, edad){
       this._nombre=nombre
       this._edad=edad
    }

    emitirSonido(){

    }
}

class Perro extends Animal{
    
    emitirSonido(){
        return 'GUAU GUAU!'
    }
}

class Gato extends Animal{
    emitirSonido(){
        return 'Miau'
    }
}

bobi = new Perro('Bobi',4)
felix = new Gato('Felix',2)

document.write('Bobi dice: ')
document.write(bobi.emitirSonido())
document.write('<hr>')
document.write('Felix dice: ')
document.write(felix.emitirSonido())
