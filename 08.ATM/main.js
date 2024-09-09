const cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" },
];

const selectCuentas = document.getElementById("cuentas");
const inputPassword = document.getElementById("password");
const resultado = document.getElementById("resultado");

// Llenar el select con las cuentas
for (let i = 0; i < cuentas.length; i++) {
    const cuenta = cuentas[i];
    const option = document.createElement("option");
    option.value = cuenta.nombre;
    option.text = cuenta.nombre;
    selectCuentas.appendChild(option);
}

function iniciarTransaccion() {
    const cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre === selectCuentas.value);
    const passwordIngresado = inputPassword.value;

    if (cuentaSeleccionada.password === passwordIngresado) {
        // Contraseña correcta
        mostrarOpciones(cuentaSeleccionada);
    } else {
        // Contraseña incorrecta
        resultado.textContent = "Contraseña incorrecta. Intenta nuevamente.";
        resultado.style.color = 'red';
        resultado.style.fontWeight = '600';
        resultado.style.backgroundColor = '#f8d7da';
        resultado.style.border = '#f5c6cb';
        resultado.style.padding = '10px';
        resultado.style.marginTop = '10px';
        resultado.style.borderRadius = '5px';
    }
}

function mostrarOpciones(cuenta) {
    const opciones = ["1) Consultar saldo", "2) Ingresar monto", "3) Retirar monto"];
    const seleccion = prompt("Selecciona una opción:\n" + opciones.join("\n")).toLowerCase();

    switch (seleccion) {
        case "1":
                case "consultar saldo":
            resultado.textContent = `Tu saldo actual es: $${cuenta.saldo}`;
            resultado.style.color = 'green';
            resultado.style.fontWeight = '600';
            resultado.style.backgroundColor = '#bfe38d';
            resultado.style.border = '#f5c6cb';
            resultado.style.padding = '10px';
            resultado.style.marginTop = '10px';
            resultado.style.borderRadius = '5px';
            break;
            case "2":
                case "ingresar monto":
            const montoIngresar = parseFloat(prompt("Ingrese el monto a depositar:"));
            if (montoIngresar > 0 && cuenta.saldo + montoIngresar <= 990) {
                cuenta.saldo += montoIngresar;
                resultado.textContent = `Se ingresó $${montoIngresar}. Saldo actual: $${cuenta.saldo}`;
                resultado.style.color = 'green';
                resultado.style.fontWeight = '600';
                resultado.style.backgroundColor = '#bfe38d';
                resultado.style.border = '#f5c6cb';
                resultado.style.padding = '10px';
                resultado.style.marginTop = '10px';
                resultado.style.borderRadius = '5px';
                console.log(montoIngresar)
                console.log(cuenta.saldo)
            } else {
                resultado.textContent = "Monto inválido. Debe ser mayor a 0 y el saldo no puede superar los $990.";
            }
            break;
            case "3":
                case "retirar monto":
            const montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (montoRetirar > 0 && cuenta.saldo - montoRetirar >= 10) {
                cuenta.saldo -= montoRetirar;
                resultado.textContent = `Se retiró $${montoRetirar}. Saldo actual: $${cuenta.saldo}`;
                resultado.style.color = 'green';
                resultado.style.fontWeight = '600';
                resultado.style.backgroundColor = '#bfe38d';
                resultado.style.border = '#f5c6cb';
                resultado.style.padding = '10px';
                resultado.style.marginTop = '10px';
                resultado.style.borderRadius = '5px';
            } else {
                resultado.textContent = "Monto inválido. Debe ser mayor a 0 y el saldo no puede ser menor a $10.";
                resultado.style.color = 'red';
                resultado.style.fontWeight = '600';
                resultado.style.backgroundColor = '#f8d7da';
                resultado.style.border = '#f5c6cb';
                resultado.style.padding = '10px';
                resultado.style.marginTop = '10px';
                resultado.style.borderRadius = '5px';
            }
            break;
        default:
            resultado.textContent = "Opción inválida.";
    }
}



