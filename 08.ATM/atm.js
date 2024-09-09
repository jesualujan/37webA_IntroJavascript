// manipualción del DOM
// PRIMERO CREO LA LISTA DE LAS CUENTAS CON LOS USUARIOS Y LAS CONTRASEÑAS:

const cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" },
];

// SELECCIONO LOS ELEMENTOS HTML A TRAVÉS DEL DOM
const selectCuentas = document.getElementById("cuentas");
const inputPassword = document.getElementById("password");
const resultado = document.getElementById("resultado");

// Llenar el select con las cuentas
// RECORRRO MI LISTA (ARREGLO) LLAMADO cuentas para saber que cuenta elegí con
// su respectiva contraseña
cuentas.forEach(cuenta => {
    const option = document.createElement("option");
    option.value = cuenta.nombre;
    option.text = cuenta.nombre;
    selectCuentas.appendChild(option);
});

// El método appendChild() en JavaScript se utiliza para añadir un 
// nodo como el último hijo de un nodo padre especificado.
//  Es una forma común de construir y modificar
//   la estructura del DOM (Document Object Model) de una página web.