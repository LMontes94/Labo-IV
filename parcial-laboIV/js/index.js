let datosHistoria = {
    personaje: "",
    objetoAmigo: "",
    objetoMisterioso: "",
    objeto: "",
    hogar: "",
    terreno: ""
}

function agregarDatos() {

    datosHistoria["personaje"] = obtenerNombreProtagonista();
    datosHistoria["objetoAmigo"] = obtenerNombreAmigo();
    datosHistoria["objetoMisterioso"] = obtenerNombreObjetoMisterioso();
    datosHistoria["objeto"] = obtenerObjeto();
    datosHistoria["hogar"] = obtenerHogar();
    datosHistoria["terreno"] = obtenerTerreno();
    limpiarInput();
    mostrarBotonGenerar();
    localStorage.setItem("datosHistoria", JSON.stringify(datosHistoria));
    return datosHistoria
}

function obtenerNombreProtagonista() {
    const protagonista = document.getElementById("personaje").value;
    return protagonista;
}

function obtenerNombreAmigo() {
    const amigo = document.getElementById("nombre-amigo").value;
    return amigo;
}

function obtenerNombreObjetoMisterioso() {
    const objetoMisterioso = document.getElementById("nombre-misterioso").value;
    return objetoMisterioso;
}

function obtenerObjeto() {
    let objeto = document.getElementById("objetos");
    let seleccionado = objeto.options[objeto.selectedIndex].text;
    return seleccionado;
}

function obtenerHogar() {
    const hogar = document.getElementById("hogar").value;
    return hogar
}

function obtenerTerreno() {
    let terreno = document.getElementById("territorios");
    let seleccionado = terreno.options[terreno.selectedIndex].text;
    return seleccionado;
}

function limpiarInput() {
    document.getElementById("personaje").value = "";
    document.getElementById("nombre-amigo").value = "";
    document.getElementById("nombre-misterioso").value = "";
    document.getElementById("hogar").value = "";
}

function mostrarIntroduccion() {
    let datos = JSON.parse(localStorage.getItem("datosHistoria"));
    let introduccion = introduccionHistoria(datos);
    document.getElementById("introduccion").innerHTML = introduccion;
    esconderBotonInicio();
    mostrarBotonSiguiente();
}

function mostrarNudo() {
    let datos = JSON.parse(localStorage.getItem("datosHistoria"));
    let nudo = nudoHistoria(datos);
    document.getElementById("nudo").innerHTML = nudo;
    esconderBotonNudo();
    mostrarBotonSiguiente();
}

function mostrarFinal() {
    let datos = JSON.parse(localStorage.getItem("datosHistoria"));
    let final = conclusionHistoria(datos);
    document.getElementById("final").innerHTML = final;
    esconderBotonFinal();
    monstrarBotonVolver();
}

function introduccionHistoria(datosHistoria) {
    let primerParrafo = `<p>En un reino lejano, en la Tecnicatura de Sistemas de la prestigiosa universidad UTN, vivía <strong>${datosHistoria["personaje"]}</strong>, un estudiante con una habilidad única: podía comunicarse con objetos.
    En su encantador hogar en <strong>${datosHistoria["hogar"]}</strong>, donde las burbujas nunca explotaban y la gente caminaba de cabeza, <strong>${datosHistoria["personaje"]}</strong> compartía risas y charlas con <strong>${datosHistoria["objetoAmigo"]}</strong>, su amigo objeto peculiar.</p>`
    return primerParrafo;
}

function nudoHistoria(datosHistoria) {
    let nudoHistoria = `<p>Un día, mientras <strong>${datosHistoria["personaje"]}</strong> exploraba los terrenos de <strong>${datosHistoria["terreno"]}</strong>, se encontró con <strong>${datosHistoria["objetoMisterioso"]}</strong>, un objeto encantado
    con la voz melodiosa de un ruiseñor.<strong>${datosHistoria["objetoMisterioso"]}</strong> buscaba desesperadamente a su amiga <strong>${datosHistoria["objetoAmigo"]}</strong>, una encantadora
    <strong>${datosHistoria["objeto"]}</strong> cantarina que había desaparecido misteriosamente.

    Guiados por la profecía de la Tecnicatura de Sistemas, <strong>${datosHistoria["personaje"]}</strong> y <strong>${datosHistoria["objetoMisterioso"]}</strong> emprendieron una odisea por
    <strong>${datosHistoria["hogar"]}</strong>, enfrentándose a desafíos mágicos y criaturas encantadas. Sin embargo, descubrieron que un mago
    malvado, conocido por sus confusos enunciados y hechizos torpes, había secuestrado a <strong>${datosHistoria["objetoAmigo"]}</strong>.
    El mago, con su bufanda de programas complicados y su varita de algoritmos erróneos, planeaba usar el
    conocimiento robado de <strong>${datosHistoria["objetoAmigo"]}</strong> para sus oscuros propósitos académicos. Pero <strong>${datosHistoria["personaje"]}</strong>, armado con la
    valentía y la magia de la programación, se enfrentó al torpe villano.</p>`

    return nudoHistoria;
}

function conclusionHistoria(datosHistoria) {
    let finalHistoria = `<p>Con ingenio y destreza, <strong>${datosHistoria["personaje"]}</strong> desarmó los hechizos del Mago y liberó a <strong>${datosHistoria["objetoAmigo"]}</strong>. La Tecnicatura de Sistemas celebró la derrota del villano incompetente,
     y <strong>${datosHistoria["personaje"]}</strong> , <strong>${datosHistoria["objetoAmigo"]}</strong>, y <strong>${datosHistoria["objetoMisterioso"]}</strong> regresaron a <strong>${datosHistoria["hogar"]}</strong>, donde las burbujas explotaron de alegría y la gente caminó de cabeza en honor a la victoria.

    Así,<strong>${datosHistoria["personaje"]}</strong> demostró que incluso en el mundo mágico de la programación, cualquiera puede vencer los desafíos, incluso cuando el villano se llama Diego.</p>`
    return finalHistoria;
}



function mostrarBotonGenerar() {
    document.getElementById("generar").style.display = "block";
}

function mostrarBotonSiguiente() {
    document.getElementById("siguiente").style.display = "block";
}

function monstrarBotonVolver() {
    document.getElementById("volver").style.display = "block";
}

function esconderBotonFinal() {
    document.getElementById("btn-final").style.display = "none";
}

function esconderBotonNudo() {
    document.getElementById("btn-nudo").style.display = "none";
}

function esconderBotonInicio() {
    document.getElementById("btn-inicio").style.display = "none";
}