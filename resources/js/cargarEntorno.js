let turnos = 0

// Cargo en un array los fondos de la arena
let fondosBatalla = [
    "resources\img\background\pantalla1.png",
    "resources\img\background\pantalla2.png",
    "resources\img\background\pantalla3.png",
    "resources\img\background\pantalla4.png",
]

// Cargo los botones para la pelea

const botonAtaque1Player1 = document.querySelectorAll('#player1 .button')[0];
const botonAtaque2Player1 = document.querySelectorAll('#player1 .button')[1];
const botonAtaque1Player2 = document.querySelectorAll('#player2 .button')[0];
const botonAtaque2Player2 = document.querySelectorAll('#player2 .button')[1];

const BotonesPlayer1 = document.querySelectorAll('#player1 .botones')
const BotonesPlayer2 = document.querySelectorAll('#player2 .botones')

BotonesPlayer1.forEach(function (element){
    element.classList.toggle("desactivado")
})
BotonesPlayer2.forEach(function (element){
    element.classList.toggle("desactivado")
})

// Cargo el indicador de mensajes
const indicador = document.getElementById("indicadorMensajes")

// Cargo elementos del DOM

const nombrePlayer1 = document.getElementById("nombrePlayer1")
const vidaPlayer1 = document.getElementById("vidaPlayer1")
const imagenPlayer1 = document.querySelectorAll('#player1 .personaje img')[0];

const nombrePlayer2 = document.getElementById("nombrePlayer2")
const vidaPlayer2 = document.getElementById("vidaPlayer2")
const imagenPlayer2 = document.querySelectorAll('#player2 .personaje img')[0];

const reiniciarPartida = document.getElementById("botonReiniciar")
reiniciarPartida.addEventListener("click", () => {
    window.location.reload()
})

function cargarBatalla(player1, player2){
    // Cargo el nombre + vida de los jugadores y personajes que eligieron
    nombrePlayer1.innerText = player1.nombre
    nombrePlayer2.innerText = player2.nombre

    vidaPlayer1.innerText = player1.vida
    vidaPlayer2.innerText = player2.vida

    // Cargo los ataques del personaje que eligio el Player 1
    const descripcionAtaque1Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[0]
    botonAtaque1Player1.innerText = player1.ataque1.nombre
    descripcionAtaque1Player1.innerText = player1.ataque1.descripcion
    
    const descripcionAtaque2Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[1]
    botonAtaque2Player1.innerText = player1.ataque2.nombre
    descripcionAtaque2Player1.innerText = player1.ataque2.descripcion

    // Cargo los ataques del personaje que eligio el Player 2
    const descripcionAtaque1Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[0];
    botonAtaque1Player2.innerText = player2.ataque1.nombre
    descripcionAtaque1Player2.innerText = player2.ataque1.descripcion

    const descripcionAtaque2Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[1];
    botonAtaque2Player2.innerText = player2.ataque2.nombre
    descripcionAtaque2Player2.innerText = player2.ataque2.descripcion

    // Cargo las imagenes para cada jugador
    imagenPlayer1.src = player1.imagen
    imagenPlayer2.src = player2.imagen


    // Cargo los fondos con un Math random para que cada uno de los cuatro sea elegido al azar
    const fondoElegido = Math.floor(Math.random() * 4);
    fondos[0].style.backgroundImage = `url('${fondosBatalla[fondoElegido]}')`;
    //ASI ES EL ORIGINAL, PRUEBO CON EL NUMERO 4 DE UNA
    //const fondoElegido = Math.floor(Math.random() * (3 - 0 + 1)) + 0




}