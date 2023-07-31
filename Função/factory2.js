//Função factory retorna um objeto

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}
console.log(criarProduto("Tapete", 50.0));
