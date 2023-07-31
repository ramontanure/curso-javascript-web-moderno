let dobro = function (a) {
  return 2 * a;
};
console.log(dobro(5));

let dobro1 = (a) => {
  //Para colocar um nome em uma função arrow tem q colocar a variavel e pode tambem colocar o parametro sem () desde que seja só 1 parametro
  return 2 * a;
};

console.log(dobro1(10));

dobro = (a) => 2 * a; //retorno implicito com mais de duas sentenças tem que colocor dentro de um bloco(corpo) {}

console.log(dobro(5));
