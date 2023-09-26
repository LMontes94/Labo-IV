let index = 0;

function actualizarSpan() {
    if (index < 10) {
        document.getElementById("resultado").innerHTML += `${index}<br />`;
        index++;
    } else {
        clearInterval(intervalo);
    }
}


let intervalo = setInterval(actualizarSpan, 2000);