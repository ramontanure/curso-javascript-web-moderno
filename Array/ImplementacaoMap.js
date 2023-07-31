function map2(callback) {
  const newArray = [];
  for (let i = 0; i < this.lenght; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.9 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

//Retornar um array apenas com os preços
const paraObjeto = (json) => JSON.parse(json); //Aqui serve para passar de Json para objeto
const apenaspreco = (produto) => produto.preco; //Aqui está pegando cada elemento do array e pegando apenas os precos

const res = carrinho.map2(paraObjeto).map2(apenaspreco);

console.log(res);
