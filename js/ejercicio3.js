class Rectangulo{

    constructor(alto,ancho){
        this.alto=alto
        this.ancho=ancho        
    }
    
get mostrarAltoRectangulo(){
    return this.alto
}    
set cambiarAltoDelRectangulo(medida){
    this.alto=medida
} 

get mostrarAnchoRectangulo(){
    return this.ancho
}   
set cambiarAnchoDelRectangulo(medida){
    this.ancho=medida
}
get areaDelRectangulo(){
    return this.alto*this.ancho
}    
}

let rectangulo1 = new Rectangulo(0,0)

rectangulo1.cambiarAltoDelRectangulo = prompt('ingrese el alto del rectangulo')
rectangulo1.cambiarAnchoDelRectangulo = prompt('ingrese el ancho del rectangulo')
alert(`area del rectangulo: ${rectangulo1.areaDelRectangulo}`)
