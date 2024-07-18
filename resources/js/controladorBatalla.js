// Con esta funcion elijo aleatoriamente cual de los dos jugadores empieza
function elegirQuienEmpieza(){
    if((Math.random() <= 0.5)){
        // Arranca Player1
        console.log("Player 1")
        BotonesPlayer1.forEach(function (element) {
            element.classList.toggle("desactivado")
        })
        indicador.innerText = `${player1.nombre} arranca! Elige un ataque!`
    }else{
        // Arranca Player2
        console.log("Player 2")
        BotonesPlayer2.forEach(function (element) {
            element.classList.toggle("desactivado")
        })
        indicador.innerText = `${player2.nombre} arranca! Elige un ataque!`
    }
}

function jugadorAtaca(player, ataque, contrincante){
    let valorAtaque = 0

    if(ataque === 1){
        valorAtaque = player.ataque1.usar(player.poder)
    }else if (ataque === 2){
        valorAtaque = player.ataque2.usar(player.poder)
    }

    contrincante.vida -= valorAtaque
    actualizarVista(valorAtaque, player, contrincante)
}

botonAtaque1Player1.addEventListener("click", () => {
    jugadorAtaca(player1, 1, player2)
})
botonAtaque2Player1.addEventListener("click", () => {
    jugadorAtaca(player1, 2, player2)
})
botonAtaque1Player2.addEventListener("click", () => {
    jugadorAtaca(player2, 1, player1)
})
botonAtaque2Player2.addEventListener("click", () => {
    jugadorAtaca(player2, 2, player1)
})