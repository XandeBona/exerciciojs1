function salvarTexto() {
    const inputTexto = document.getElementById("input_texto");
    const spanTexto = document.getElementById("span_texto");
    spanTexto.innerText = inputTexto.value;
}

function configurarEventos() {
    const botaoEnviar = document.getElementById("botao_enviar");
    botaoEnviar.addEventListener("click", salvarTexto);
}

window.addEventListener("load", configurarEventos);