
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


function updateClock(continentName, countryName, capital) {
    const clockElement = document.getElementById("clock");

    try {
        const url = `https://worldtimeapi.org/api/timezone/${continentName}/${countryName}/${capital}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.raw_offset) {
                    const rawOffsetSeconds = data.raw_offset;
                    const localTime = new Date(new Date().getTime() + rawOffsetSeconds * 1000); // Suma el desfase a la hora UTC
                    const localHours = localTime.getUTCHours().toString().padStart(2, '0');
                    const localMinutes = localTime.getUTCMinutes().toString().padStart(2, '0');
                    const localSeconds = localTime.getUTCSeconds().toString().padStart(2, '0');
                    const timeString = `${localHours}:${localMinutes}:${localSeconds}`;
                    clockElement.textContent = timeString;
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
                const capital = countryInfo.capital;
                console.log(capital);
                updateClock(continentName, countryName, capital);
            })
            .catch(error => {
                alert(error);
            });
    } else {
        alert("Por favor, ingresa un país válido.");
    }
});


/*
let latitud = 34.6132;
let longitud = 58.3772;


const API_KEY = "usrxdlax"
const url = `http://api.geonames.org/countryCodeJSON?lat=${latitud}&lng=${longitud}&username=${API_KEY}`;
let receivedData;

//console.log(url);

// Realizar solicitud HTTP
fetch(url)
    .then(response => response.json())
    .then(data => {
        receivedData = data;
        console.log(receivedData)
        if (data.countryCode) {
            console.log(data.countryName);
        } else {
            console.error('No se pudo obtener la información del país.');
        }
    })
    .catch(error => console.error('Error en la solicitud:', error));
*/