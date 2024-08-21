//* Hacer una función que pida la usuario dos números
//* y nos de la sumaTotal de esos dos números 

const num1 = parseInt(prompt("ingresa el primer número"))
const num2 = parseInt(prompt("ingresa el segundo número"))
function sumar (num1, num2) {
   let sumaTotal = num1 + num2
                // template string, combinar un string(texto) y variables
    console.log(`la suma total es ${sumaTotal}`)
    document.write(sumaTotal)
}
//aquí llamo a la función para que se ejecute el código
sumar(num1, num2)

//* Hacer una función que pida al usuario dos números
//* y nos de la restaTotal de esos dos números

const num3 = parseInt(prompt("ingresa el primer número"))
const num4 = parseInt(prompt("ingresa el segundo número"))
function restar (num3, num4) {
   let restaTotal = num3 - num4
    console.log(`la resta total es ${restaTotal}`)
    document.write(sumaTotal)
}
//aquí llamo a la función para que se ejecute el código
restar(num3, num4)

//* función sumar sin recibir ningún parámetro
function sumar () {
    let x = 2
    let y = 3
   let sumaTotal = x + y
    console.log(`la suma total es ${sumaTotal}`)
    document.write(sumaTotal)
}
//aquí llamo a la función para que se ejecute el código
sumar()

//* Hacer una función que pida al usuario un número
//* y nos haga la tabla de multiplicar de dicho número

const number = parseInt(prompt('INGRESA UN NÚMERO DEL 2 AL 9: 🤔'))
function tablaMultiplicar(number){
    // aquí va mi lógica es decir mi código a ejecutar  
    for (let i = 1; i <= 9; i++) {
                   // template string, combinar un string(texto) y variables
        console.log(`${number} x ${i} = ${number * i}`)
    }  
}
tablaMultiplicar(number)

//? HACER UNA FUNCION QUE SIRVA COMO 
//? CALCULADORA DONDE LAS OPERACIONES BÁSICAS SEAN:
 //* sumar "+"
 //* restar "-"
 //* multiplicar "*"
 //* dividir "/"

 function calculadora () {
    let num1 = parseFloat(prompt('INGRESE EL PRIMER NÚMERO: '))
     // console.log(num1)
    let num2 = parseFloat(prompt('INGRESE EL SEGUNDO NÚMERO: '))
    // console.log(num2)
    let operaciones = prompt('Selecciona la opción que gustes (+, -, *, /): ')
    // switch le proporcionas al usuario diferentes opcines 
    switch (operaciones) {
        // opcion uno
        case "+":
            console.log(num1 + num2)
        break
        // opcion dos
        case "-":
            console.log(num1 - num2)
        break
        // opcion tres
        case "*":
            console.log(num1 * num2)
        break
        // opcion cuatro
        case "/":
            console.log(num1 / num2)
        break
    }
 }
calculadora()

function generarContraseña(longitud, mayusculas, minusculas, numeros, especiales) {
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumericos = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()_-+=[]{}|;:,.<>/?';
  
    let caracteresPosibles = '';
    if (mayusculas) caracteresPosibles += caracteresMayusculas;
    if (minusculas) caracteresPosibles += caracteresMinusculas;
    if (numeros) caracteresPosibles += caracteresNumericos;
    if (especiales) caracteresPosibles += caracteresEspeciales;
  
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPosibles.length);
      contraseña += caracteresPosibles.charAt(indiceAleatorio);
    }
  
    return contraseña;
  }
  
  // Ejemplo de uso:
  const contraseña = generarContraseña(12, true, true, true, true);
  console.log(contraseña);