
function actualizadorHora() {

    const horaCompleta = document.getElementById("time")
    setInterval(function(){
        let fecha = new Date;
        let hora = String(fecha.getHours()).padStart(2, 0);
        let minutos = String(fecha.getMinutes()).padStart(2, 0);
        let segundos = String(fecha.getSeconds()).padStart(2, 0);

        horaCompleta.innerHTML = `${hora}:${minutos}:${segundos}`;
    },1000)
}

actualizadorHora();