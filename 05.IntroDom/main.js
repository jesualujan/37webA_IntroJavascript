// vamos a manipular el dom usando el javascript
 // Seleccionar elemento
 // manipular elemento

 // crear una variable: var,let y const 
  // Seleccionar elemento
  const opcionJugador = document.querySelectorAll('.opcion')
  const resultadoMensaje = document.getElementById('mensaje')

  // voy a definir una lista 

  const opciones = ['piedra', 'papel', 'tijera']
  console.log(opciones)

  // función para jugar el juego
  function jugar(opcionSeleccionada) {
    // hacer que la computadora elija una opción de manera aleatorio
 const opcionComputadora = opciones [Math.floor(Math.random() * 3)]

 // determinar al ganador 
  let resultado = ''
  if(opcionSeleccionada === opcionComputadora){
     resultado = 'Empate'
  } else if (
    (opcionSeleccionada === 'piedra' && opcionComputadora === 'tijera') ||
    (opcionSeleccionada === 'papel' && opcionComputadora === 'piedra') ||
    (opcionSeleccionada === 'tijera' && opcionComputadora === 'papel')
  ){
    resultado = 'Ganaste'
  }else{
    resultado = 'Perdiste'
  }
 // actualizar le resultado del mensaje
  resultadoMensaje.textContent = `Elegiste ${opcionSeleccionada}, la máquina eligio ${opcionComputadora}, ${resultado}`
  }