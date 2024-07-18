function actualizarIndicador(texto){
    indicador.classList.toggle("alter")
    indicador.innerText = texto
}

// Con esta funcion desactivo los botones cuando esta atacando el jugador
function desactivarBotones(atacante){
    if(atacante === player1){
        BotonesPlayer1.forEach((element) => {
            element.classList.toggle("desactivado")
        })
    } else if (atacante === player2){
        BotonesPlayer2.forEach((element) => {
            element.classList.toggle("desactivado")
        })
    }
}

// Selecciono el elemento del DOM que representa al personaje que es atacado
function determinarDOMdePersonajeAtacado(atacado){
    if(atacado === player2){
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    } else if (atacado === player1){
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    }
}

// Ahora selecciono el elemento del DOM que representa el personaje atacante
function determinarDOMdeAtacante(atacante){
    if(atacante === player1){
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    }else if (atacante === player2){
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    }
}


// Ahora voy con el mecanismo de batalla
function actualizarVista(valorAtaque, atacante, atacado){
    desactivarBotones(atacante)
    personajeAtacadoDOM = determinarDOMdePersonajeAtacado(atacado)
    personajeAtacanteDOM = determinarDOMdeAtacante(atacante)

    setTimeout(() => {
        vidaPlayer1.innerText = player1.vida
        vidaPlayer2.innerText = player2.vida

        if(valorAtaque !== 0){
            personajeAtacadoDOM.classList.toggle("herido")
            actualizarIndicador(`${atacado.nombre} perdio ${valorAtaque} de vida!`)
        }else{
            actualizarIndicador(`${atacante.nombre} erro! ${atacado.nombre} no recibio damage.`)
        }
    }, 500)

    // Si ambos siguen con vida
    if(atacado.vida > 0 && atacante.vida > 0) {
        setTimeout(() => {
            // Activo los botones del contrincante
            desactivarBotones(atacado)
            // Saco la class "herido" del atacado
            personajeAtacadoDOM.classList.toggle("herido")
            actualizarIndicador(`Turno de ${atacado.nombre}`)
            turnos += 1
        }, 2000);
    } else {//Alguno de los dos pierde
        if(atacado.vida <= 0 && atacante.vida <= 0){
            setTimeout(() => {
                empate(player1, player2, personajeAtacanteDOM, personajeAtacadoDOM)
            }, 2000)
        }else if (atacado.vida <= 0){
            setTimeout(() => {
                mostrarGanador(atacante, personajeAtacadoDOM)
            }, 2000)
        }else if (atacante.vida <= 0){
            setTimeout(() => {
                mostrarGanador(atacado, personajeAtacanteDOM)
            }, 2000);
        }
    }

// Funcion para mostrar al vencedor del juego
function mostrarGanador(ganador, perdedor){
    perdedor.classList.toggle("derrotado")
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria")
    BotonesPlayer1.forEach((element) =>{
        element.style.visibility = "hidden"
    });
    BotonesPlayer2.forEach((element) =>{
        element.style.visibility = "hidden"
    });
    actualizarIndicador(`${ganador.nombre} GANA!`)
    document.getElementById("ventanaFinal").classList.toggle("visible")
}

// Si hay un empate
function empate(player1, player2, DOM1, DOM2){
    DOM1.classList.toggle("derrotado")
    DOM2.classList.toggle("derrotado")
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria")
    BotonesPlayer1.forEach((element) => {
        element.style.visibility = "hidden"
    });
    BotonesPlayer2.forEach((element) => {
        element.style.visibility = "hidden"
    });
    actualizarIndicador(`${player1.nombre} y ${player2.nombre} cayeron! Los dos campeones pierden.`)
    document.getElementById("ventanaFinal").classList.toggle("visible")
}









}
