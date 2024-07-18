// Actualiza el indicador de mensajes
function actualizarIndicador(texto){
    indicador.classList.toggle('alter')
    indicador.innerText = texto
}

// Con esta funcion desactivo los botones cuando esta atacando el jugador
function desactivarBotones()