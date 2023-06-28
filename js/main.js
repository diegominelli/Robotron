const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

somar.addEventListener("click", () => {manipularDados("somar")});

subtrair.addEventListener("click", () => {manipularDados("subtrair")});

function manipularDados(operacao) {
  if (operacao === "subtrair") {
    braco.value = parseInt(braco.value) - 1; 
  } else {
    braco.value = parseInt(braco.value) + 1; 
  }
}

