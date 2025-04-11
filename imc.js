const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    switch (true) {
      case valorImc < 18.5:
        classificacao = "Abaixo do peso";
        break;
      case valorImc < 24.9:
        classificacao = "Peso normal";
        break;
      case valorImc < 29.9:
        classificacao = "Sobrepeso";
        break;
      case valorImc < 34.9:
        classificacao = "Obesidade grau 1";
        break;
      case valorImc < 39.9:
        classificacao = "Obesidade grau 2";
        break;
      default:
        classificacao = "Obesidade grau 3";
        break;
    }

    resultado.textContent = `${nome}, seu IMC é ${valorImc}, você está ${classificacao}`;
  } else {
    resultado.textContent = "preencha todos os camopos";
  }
}

calcular.addEventListener("click", imc);
