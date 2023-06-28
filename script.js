document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  var nome = document.getElementById("nome").value;
  var contato = document.getElementById("contato").value;
  var email = document.getElementById("email").value;

  if (nome !== "" && contato !== "" && email !== "") {
    alert("Prontinho!");
  } else {
    alert("Por favor, preencha os campos nome, contato e email");
  }
}