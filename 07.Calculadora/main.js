// DOM
// SELECCIONAR ELEMENTOS  
 //* getElementById getElemnetByClass, getElementByTagName
 //* querySelector, querySelectorAll
// MANIPULAR ELEMENTOS

// selecciono mi elemento: 
   const screen = document.getElementById('screen-result')

// manipular elemento:
 function getData(num) {
    let value = num.value
    screen.value = screen.value + value 
 }

function clearScreen(){
   screen.value = ''
}
 
function calcular() {
    try{
        screen.value = eval(screen.value)
    }catch(e){
      screen.value = 'Syntax Error'
    }
 }