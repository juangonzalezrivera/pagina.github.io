function showGame() {
    var gameContainer = document.getElementById("game-container");
    gameContainer.style.display = "block";
   
}
let jugadorPuntaje = 0;
let computadoraPuntaje = 0;


function obtenerEleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}


function determinarResultado(eleccionJugador, eleccionComputadora) {
    mostrarSeleccion('jugador', eleccionJugador);
    mostrarSeleccion('computadora', eleccionComputadora);

    if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        jugadorPuntaje++;
        document.getElementById('jugador-puntaje').textContent = jugadorPuntaje;
        document.querySelector('.resultado p').textContent = '¡Ganaste!';
    } else if (eleccionJugador === eleccionComputadora) {
        document.querySelector('.resultado p').textContent = '¡Empate!';
    } else {
        computadoraPuntaje++;
        document.getElementById('computadora-puntaje').textContent = computadoraPuntaje;
        document.querySelector('.resultado p').textContent = '¡Perdiste!';
    }
}


function mostrarSeleccion(quien, seleccion) {
    const label = quien === 'jugador' ? 'Jugador' : 'PC';
    const elemento = quien === 'jugador' ? document.getElementById('jugador-seleccion') : document.getElementById('computadora-seleccion');
    elemento.textContent = `${label}: ${seleccion.charAt(0).toUpperCase() + seleccion.slice(1)}`;
}


function jugar(eleccionJugador) {
    const eleccionComputadora = obtenerEleccionComputadora();
    determinarResultado(eleccionJugador, eleccionComputadora);
}
