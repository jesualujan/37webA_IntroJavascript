/*
Para que yo me pueda vacunar, necesito cumplir alguno
de los siguientes requisitos:
1) Mayores de 18 años que residen en un municipio fronterizo 
   del Norte del país.
2) Embarazadas mayores de 18 años con más de 9 semanas 
   de gestación.
3) Personas que cumplen 30 años o más este año.
*/

// PASO #1: Definir las variables que necesitamos
var edad = parseInt(prompt('¿Qué edad tienes?'))
var fronterizo = prompt('¿Vives en una ciudad fronteriza del norte del País? - si o no').toLocaleLowerCase()
var embarazada = prompt('¿Estas embarazada? si o no').toLocaleLowerCase()
var semanasGestacion = parseInt(prompt('En caso de estar embarazada, ¿Cuantas semanas tienes? si no es el caso, conteste 0'))

// PASO #2: Validar nuestras condiciones 
 if (edad >= 18 && fronterizo == 'si') {
 document.write('Si te puedes vacunar, por ser mayor de 18 años y vivir en un municipio fronterizo del Norte del país')
 } else if (edad >= 18 && embarazada == 'si' && semanasGestacion >= 9) {
 document.write('Si te puedes vacunar, por ser mayor de edad, estar emabarazada y tener 9 semanas de gestación')
 } else if (edad >= 30){
    document.write('Si te puedes vacunar, por tener 30 años o más')
 } else {
    document.write('Lo sentimos, aún no te puedes vacunar, espera próximo aviso')
 }