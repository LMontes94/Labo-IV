let seg = 0;
let min = 0;
let hora = 0;
let intervalo;
let contadorVueltas = 0;
let tiempoActual = formatearHora(0, 0, 0);
let tiempoUltimo = formatearHora(0, 0, 0);

function actualizarTiempo() {

    mostrarTiempo();
    if (seg < 59) {
        seg++;
    } else if (min < 59) {
        seg = 0;
        min++;
    } else if (hora < 23) {
        min = 0;
        hora++;
    } else {
        seg = 0;
        min = 0;
        hora = 0;
    }

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
    document.getElementById("pausa").style.display = "block";
    document.getElementById("reset").style.display = "block";
    document.getElementById("registro").style.display = "block";
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

function diferenciaTiempo(horaActual, horaUltima) {
    t1 = new Date();
    t2 = new Date();

    const partesHoraActual = horaActual.split(":");
    const partesHoraUltima = horaUltima.split(":");

    t1.setHours(partesHoraActual[0], partesHoraActual[1], partesHoraActual[2]);
    t2.setHours(partesHoraUltima[0], partesHoraUltima[1], partesHoraUltima[2]);

    const restaFechas = t1 - t2;

    const horas = Math.floor(restaFechas / 3600000);
    const minutos = Math.floor((restaFechas % 3600000) / 60000);
    const segundos = Math.floor((restaFechas % 60000) / 1000);

    return {
        horas, minutos, segundos
    }
}

function registrarTiempo() {
    contadorVueltas++;
    tiempoActual = formatearHora(hora, min, seg);
    let diferenciaTime = diferenciaTiempo(tiempoActual, tiempoUltimo);
    let tiempoDiferencia = formatearHora(diferenciaTime.horas, diferenciaTime.minutos, diferenciaTime.segundos);
    document.getElementById("resultado").innerHTML += `${contadorVueltas}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                       +${tiempoDiferencia}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                       ${tiempoActual}<br>`;
    tiempoUltimo = tiempoActual;
}


