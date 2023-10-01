let seg = 0;
let min = 0;
let hora = 0;
let segPausada = 0, minPausada = 0, horaPausada = 0;
let pausado = false;
let intervalo;

function actualizarTimer() {
    seg = document.getElementById("inputSeg").value;
    min = document.getElementById("inputMin").value;
    hora = document.getElementById("inputHora").value;
}

function reverso() {
    intervalo = setInterval(function () {
        if (hora == 0 && min == 0 && seg == 0) {
            resetear();
            const mensaje = "Finalizo la cuenta regresiva..... ";
            alert(mensaje);
        } else {
            seg--;
            if (seg < 0) {
                seg = 59
                min--;
            } else if (min < 0) {
                min = 59;
                hora--;
            }
            mostrarTiempo();
        }
    }, 1000);
}

function inicio() {
    actualizarTimer();
    if (!verificarInputVacios() && !verificarTiempo(min) && !verificarTiempo(seg)) {
        reverso();
        document.getElementById("inicio").style.display = "none";
        document.getElementById("pausa").style.display = "block";
        document.getElementById("reset").style.display = "block";
    } else {
        alert("No a ingresado numeros o algun valor no es correspondiente!!");
        resetear();
    }

}

function formatearHora(h, m, s) {
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
}

function mostrarTiempo() {
    const tiempo = formatearHora(hora, min, seg);
    document.getElementById("time").textContent = tiempo;
}

function pausa() {
    clearInterval(intervalo);
    pausado = true;
    segPausada = seg;
    minPausada = min;
    horaPausada = hora;
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("pausa").style.display = "none";
}

function reiniciar() {
    seg = segPausada;
    min = minPausada;
    hora = horaPausada;
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("pausa").style.display = "block";
    reverso();
}

function resetear() {
    pausa(intervalo);
    pausado = false;
    seg = 0;
    min = 0;
    hora = 0;
    mostrarTiempo();
    limpiarInput();
    document.getElementById("inicio").style.display = "block";
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("reset").style.display = "none";
}

function limpiarInput() {
    document.getElementById("inputSeg").value = "";
    document.getElementById("inputMin").value = "";
    document.getElementById("inputHora").value = "";
}

function verificarTiempo(t) {
    return t < 0 || t > 59;
}

function verificarInputVacios() {
    const inputSeg = document.getElementById("inputSeg").value;
    const inputMin = document.getElementById("inputMin").value;
    const inputHora = document.getElementById("inputHora").value;

    return inputSeg == "" && inputMin == "" && inputHora == "";
}
