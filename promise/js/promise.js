
// fetch devuelve una promise, al pasar por parametro un API
fetch("https://pokeapi.co/api/v2/pokemon/1")
// al recibir la promise hay que pasarla de json a un objeto js
.then(res => res.json())
// y luego trabajo con el objeto para mostrarlo
.then(data => {
    console.log(data.name);
});

function monstrarNombre(data) {
    data
}