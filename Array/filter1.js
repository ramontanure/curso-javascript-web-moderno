const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plastico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter((p) => {
    return p.preco > 10;
  })
); //produtos é o array.filter quero filtrar esse array passando uma função callback

const produtosfrageis = (p) => {
  return p.fragil;
};
const precosmaiores = (p) => {
  return p.precos >= 500;
};

const res = produtos.filter(produtosfrageis).filter(precosmaiores);
console.log(res)
//No filter o array original é maior que o array final
//No map o resultado era o elemento transformado
//E no filter o resultado é verdadeiro ou falso
//Se for verdadeiro o array resultante tera aquele elemento se for falso o array não tera aquele elemento
