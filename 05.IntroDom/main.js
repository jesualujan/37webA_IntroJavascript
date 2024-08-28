// vamos a manipular el dom usando el javascript
 // Seleccionar elemento
 // manipular elemento

 // crear una variable: var,let y const 
  // Seleccionar elemento
  const opcionJugador = document.querySelectorAll('.opcion')
  const resultadoMensaje = document.getElementById('mensaje')

  // voy a definir una lista 

  const opciones = ['piedra', 'papel' , 'tijera']
  // console.log(opciones)
 // función para jugar el juego 
 function jugar(opcionSeleccionada) {
  // hacer que la computadora elija una opción de manera aleatoria
  const opcionComputadora =  opciones [Math.floor(Math.random() * 3)]

  // determinar al ganador
  let resultado = ''
  if(opcionSeleccionada === opcionComputadora) {
      resultado = 'Empate'
  } else if (
      (opcionSeleccionada === 'piedra' && opcionComputadora === 'tijera') ||
      (opcionSeleccionada === 'papel' && opcionComputadora === 'piedra') ||
      (opcionSeleccionada === 'tijera' && opcionComputadora === 'papel')
  ) {
      resultado = 'Ganaste'
  }else {
      resultado = 'Perdiste'
  }
  // actulizar el resultado del mensaje 
  resultadoMensaje.textContent = `Elegiste ${opcionSeleccionada}, la máquina eligio ${opcionComputadora} . ${resultado} `
}

  // Agregar un evento AddEventListener 
  // recorrer el arreglo o la lista llamada opciones
  for(let i = 0; i <= opcionJugador.length; i++){
    const opcion = opcionJugador[i]
    const valor = opcion // capturar el valor de opción 
    opcion.addEventListener('click',
      // funcion anonima que ejecuta a la funcion:  
      // ? function jugar(opcionSeleccionada)
      function (){
        const opcionSeleccionada = valor.dataset.opcion
        jugar(opcionSeleccionada)
      }
    )
  }

// otra forma de hacerlo
// agregar un AddEventListener para cada oción del buton 
 // recorrer el arreglo o lista llamada opciones
//  opcionJugador.forEach(opcion => {
//   opcion.addEventListener('click', () => {
//       const opcionSeleccionada = opcion.dataset.opcion 
//       jugar(opcionSeleccionada)
//   })
// })


  