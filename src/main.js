import "./style.css";

// CONTAR MENOS
function contar() {
  //leer el valor del marcador
  const marcador = document.getElementById("numero-turno").value;

  //Aplicar el decrecimiento
  const countMinus = parseInt(marcador) - 1;

  //Mostrar el resultado
  document.getElementById("numero-turno").innerHTML = countMinus;
}
const botonAnterior = document.getElementById("anterior");
botonAnterior.addEventListener("click", contar);

//CONTAR MÁS
function contarPlus() {
  //leer el valor del marcador
  const marcadorPlus = document.getElementById("numero-turno").value;

  //Aplicar el decrecimiento
  const countPlus = parseInt(marcadorPlus) + 1;

  //Mostrar el resultado
  document.getElementById("numero-turno").innerHTML = countPlus;
}

const botonSiguiente = document.getElementById("siguiente");
botonSiguiente.addEventListener("click", contarPlus);

//RESET
function reset() {
  //leer el valor del marcador
  const marcadorPlus = document.getElementById("numero-turno").innerText;

  //Aplicar el decrecimiento
  const countReset = 0;

  //Mostrar el resultado
  document.getElementById("numero-turno").innerHTML = countReset;
}

const botonReset = document.getElementById("reset");
botonReset.addEventListener("click", reset);
