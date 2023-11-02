
function obtenerPais() {
    const countryInput = document.getElementById("country");
    return countryInput.value;
}

function obtenerDatosPais(countryName) {
    const username = "usrxdlax"; // Debes registrarte en Geonames para obtener un usuario y usarlo en la API

    const geonamesUrl = `http://api.geonames.org/countryInfoJSON?name=${countryName}&username=${username}`;

    return fetch(geonamesUrl)
        .then(response => response.json())
        .then(data => {
            if (data.geonames && data.geonames.length > 0) {
                // Filtra el país correcto por nombre
                const countryInfo = data.geonames.find(country => country.countryName === countryName);

                if (countryInfo) {
                    return countryInfo;
                } else {
                    throw new Error("No se encontraron resultados para el país especificado.");
                }
            } else {
                throw new Error("No se encontraron resultados para el país especificado.");
            }
        })
        .catch(error => {
            throw new Error("Error en la solicitud a la API de Geonames: " + error);
        });
}

function obtenerLatitud(countryInfo) {
    if (countryInfo) {
        const latitud = parseFloat(countryInfo.south);
        console.log("Latitud:", latitud);
    } else {
        console.error("No se proporcionaron datos de país.");
    }
}

function obtenerLongitud(countryInfo) {
    if (countryInfo) {
        const longitud = parseFloat(countryInfo.west);
        console.log("Longitud:", longitud);
    } else {
        console.error("No se proporcionaron datos de país.");
    }
}

function obtenerContinenteAmericano() {
    return "America";
}

function reemplazarEspaciosEnCapital(countryInfo) {
    if (countryInfo.capital) {
        countryInfo.capital = countryInfo.capital.replace(/\s/g, "_");
    }
    return countryInfo;
}

function quitarTildes(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function obtenerFechaDesdeDatetime(datetimeString) {
    const fechaHora = new Date(datetimeString);
    const dia = fechaHora.getDate();
    const mes = fechaHora.getMonth() + 1; // Sumar 1 para obtener el mes real
    const anio = fechaHora.getFullYear();
    return { dia, mes, anio };
}

function formatearHora(hora, minutos, segundos) {
    return `${hora.toString().padStart(2, '0')} : ${minutos.toString().padStart(2, '0')} : ${segundos.toString().padStart(2, '0')}`;
}

function formatearFecha(dia, mes, anio) {
    return `${dia.toString().padStart(2, '0')} / ${mes.toString().padStart(2, '0')} / ${anio}`;
}
function mostrarFecha(fechaCompleta) {
    return formatearFecha(fechaCompleta["dia"], fechaCompleta["mes"], fechaCompleta["anio"])
}

function limpiarInput() {
    document.getElementById("country").value = "";
}

function updateClock(continentName, countryName, capital) {
    const clockElement = document.getElementById("clock");
    const day = document.getElementById("day");

    try {
        let url;
        if (countryName == "Argentina") {
            url = `https://worldtimeapi.org/api/timezone/${continentName}/${countryName}/${capital}`;
        } else {
            url = `https://worldtimeapi.org/api/timezone/${continentName}/${capital}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.datetime) {
                    const dateTimeString = data.datetime;
                    const hora = dateTimeString.match(/T(\d{2}:\d{2}:\d{2})/)[1];/*la expresión regular /T(\d{2}:\d{2}:\d{2})/ busca el patrón "T" 
                                                                                 seguido de "HH:MM:SS" en la cadena dateTimeString y el [1] extrae la parte de la hora. */
                    const fechaCompleta = obtenerFechaDesdeDatetime(dateTimeString);
                    console.log(fechaCompleta);
                    console.log(hora);

                    day.textContent = mostrarFecha(fechaCompleta);
                    clockElement.textContent = hora;
                } else {
                    throw new Error("Error al obtener la hora local.");
                }
            })
            .catch(error => {
                console.error("Error al obtener la hora local:", error);
            });
    } catch (error) {
        console.error("Error al obtener la hora local:", error);
        // Puedes mostrar un mensaje de error en el reloj o realizar alguna otra acción en caso de error
    }
}

const updateButton = document.getElementById("update-button");
updateButton.addEventListener("click", async () => {
    const countryName = obtenerPais();
    if (countryName) {
        obtenerDatosPais(countryName)
            .then(countryInfo => {
                console.log(countryInfo)
                obtenerLatitud(countryInfo);
                obtenerLongitud(countryInfo);
                let continentName;
                if (countryInfo.continentName.includes("America")) {
                    continentName = obtenerContinenteAmericano(countryInfo)
                    console.log(continentName);
                } else {
                    continentName = countryInfo.continentName;
                }
                console.log(countryName)
                reemplazarEspaciosEnCapital(countryInfo);
                const capital = quitarTildes(countryInfo.capital);
                console.log(capital);
                const name = document.getElementById("nombre");
                name.textContent = countryName;
                limpiarInput();
                updateClock(continentName, countryName, capital);
            })
            .catch(error => {
                alert(error);
            });
    } else {
        alert("Por favor, ingresa un país válido.");
    }
});


