// Estructurar nuestra lógica 
// Hacer un programa que guarde y pida a un usuario su edad
// para saber si es mayor o menor de edad.

let edad = window.prompt('¿CUANTOS AÑOS TIENES?')
     // edad = 18

// para saber si es mayor o menor de edad podemos usar
// una estructura de control
    if ( edad >= 18 ){
        // si la condicion es verdadera
        // se ejecuta el código
        console.log('Eres mayor de edad 🧑‍🦰')
        document.write('Eres mayor de edad 🧑‍🦰')
    }else{
        // si la condicion es falsa
        // se ejecuta el código
        console.log('Eres menor de edad 👶')
        document.write('Eres menor de edad 👶')
    }

// Hacer un programa que guarde y pida a un usuario su edad
// para saber si es mayor o menor de edad e indicarle que
// ingrese una edad valida (asd, 18.5)

const age = parseInt(window.prompt('¿CUANTOS AÑOS TIENES?'))

 if (age >= 18){
    console.log('Eres mayor de edad 🧑‍🦰')
 } else if (age < 0) {
    console.warn('Edad no valida, Ingresa un número positivo')
 } else if (isNaN(age)){
    console.warn('Edad no valida, ingresa un número') 
 } else {
    console.log('Eres menor de edad 👶')
 }


 // operadores lógicos
 // and (&&) or (||) not (!)
    if ( condicion1 || condicion2 || condicion3 ){
        // se ejecuta el código
    } else {
        // se ejecuta el código
    }
  