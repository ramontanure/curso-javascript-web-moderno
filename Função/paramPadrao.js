//estrategia 1 para gerar valor do parametro padrao

function soma1(a, b, c) {
  a = a || 1; //Ele vai ser valor padrao por que sempre um vai dar true entao nao tem risco de da undenined ou null
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(1, 2, 3));
console.log(soma1(0, 0, 0));

//estrategia 2, 3 e 4 para gerar valor padrao

function soma2(a, b, c) {
  a = a !== undefined ? a : 1; //Variavel a recebendo a é diferente de undefined ?? Se for coloco o valor a se nao se for igual coloco 1
  b = 1 in arguments ? b : 1; //Ou seja existe o segundo argumento que foi passado pra função soma 2, indice 1 é o segundo dentro de um vetor
  c = isNaN(c) ? 1 : c; //variavel c nao é um numero? retorne 1 se nao retorne o C
  //arguments é um vetor que contem dentro de uma função que contem dados passados
  return a + b + c;
}

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

//valor padrao do es2015

function soma3(a = 1, b = 1, c = 1) {
  //Colocar valor padrao = 1 nao interfere na passada de valores, ele fica igual a 0
  //Valor padrao pode ser escrito assim
  return a + b + c;
}
console.log(soma3());
console.log(soma3(3));
console.log(soma3(1, 2, 3));
console.log(soma3(0, 0, 0));

//Valor padrao é um valor fixo que tem q ter dentro de uma variavel, pra nao retornar um bug, por exemplo valor 1
