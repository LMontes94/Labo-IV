function agregarTexto() {
    document.getElementById("resultado").innerHTML += "Intervalo<br />";
}

function inicio() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "Inicio<br />";
    
    setInterval(agregarTexto, 1000);
    
    resultado.innerHTML += "Fin<br />";
}

inicio();