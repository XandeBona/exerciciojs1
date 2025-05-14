function enviarAlerta() {
    alert("Olá");
}

function configurarEventos() {
    console.log("Página Carregada")
    const botaoOla = document.getElementById("botao_ola");
    botaoOla.addEventListener("click", enviarAlerta);
}


window.addEventListener("load", configurarEventos);