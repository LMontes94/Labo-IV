let contar = 0;

function contador(){
    contar++;
    document.getElementById("resultado").textContent = contar;
}

function reset(){
    document.getElementById("resultado").textContent = 0;
}

function claro() {
    document.getElementById("modo").style.backgroundColor = "#C4C8D3";
}

function oscuro() {
    document.getElementById("modo").style.backgroundColor = "#1e0a4d"
}

function cambioEstado() {
   let estado = 0;
   const rojo = document.getElementById("red");
   const amarillo = document.getElementById("yellow");
   const verde = document.getElementById("green");

   if(estado == 0){
     estado++;
     rojo.style.color = "#f01919";
   }else if(estado == 1){
      estado++;
      amarillo.style.color = ""
   }
}