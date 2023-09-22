import { Cuadrado, figuras } from './clases/figuras';

function calcular() {
    const figura = document.getElementById("figura").value
    switch (figura) {
        case 'cuadrado':

            break;
        case 'circulo':
            break;
        case 'rectangulo':
            break;
        case 'cubo':
            break;
        case 'esfera':
            break;
        case 'triangulo':
            break;
        default:
            break;
    }
    const lado = document.getElementById("lado").value;
    const perimetro = lado * 4;
    const area = lado * lado;

    // Formatear resultado 
    let resultado = "<ul>\n";
    resultado += `<li> Perimetro: ${perimetro}</li>\n`;
    resultado += `<li> Area: ${area}</li>\n`;
    resultado += "</ul>";

    // mostrar resultado 
    document.getElementById("resultado").innerHTML = resultado;
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
//1.- A partir del lado de un cuadrado, calcular su área y su perímetro.
/*
let lado = parseInt(prompt("Ingrese un lado de un cuadrado"));
let perimetro = lado * 4;
let area = lado * lado;

console.log("area  = " + area);
console.log("perimetro = "+ perimetro);

//2.- A partir del radio de un círculo, calcular su área y su perímetro.

let radio = parseInt(prompt("Ingrese un lado de un circulo: "));
let perimetroCir = 2*PI*radio;
let areaCir = PI*(radio*radio);

console.log("area  = " + areaCir);
console.log("perimetro = "+ perimetroCir);

//3.- A partir de los lados de un rectángulo, calcular su área y su perímetro.

let lado1 = parseInt(prompt("Ingrese un lado de un rectangulo"));
let lado2 = parseInt(prompt("Ingrese un lado de un rectangulo"));
let perimetroRec = lado1 * 2 + lado2 * 2;
let areaRec = lado1 * lado2;

console.log("area  = " + areaRec);
console.log("perimetro = "+ perimetroRec);

//4.- A partir del lado de un cubo, calcular su área, su perímetro y su volúmen.

let ladoA = parseInt(prompt("Ingrese un lado de un cubo"));
let perimetroCubo = ladoA * 12;
let areaCubo = (ladoA * ladoA) * 6;
let volumenCubo = ladoA * ladoA * ladoA 

console.log("area  = " + areaCubo);
console.log("perimetro = "+ perimetroCubo);
console.log("volumen = " + volumenCubo);

//5.- A partir del radio de una esfera, calcular su área, su perímetro y su volúmen.
let radioEsfera = parseInt(prompt("Ingrese el radio de la esfera"));
let areaEsfera = 4*PI*(radioEsfera * radioEsfera);
let volumenEsfera =  4/3 * PI * (radioEsfera * radioEsfera *radioEsfera);

console.log("area  = " + areaEsfera);
console.log("volumen = " + volumenEsfera);

//6.- A partir de la base y la altura de un triángulo, calcular su área y su perímetro.
let base = parseInt(prompt("Ingrese la base del triangulo"));
let altura = parseInt(prompt("Ingrese la altura del triangulo"));
lado = parseInt(prompt("Ingrese el lado restante del triangulo"));

area = (base*altura)/2;
perimetro = base + altura + lado;

console.log("area  = " + area);
console.log("volumen = " + perimetro);
*/