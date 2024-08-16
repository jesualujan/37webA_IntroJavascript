// Vamos a tener nuestros ejemplos de ciclos o bucles

// imprimir una lista del 0 al 20
// la letra i hace referencia a estras 3 palabras:
// i = index, contador , acumulador 
var i = 0
while (i <= 20) {
    // mi código 
    // se ejecuta mientras la condicion sea verdadera
    console.log(i)
    document.write(i)
    i++ //  i = i + 1
}

// ejemplo 2)

let numUser = parseInt(prompt('ingresa un número 😃'))
let i = 0
while (i <= numUser) {
    // mi código 
   // se ejecuta mientras la condicion sea verdadera
    console.log(i)
    i++
}

// Ejemplo con ciclo do-while 
 let caracter
 do {
    // se ejecuta primero el código
    caracter = prompt('😀 ingresa un caracter: ')
    console.log(caracter)
 } while(caracter !== 'a')
    console.warn('ingresaste la letra a 😛 ')
    // el código se vuelve a ejecutar mientras 
    // mi condición sea verdadera 
 