function lanchonete(codigo, qtd) {
  switch (codigo) {
    case 100:
      console.log("O valor do cachorro quente é: ", (qtd * 3.0).toFixed(2));
      break;
    case 200:
      console.log("O valor dos Hamburgues vai ser:", qtd * 4.0);
      break;
    case 300:
      console.log("O valor do Cheeseburguer é : ", qtd * 5.5);
      break;
    case 400:
      console.log("O valor do Bauru é: ", qtd * 7.5);
      break;
    case 500:
      console.log("O valor do Refrigerante vai ser de: ", qtd * 3.5);
      break;
    case 600:
      console.log("O valor do Suco é: ", qtd * 2.8);
      break;
    default:
      console.log("Produto nao existe");
  }
}

lanchonete(100, 2);
