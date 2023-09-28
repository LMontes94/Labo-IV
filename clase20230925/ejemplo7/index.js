/*let index = 0;

function actualizarSpan() {
    if (index < 10) {
        document.getElementById("resultado").innerHTML += `${index}<br />`;
        index++;
    } else {
        clearInterval(intervalo);
    }
}


let intervalo = setInterval(actualizarSpan, 2000);*/
let seg = 0;
let min = 0;
let hora = 0;

function actualizarTiempo() {
    document.getElementById("resultado").innerHTML = `${hora}:${min}:${seg}`;

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

let intervalo = setInterval(actualizarTiempo, 1000);