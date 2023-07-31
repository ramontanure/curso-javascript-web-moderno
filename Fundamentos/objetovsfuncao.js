console.log(typeof Object);
console.log(typeof new Object()); //Criando um objeto

const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {} //É um atalho de sintaxe, internamente é uma função
console.log(typeof Produto);
console.log(typeof new Produto());
