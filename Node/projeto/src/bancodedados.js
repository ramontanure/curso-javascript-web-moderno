const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
}; //Com o metodo get, não preciso chamar a função id, apenas com o atributo eu consigo chamar a função

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id; //Aqui ta verificando se não tiver id, ele pega o id ++
  produtos[produto.id] = produto; //E objeto produtos na posição do id recebe o produto
  return produto;
}

function getProduto(id) {
  return produtos[id] || {};
}

function getProdutos() {
  return Object.values(produtos);
}
function excluirProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = {
  salvarProduto,
  getProduto,
  getProdutos,
  excluirProduto,
};
