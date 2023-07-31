//Callback é chamar de volta

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  //Aqui vai pegar o nome e o indice do vetor acima
  console.log(`${indice + 1}. ${nome}`); //Aqui vai imprimir indice + 1(Efeito visual para ficar 1, 2, 3) e o nome
}
//Ideia de callback é passar uma função para outra função e quando determinado evento acontecer essa que voce passou vai ser chamada de volta

//O forEach é uma funçao de fabricantes e fabricantes é um vetor(array)
//Dentro do array eu tenho essa função forEach
//Quero que para os elementos daquele array quero que chame a função imprimir

/*Função callback*/ fabricantes.forEach(imprimir); //O evento é um loop, Peguei o vetor, coloquei uma função foreach dentro dele que quando um elemento for encontrado ele chama a função imprimir assim fazendo em cada elemento de cada vez

//Pra cada elemento que for encontrado. O ForEach(Função de fabricantes) encontrar no arrays ele vai chamar de volta

fabricantes.forEach(function (a) {
  console.log(a);
});

const treinamento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function teste(numero) {
  console.log(`${numero}`);
}

treinamento.forEach(teste);

const vetor = [5, 4, 5, 5, 6];

const numeros5 = vetor.filter(function (num) {
  return num < 7;
});

console.log(numeros5);
