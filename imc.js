const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  if (nome !== "" && altura !== "" && peso !== "") {
    let valorImc = peso / (altura * altura);

    let classificacao = "";

    if (valorImc < 16) {
      classificacao = "Magreza grave";
    } else if (valorImc >= 16 && valorImc < 17) {
      classificacao = "Magreza moderada";
    } else if (valorImc >= 17 && valorImc < 18.5) {
      classificacao = "Magreza leve";
    } else if (valorImc >= 18.5 && valorImc < 25) {
      classificacao = "Saudavel";
    } else if (valorImc >= 25 && valorImc < 30) {
      classificacao = "Sobrepeso";
    } else if (valorImc >= 30 && valorImc < 35) {
      classificacao = "Obesidade grau I";
    } else if (valorImc >= 35 && valorImc < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }
    resultado.textContent = `${nome}, seu imc é ${valorImc.toFixed(2)}, sua classificacao: ${classificacao}`;
  } else {
    resultado.textContent = `Preencha todos os campos`;
  }
}

calcular.addEventListener("click", imc);
