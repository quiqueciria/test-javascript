import "./style.css";

// ----------------- COUNT LESS
function contar() {
  //IT READS THE COUNTER
  const marcador = document.getElementById("numero-turno").innerText;

  //APPLY DECRECENT
  const countMinus = parseInt(marcador) - 1;

  //SHOW RESULT
  document.getElementById("numero-turno").innerHTML = countMinus;
}

//CALL TO THE FUNCTION
const botonAnterior = document.getElementById("anterior");
botonAnterior.addEventListener("click", contar);

// ----------------- COUNT MORE
function contarPlus() {
  //IT READS THE COUNTER
  const marcadorPlus = document.getElementById("numero-turno").innerText;

  //APPLY DECRECENT
  const countPlus = parseInt(marcadorPlus) + 1;

  //SHOW RESULT
  document.getElementById("numero-turno").innerHTML = countPlus;
}

//CALL TO THE FUNCTION
const botonSiguiente = document.getElementById("siguiente");
botonSiguiente.addEventListener("click", contarPlus);

// ----------------- RESET
function reset() {
  //IT READS THE COUNTER
  const marcadorPlus = document.getElementById("numero-turno").innerText;

  //APPLY DECRECENT
  const countReset = 0;

  //SHOW RESULT
  document.getElementById("numero-turno").innerHTML = countReset;
}

//CALL TO THE FUNCTION
const botonReset = document.getElementById("reset");
botonReset.addEventListener("click", reset);
