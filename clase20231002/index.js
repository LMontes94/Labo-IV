let contar = 0;

function contador() {
    contar++;
    document.getElementById("resultado").textContent = contar;
}

function reset() {
    document.getElementById("resultado").textContent = 0;
}

function claro() {
    document.getElementById("modo").style.backgroundColor = "#C4C8D3";
}

function oscuro() {
    document.getElementById("modo").style.backgroundColor = "#1e0a4d"
}
let estado = 0;
function cambioEstado() {

    const rojo = document.getElementById("red");
    const amarillo = document.getElementById("yellow");
    const verde = document.getElementById("green");


}

