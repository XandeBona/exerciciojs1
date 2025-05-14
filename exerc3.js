function alterarParagrafo(){
    const inputTexto = document.getElementById("input_texto");
    const pTexto = document.getElementById("p_texto");
    pTexto.innerText = inputTexto.value;
}

function gerenciarEventos() {
    const botaoEnviar = document.getElementById("botao_enviar");
    botaoEnviar = addEventListener("click", alterarParagrafo);
}

window.addEventListener("load", gerenciarEventos);
