function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };

console.log(getPreco.call(carro)); //Aqui estamos fazendo uma referencia a função getPreco, e chamando a função call e falando que o this é o objeto carro pegando assim a função
console.log(getPreco.apply(carro));
