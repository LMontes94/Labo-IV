function detener() {
    clearInterval(intervalo);
}

function agregarTexto() {
    const resultado = document.getElementById("resultado");
    const hoy = new Date();
    resultado.innerHTML += `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}<br />`;
}

let intervalo = setInterval(agregarTexto, 1000);