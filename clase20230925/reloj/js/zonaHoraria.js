
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
    const dia = new Date();
    const hora = dia.toLocaleTimeString(ciudad.idiomaRegion, { timeZone: ciudad.zonaHoraria });
    return hora;
}

function obtenerFecha(ciudad) {
    const dia = new Date(); 
    const fecha = dia.toLocaleDateString(ciudad.idiomaRegion, { timeZone: ciudad.zonaHoraria });
    return fecha;
}

function mostrarHoras() {
    ciudades.forEach((ciudad, indice) => {
        const hora = obtenerHora(ciudad);
        const fecha = obtenerFecha(ciudad);
        const elementoHora = document.getElementById(`time-${indice}`);
        const elementoDia = document.getElementById(`day-${indice}`);
    
        mostrarTiempo(elementoHora, hora);
        mostrarFecha(elementoDia, fecha)
    })
}

function mostrarTiempo(hc, h) {
    hc.textContent = h;
}

function mostrarFecha(fc, f) {
    fc.textContent = f;
}

setInterval(mostrarHoras, 1000);