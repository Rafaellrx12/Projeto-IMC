//meu escopo privado

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const peso = form.querySelector(".input-peso");
  const altura = form.querySelector(".input-altura");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pesoNumero = +peso.value;
    const alturaNumero = +altura.value;
    if (!pesoNumero && !alturaNumero) {
      printarResultado(
        "Digite um peso e uma altura válida",
        "",

        "paragrafo-vermelho"
      );
      peso.value = "";
      altura.value = "";
    } else if (!alturaNumero) {
      printarResultado("Digite uma altura válida", "", "paragrafo-vermelho");
      altura.value = "";
    } else if (!pesoNumero) {
      printarResultado("Digite uma peso válido", "", "paragrafo-vermelho");
      peso.value = "";
    } else {
      verificarResultado(calcularImc(+peso.value, +altura.value));
    }
  });

  //calculo imc
  function calcularImc(peso, altura) {
    const conta = peso / altura ** 2;
    return conta.toFixed(2);
  }

  function printarResultado(texto, textImc, classe) {
    resultado.innerHTML = "";
    const p = document.createElement("p");
    const j = document.createElement("p");
    p.classList.add(classe);
    p.innerHTML = `${texto}<br><br/>${textImc}`;
    resultado.appendChild(p);

    //resultado.innerHTML = `<p>${texto}<p/>`;
  }
  function verificarResultado(imc) {
    if (imc < 18.5) {
      return printarResultado(
        "Vc está Abaixo do peso",
        `E o seu imc é: ${imc}`,
        "paragrafo-verde"
      );
    } else if (imc >= 18.5 && imc <= 24.9) {
      return printarResultado(
        "Peso normal",
        `E o seu imc é: ${imc}`,
        "paragrafo-verde"
      );
    } else if (imc >= 25 && imc <= 24.9) {
      return printarResultado(
        "Vc está com Sobrepeso",
        "E o seu imc é: ${imc}",
        "paragrafo-verde"
      );
    } else if (imc >= 30 && imc <= 34.9) {
      return printarResultado(
        "Vc está com Obesidade grau 1",
        `E o seu imc é: ${imc}`,

        "paragrafo-verde"
      );
    } else if (imc >= 35 && imc <= 39.9) {
      return printarResultado(
        "Vc está com Obesidade grau 2",
        `E o seu imc é: ${imc}`,
        "paragrafo-verde"
      );
    } else if (imc > 40) {
      return printarResultado(
        "Vc está com Obesidade grau 3",
        `E o seu imc é: ${imc}`,

        "paragrafo-verde"
      );
    }
  }
}
meuEscopo();
/*

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const peso = form.querySelector(".input-peso");
  const altura = form.querySelector(".input-altura");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pesoNumero = +peso.value;
    const alturaNumero = +altura.value;
    if (pesoNumero === NaN && alturaNumero === NaN) {
      escreverResultado("Dados Inválidos", "paragrafo-vermelho");
      peso.value = "";
      altura.value = "";
    } else if (pesoNumero === NaN) {
      escreverResultado("Digite um peso válido", "paragrafo-vermelho");
      peso.value = "";
    } else if (!alturaNumero) {
      escreverResultado("Digite uma altura válida", "paragrafo-vermelho");
      altura.value = "";
    } else {
      escreverResultado(
        interpretarImc(calcularImc(+peso.value, +altura.value))
      );
    }
  });

  function criaP() {
    const p = document.createElement("p");
    return p;
  }
  function escreverResultado(texto, classe = "paragrafo-verde") {
    resultado.innerHTML = "";
    const p = criaP();
    p.classList.add(classe);
    p.innerText = texto;
    resultado.appendChild(p);

    //resultado.innerHTML = `<p>${texto}<p/>`;
  }

  function calcularImc(peso, altura) {
    return peso / altura ** 2;
  }

  function interpretarImc(imc) {
    if (imc < 18.5) {
      return "abaixo do peso";
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    }
    if (imc >= 25 && imc <= 29.9) {
      return "Sobrepeso";
    }
    if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau 1";
    }
    if (imc >= 35 && imc <= 39.9) {
      return "Obesidade grau 2";
    }
    return "Obesidade grau 3";
  }
}
meuEscopo();
*/
