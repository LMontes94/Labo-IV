let seg = 0;
let min = 0;
let hora = 0;
let intervalo;

function actualizarTimer() {
    seg = document.getElementById("inputSeg").value;
    min = document.getElementById("inputMin").value;
    hora = document.getElementById("inputHora").value;

    console.log(hora);
    console.log(min);
    console.log(seg);

}

function formatearHora(h, m, s) {
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
}

function mostrarTiempo() {
    const tiempo = formatearHora(hora, min, seg);
    document.getElementById("time").textContent = tiempo;
}

function inicio() {
    if (!intervalo) {
        intervalo = setInterval(actualizarTiempo, 1000);
    }
}

function pausa() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
}

function resetear() {
    pausa();
    seg = 0;
    min = 0;
    hora = 0;
    mostrarTiempo();
}