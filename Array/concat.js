const filhas = ["Ualeskah", "Cibalena"];
const filhos = ["Uoxiton", "Uesclei"]; //Posso adicionar mias um elementos
const todos = filhas.concat(filhos, "Fulano"); //Aqui estou passando filhos como parametro para que concatene isso
console.log(todos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); //Posso passar varios parametros de arrays e numeros que ele vai fazer a concatenação pro array vazio
