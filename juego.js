//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;

let clickAudio = new Audio('./aud/click.wav');
let aciertaAudio = new Audio('./aud/acierta.wav');
let fallaAudio = new Audio('./aud/falla.wav');
let gamaAudio = new Audio('./aud/gama.wav');
let pierdeAudio = new Audio('./aud/pierde.wav');

//apuntamiento de documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer < 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas(numeros);
            pierdeAudio.play();
        }
    },1000)
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar variables
    tarjetasDestapadas = 0;
    tarjeta1 = null;
    tarjeta2 = null;
    primerResultado = null;
    segundoResultado = null;
    movimientos = 0;
    aciertos = 0;
    timer = timerInicial;

    // Actualizar estadísticas en el DOM
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;

    // Reiniciar botones
    for(let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = '';
        tarjetaBloqueada.disabled = false;
    }

    // Reiniciar temporizador
    clearInterval(tiempoRegresivoId);
    temporizador = false;
}

// Función para salir
function salir() {
    window.location.href = "index.html"; // Cambia esto por la URL de tu página inicial
}

//Funcion para bloquear tarjeta
function bloquearTarjetas(){
    for(let i = 0; i<= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
}

//funcion principal
function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }


    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        //mostrar el primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
        clickAudio.play();

        //deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;

        //deshabilitar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //encerar contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            aciertaAudio.play();
            if(aciertos == 8){
                gamaAudio.play();
                clearInterval(tiempoRegresivoId)
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🙃`;
                mostrarTiempo.innerHTML = `Fantastico! 🥳 solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎`;
            }

        }else{
            //mostrar momentariamente valores y volver a tapar
            fallaAudio.play();
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },900)
        }
    }
}