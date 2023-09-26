function consoleLogTimeout() {
    console.log("Timeout.");
}

console.log("Inicio");

setTimeout(consoleLogTimeout, 3000);

console.log("Fin");