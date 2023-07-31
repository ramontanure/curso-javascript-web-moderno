//console.log(global)

global.minhaApp = Object.freeze({
  //Aqui esse objeto minhaApp, vai ser global e todos os modulos, arquivos podem acessar ele
  saudacao() {
    return "Estou em todos os lugares!";
  },
  nome: "Sistema Legal",
});

//Evitar, trabalhar sempre com padrao do sistema de modulos do node
