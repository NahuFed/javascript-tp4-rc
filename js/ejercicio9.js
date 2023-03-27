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
