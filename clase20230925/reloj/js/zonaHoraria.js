let dia;
const ciudades = [{
    nombre: 'Buenos Aires',
    zonaHoraria: 'America/Argentina/Buenos_Aires',
    idiomaRegion: 'es-AR'
}, {
    nombre: 'Nueva York',
    zonaHoraria: 'America/New_York',
    idiomaRegion: 'en-US'
},
{
    nombre: 'Londres',
    zonaHoraria: 'Europe/London',
    idiomaRegion: 'en-GB'
},
{
    nombre: 'Hong Kong',
    zonaHoraria: 'Asia/Hong_Kong',
    idiomaRegion: 'zh-HK'
}]

function obtenerHora(ciudad) {
    dia = new Date();
    const hora = dia.toLocaleTimeString(ciudad.idiomaRegion, { timeZone: ciudad.zonaHoraria });
    return hora;
}

function mostrarHoras() {
    ciudades.forEach((ciudad, indice) => {
        const hora = obtenerHora(ciudad)
        const elementoHora = document.getElementById(`time-${indice}`);
        const elemetoDia = document.getElementById(`day-${indice}`);
        mostrarTiempo(elementoHora,hora);
        mostrarFecha(elemetoDia,dia)
    })
}

function mostrarTiempo(hc, h) {
    hc.textContent = h;
}

function mostrarFecha(fc, f) {
    let fecha = f.toLocaleDateString()
    fc.textContent = fecha;
}

setInterval(mostrarHoras,1000);