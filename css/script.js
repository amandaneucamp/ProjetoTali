document.getElementById("botaoEnviar").addEventListener ("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
     document.getElementById("contato").value !=
     document.getElementById("email").value != ""){
      alert("Prontinho!")
  }else{
      alert("Por favor, preencha os campos nome,contato e email")
  }
}

