//import { Cuadrado, figuras } from './clases/figuras';

function calcular(valorFigura) {

    let perimetro;
    let area;
    let lado, volumen, radio, base, altura;
    switch (valorFigura) {
        case 1:
            lado = document.getElementById("lado-cuadrado").value;
            perimetro = lado * 4;
            area = lado * lado;
            break;
        case 2:
            radio = document.getElementById("radio-circulo").value;
            console.log(radio)
            perimetro = 2 * Math.PI * radio;
            console.log(perimetro)
            area = Math.PI * (radio * radio);
            break;
        case 3:
            base = document.getElementById("base-rectangulo").value;
            altura = document.getElementById("altura-rectangulo").value;
            perimetro = base * 2 + altura * 2;
            area = base * altura;
            break;
        case 4:
            lado = document.getElementById("lado-cubo").value;
            area = (lado ** 2) * 6;
            volumen = lado ** 3;
            break;
        case 5:
            radio = document.getElementById("radio-esfera").value
            area = 4 * Math.PI * (radio * radio);
            volumen = 4 / 3 * Math.PI * (radio ** 3);
            break;
        case 6:
            base = parseInt(document.getElementById("base-triangulo").value);
            altura = parseInt(document.getElementById("altura-triangulo").value);
            const hipotenusa = Math.sqrt(altura * altura + base * base);
            perimetro = altura + base + hipotenusa;
            area = (altura * base) / 2;
            break;
        default:
            break;
    }
    let resultado = 0;
    // Formatear resultado 
    if (valorFigura === 4 || valorFigura === 5) {
        resultado = "<ul>\n";
        resultado += `<li> Volumen: ${volumen}</li>\n`;
        resultado += `<li> Area: ${area}</li>\n`;
        resultado += "</ul>";
    } else {
        resultado = "<ul>\n";
        resultado += `<li> Perimetro: ${perimetro}</li>\n`;
        resultado += `<li> Area: ${area}</li>\n`;
        resultado += "</ul>";
    }


    // mostrar resultado 
    document.getElementById(`resultado${valorFigura}`).innerHTML = resultado;
}

function siguiente(numActual) {
    console.log(numActual);
    document.getElementById(`ejercicio${numActual}`).style.display = "none";
    const numSiguiente = numActual + 1;
    document.getElementById(`ejercicio${numSiguiente}`).style.display = "block";
}

function anterior(numActual) {
    document.getElementById(`ejercicio${numActual}`).style.display = "none";
    const numAnterior = numActual - 1;
    document.getElementById(`ejercicio${numAnterior}`).style.display = "block";
}

function celsiusToFahrenheit(nroEjercicio) {
    const celsius = document.getElementById("grados-celsius").value;
    const fahrenheit = (celsius * 9 / 5) + 32;
    let resultado = "<ul>\n";
    resultado += `<li> Fahrenheit: ${fahrenheit}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
}

function celsiusToKelvin(nroEjercicio) {
    const celsius = parseFloat(document.getElementById("grados-c").value);
    const kelvin = celsius + 273.15;

    let resultado = "<ul>\n";
    resultado += `<li> Kelvin: ${kelvin}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
}

function kelvinToFahrenheit(nroEjercicio) {
    const kelvin = parseFloat(document.getElementById("grados-k").value)
    const celsius = kelvin - 273.15;

    // Paso 2: Convertir Celsius a Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    let resultado = "<ul>\n";
    resultado += `<li> Fahrenheit: ${fahrenheit}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
    return fahrenheit;
}

function kelvinToCelsius(nroEjercicio) {
    const kelvin = parseFloat(document.getElementById("grados-kelvin").value)
    const celsius = kelvin - 273.15;

    let resultado = "<ul>\n";
    resultado += `<li> Celsius: ${celsius}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
    return celsius;
}

function fahrenheitToCelsius(nroEjercicio) {
    const fahrenheit = parseFloat(document.getElementById("grados-f").value)
    const celsius = (fahrenheit - 32) * (5 / 9);
    let resultado = "<ul>\n";
    resultado += `<li> Celsius: ${celsius}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
    return celsius;
}

function fahrenheitToKelvin(nroEjercicio) {
    const fahrenheit = parseFloat(document.getElementById("grados-fahrenheit").value)
    const celsius = (fahrenheit - 32) * (5 / 9);

    const kelvin = celsius + 273.15;
    let resultado = "<ul>\n";
    resultado += `<li> Kelvin: ${kelvin}</li>\n`;
    resultado += "</ul>";

    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
    return kelvin;
}

function formateadorResultado(valor1, valor2) {
    let resultado = "<ul>\n";
    resultado += `<li> ${valor1}: ${valor1}</li>\n`;
    resultado += `<li> ${valor2}: ${valor2}</li>\n`;
    resultado += "</ul>";
    return resultado;
}

function mostrarFactorial(nroEjercicio) {

    const nroAFactorizar = parseFloat(document.getElementById("factorial").value);
    const factorial = calcularFactorial(nroAFactorizar);

    let resultado = "<ul>\n";
    resultado += `<li> Factorial de ${nroAFactorizar}! = ${factorial}</li>\n`;
    resultado += "</ul>";
    document.getElementById(`resultado${nroEjercicio}`).innerHTML = resultado;
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

const nroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
function adivinarNumeroAleatorio() {

    const numeroIngresado = parseFloat(document.getElementById("numero").value);
    if (numeroIngresado < 1 || numeroIngresado > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
    }
    intentos++;
    if (numeroIngresado === nroAleatorio) {
        alert(`¡Felicitaciones! Adivinaste el número ${nroAleatorio} en ${intentos} intentos.`);
        adivinado = true;
    } else if (numeroIngresado < nroAleatorio) {
        alert("El número es más alto. Sigue intentando.");
    } else {
        alert("El número es más bajo. Sigue intentando.");
    }
}