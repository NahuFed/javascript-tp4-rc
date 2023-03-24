let cuenta = {
 titular: 'alex',
 saldo: 0,
 ingresar(dinero){
    this.saldo += dinero    
 },
 extraer(dinero){
    this.saldo -= dinero    
 },
 informar(){
    return(`Dinero en cuenta: $${this.saldo}`)
 }

}