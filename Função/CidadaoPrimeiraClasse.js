//Função em JS é First-Class Object (Citizens)
// Higher-order function  Função de alta ordem
//A linguagem trata a função como um dado e isso traz um leque de possibilidades
//Caso a função nao retorne nenhum valor vai retornar undefined
//Bloco serve para ter reuso, bloco em função é obrigatorio

//Criar funçao de forma literal

function fun1() {} //fun1 é o nome { aqui dentro vai o valor a execução, o processamento

//Armazenar em uma variavel
//Para invocar em uma função pode usar o indicador da constante e abrindo ()
const fun2 = function () {}; //Atribuição de função anonima para a variavel fun2

//Armazenar dentro de um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3)); //Aqui ele pegou a posição 0 do array e passou os valores 2 e 3 e somou com a função

//Armazenar função dentro de atributo do objeto

const obj = {};

obj.falar = function () {
  return "Opa";
};
console.log(obj.falar()); //Colocar os parenteses para invocar a função o atributo falar está recebendo uma função

//Passar função como parametro para outra função

function run(fun) {
  //Recebendo uma função como parametro
  fun(); //Aqui chamando a função
}

run(function () {
  console.log("Executando...."); //Aqui estou passando a função para o parametro
});

//Uma função pode retornar/conter uma função

function soma(a, b) {
  return function (c) {
    //Função soma está retornando outra função para passar parametros complementares
    console.log(a + b + c);
  };
}

soma(2, 3)(4); //Primeiro parentese passa os valores da primeira função e o segundo parenteses da segunda função
//Chamada da função

const obj1 = {
  name: function () {
    return "Deu certo";
  },
};
console.log(obj1.name()); //Nao esquecer que o atributo que recebe a função então o atributo tem que ser chamada como função () na resposta

function teste(a, b) {
  console.log(a + b);
}
teste(2, 3);

function ParImpar(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(ParImpar(5));
