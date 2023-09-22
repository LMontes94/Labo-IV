// figuras.js
import { IArea, IPerimetro, IVolumen } from './calculos.js';

class FiguraGeometrica {
    #nombre;
    constructor() {
        if (new.target === FiguraGeometrica) {
            throw new Error('No puedes instanciar una figura abstracta.');
        }
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(n) {
        this.#nombre = n;
    }
}

export class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    setNombre() {
        this.setNombre("Cuadrado");
    }

    calcularArea() {
        return this.lado ** 2;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}

export class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    setNombre() {
        this.setNombre("Circulo");
    }
    calcularArea() {
        return Math.PI * this.radio ** 2;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

export class Cubo extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    setNombre() {
        this.setNombre("Cubo");
    }
    calcularVolumen() {
        return this.lado ** 3;
    }
    calcularArea() {
        return 6 * this.lado ** 2;
    }

}

export class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
        this.setNombre("Rectangulo");
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}


// Clase Triangulo
export class Triangulo extends FiguraGeometrica {
    constructor(cateto1, cateto2) {
        super();
        this.cateto1 = cateto1;
        this.cateto2 = cateto2;
        this.hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
        this.setNombre("Triangulo Rectangulo");
    }

    calcularArea() {
        return (this.cateto1 * this.cateto2) / 2;
    }

    calcularPerimetro() {
        return this.cateto1 + this.cateto2 + this.hipotenusa;
    }
}

