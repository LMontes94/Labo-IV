let seg = 0;
let min = 0;
let hora = 0;
let segPausada = 0, minPausada = 0, horaPausada = 0;
let pausado = false;
let intervalo;
let descanso = false;
let time = 0;

function actualizarTimer() {
    time = document.getElementById("time").textContent;
    let componentesHora = time.split(":");
    hora = parseInt(componentesHora[0]);
    min = parseInt(componentesHora[1]);
    seg = parseInt(componentesHora[2]);
}

function reverso() {
    intervalo = setInterval(function () {
        if (hora == 0 && min == 0 && seg == 0) {
            resetear();
            const mensaje = "Finalizó";
            alert(mensaje);
            if (!descanso) {
                document.getElementById("head").textContent = "Descanso";
                document.getElementById("time").textContent = "00 : 05 : 00";
                descanso = true;
            }

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
    console.log(time);
    if (!verificarTiempo(min) && !verificarTiempo(seg)) {
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
    document.getElementById("inicio").style.display = "block";
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("reset").style.display = "none";
}

function verificarTiempo(t) {
    return t < 0 || t > 59;
}

