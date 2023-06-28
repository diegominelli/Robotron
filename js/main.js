const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipularDados(evento.target.textContent, evento.target.parentNode);
  })
})

function manipularDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1; 
  } else {
    peca.value = parseInt(peca.value) + 1; 
  }
}

