function alterarCor(cor) {
    console.log("Cor alterada");
    const divCorAlterar = document.getElementById("cor_div");
    divCorAlterar.style.backgroundColor = "red";
}

function gerenciarEventos() {
    console.log("Pagina carregada")
    const botaoEnviar = document.getElementById("botao_enviar");
    botaoEnviar.addEventListener("click", alterarCor);
}

window.addEventListener("load", gerenciarEventos);