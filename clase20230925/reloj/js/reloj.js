let dia;

function actualizadorHora() {

    const horaCompleta = document.getElementById("time");
    const fechaCompleta = document.getElementById("day");
    setInterval(function () {
        dia = new Date;
        let hora = dia.getHours();
        let minutos = dia.getMinutes();
        let segundos = dia.getSeconds();
        let fecha = dia.toLocaleDateString()

        mostrarTiempo(horaCompleta, hora, minutos, segundos);
        mostrarFecha(fechaCompleta, fecha);
    }, 1000)
}

function formatearHora(h, m, s) {
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
}

function mostrarTiempo(hc, h, m, s) {
    const tiempo = formatearHora(h, m, s);
    hc.textContent = tiempo;
}

function mostrarFecha(fc, f) {
    fc.textContent = `${f}`;
}

actualizadorHora();

