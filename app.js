let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteeados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el numero en: ' +intentos + ' intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
           asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;    
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero generado esta en la lista
    if(listaNumerosSorteeados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else {
        if(listaNumerosSorteeados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteeados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al ' +numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //inicializar numero de intentos
    //deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
