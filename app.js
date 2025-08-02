//let titulo = document.querySelector('h1'); se paso a la funtion asignarTextoElemento
//titulo.innerHTML = 'Juego del numero secreto';se paso a la funtion asignarTextoElemento

//let parrafo = document.querySelector('p'); al crear la funcion asignarTextoElemento, se elimino esta linea
//parrafo.innerHTML = 'Indica un número del entre 1 al 10'; al crear la funcion asignarTextoElemento, se elimino esta linea.

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

//console.log(numeroSecreto); //se mueve a la funcion verificarIntento para mostrar el numero secreto en la consola.

function asignarTextoElemento(elemento, texto) {  // la fumcion es con retorno y con parametros.
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // obtenemos el valor del input.
    
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez':'veces'}`); // mostramos el mensaje de acierto.
        document.getElementById('reiniciar').removeAttribute('disabled'); // habilitamos el boton de reiniciar.
    } else {
        // EL usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P','El número secreto es menor'); 
        } else { 
            asignarTextoElemento('P','El número secreto es mayor'); 
        }
        intentos++; // incrementamos el contador de intentos.
        limpiarCaja(); // limpiamos el input.
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; // limpiamos el input.
    
}


function condicionesIniciales () { // creamos la funcion con retorno y sin parametros.
    // Asignar el mensaje inicial al h1 y al p del HTML
    asignarTextoElemento("h1", "Juego del número secreto!"); // <-- Cambia aquí al titulo que desee
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`); // <-- Cambia aquí al numero que desee
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto(); // Generar el numero aleatorio
    intentos = 1; // Inicializar el numero de intentos 

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja(); // limpiamos el input.
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // deshabilitamos el boton de reiniciar
    }

condicionesIniciales(); // Llamamos a la funcion para mostrar el mensaje inicial y generar el numero secreto.

function generarNumeroSecreto(){ // la funcion es con retorno y sin parametros. 
    // Genera un número secreto entre 1 y 10
    // Math.random() genera un número decimal entre 0 y 1, multiplicamos por 10 para obtener un rango de 0 a 10
    // Luego usamos Math.floor() para redondear hacia abajo y sumamos 1 para obtener un rango de 1 a 10
    // Por ejemplo, si Math.random() genera 0.5, al multiplicar por 10 obtenemos 5, y al aplicar Math.floor() obtenemos 5, sumando 1 obtenemos 6.
    // Esto asegura que el número secreto siempre esté entre 1 y 10.
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('P', 'Ya se sortearon todos los números posibles'); 
    } else { 
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//asignarTextoElemento("h1", "Juego del número secreto!"); se paso a la funcion mensajeIniciales
//asignarTextoElemento("p", "Indica un número del 1 al 100"); se paso a la funcion mensajeIniciales
condicionesIniciales();
