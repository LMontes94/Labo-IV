const URL = "https://pokeapi.co/api/v2/pokemon/"
// fetch devuelve una promise, al pasar por parametro un API
for (let index = 1; index < 152; index++) {
    fetch(URL + index)
        // al recibir la promise hay que pasarla de json a un objeto js
        .then(res => res.json())
        // y luego trabajo con el objeto para mostrarlo
        .then(data => {
            console.log(data.name);
            console.log(data);
        });
}
function monstrarNombre(data) {
    data
}