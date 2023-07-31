//Armazenando uma função em uma variavel
const ImprimirSoma = function (a, b) {
  //(a,b): São parametros Console.log é uma ação e Imprimir soma(2,3) é uma chamada para a função
  console.log(a + b);
};
ImprimirSoma(2, 3);

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!!");
