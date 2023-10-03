let operador = "";
let num1 = "";
let num2 = "";
let resultado = "";

function seleccionarOperador(o) {
    operador = o;
    resultado = "";
    console.log(operador);
}

function seleccionarNumero(num) {
    if (operador === "") {
        num1 += num;
        resultado = num1;
    } else {
        num2 += num;
        resultado = num2;
    }
    actualizarResultado();
}

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b != 0) {
        return (a / b).toFixed(2);
    } else {
        resultado = "Error al dividir!!"
    }
}

function calcularFactorial(num) {
    const numero1 = parseInt(num);
    let factorial = 1;
    for (let i = 1; i <= numero1; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcularPorcentaje(num) {
    const numero1 = parseFloat(num);
    const porcentaje = (numero1 / 100).toFixed(2);
    return porcentaje;

}

function calcularRaiz(num) {
    const numero1 = parseFloat(num);
    if (numero1 < 0) {
        resultado = "Error: No se puede calcular la raíz de un número negativo";
    }
    const raiz = Math.sqrt(numero1).toFixed(2);
    resultado = raiz;
    return resultado;

}


function calcular() {
    const numero1 = parseInt(num1);
    const numero2 = parseInt(num2);
    resultado = "";
    switch (operador) {
        case "+":
            resultado = sumar(numero1, numero2);
            break;
        case "-":
            resultado = restar(numero1, numero2);
            break;
        case "*":
            resultado = multiplicar(numero1, numero2);
            break;
        case "/":
            resultado = dividir(numero1, numero2);
            break;
        case "!":
            resultado = calcularFactorial(numero1);
            break;
        case "%":
            resultado = calcularPorcentaje(numero1);
            break;
        case "(√)":
            resultado = calcularRaiz(numero1);
            break;
        default:
            break;
    }
    actualizarResultado();
    num1 = resultado.toString();
    num2 = "";
    operador = "";
}

function actualizarResultado() {
    const pantalla = document.getElementById("resultado");
    pantalla.textContent = resultado;
}

function borrarCaracter() {
    if (operador === "") {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
    actualizarResultado();
}
function borrarTodo() {
    operador = "";
    num1 = "";
    num2 = "";
    resultado = "";
    actualizarResultado();
}

document.getElementById("siete").addEventListener("click", () => seleccionarNumero("7"));
document.getElementById("ocho").addEventListener("click", () => seleccionarNumero("8"));
document.getElementById("nueve").addEventListener("click", () => seleccionarNumero("9"));
document.getElementById("dividir").addEventListener("click", () => seleccionarOperador("/"));
document.getElementById("cuatro").addEventListener("click", () => seleccionarNumero("4"));
document.getElementById("cinco").addEventListener("click", () => seleccionarNumero("5"));
document.getElementById("seis").addEventListener("click", () => seleccionarNumero("6"));
document.getElementById("multiplicar").addEventListener("click", () => seleccionarOperador("*"));
document.getElementById("uno").addEventListener("click", () => seleccionarNumero("1"));
document.getElementById("dos").addEventListener("click", () => seleccionarNumero("2"));
document.getElementById("tres").addEventListener("click", () => seleccionarNumero("3"));
document.getElementById("resta").addEventListener("click", () => seleccionarOperador("-"));
document.getElementById("cero").addEventListener("click", () => seleccionarNumero("0"));
document.getElementById("suma").addEventListener("click", () => seleccionarOperador("+"));
document.getElementById("factorial").addEventListener("click", () => seleccionarOperador("!"));
document.getElementById("porcentaje").addEventListener("click", () => seleccionarOperador("%"));
document.getElementById("raiz").addEventListener("click", () => seleccionarOperador("(√)"));
document.getElementById("borrar-uno").addEventListener("click", borrarCaracter);
document.getElementById("igual").addEventListener("click", calcular);
document.getElementById("borrar").addEventListener("click", borrarTodo);