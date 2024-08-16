// Tabla de multiplicar
// i = index, contador, acumulador 
// Le solicitamos al usuario que nos de un número

let numUser = parseInt(prompt('😁Ingresa un número:'))

 for(let i = 1; i <= 10; i++){
    // este es un scope local que corresponde al ciclo for
    console.log(numUser + ' x ' + i + ' = ' + (numUser * i))
 }

 // Hacer un programa que solicite al usuario un número
 // y te imprima números pares e impares

 let limite = parseInt(prompt('😁Ingresa un limite: '))
 for (let i = 1; i <= limite; i++) {
    // dentro del if establezco mi condición
    // para saber si un número es par o impar
     if(i % 2 === 0){
        console.log( i + 
            ' %ces par',
            'color:green;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold'
        )
     }else{
        console.log( i + 
           ' %ces impar',
            'color:red;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold'
          )
     }
 }

 // hacer un programa que imprima la serie de fibonacci

 let numLimite = parseInt(prompt('Ingrese el número de terminos de la secuencia de Fibonacci'))

 // inicializamos los dos primeros términos de la secuencia 
    let a = 0
    let b = 1
    console.log("Secuencia Fibonacci")
    console.log(a) // Imprimimos el primer término
    console.log(b) // Imprimimos el segundo término

    for (let i = 1; i < numLimite; i++){
        let c = a + b
        console.log(c)
        a = b
        b = c
    }