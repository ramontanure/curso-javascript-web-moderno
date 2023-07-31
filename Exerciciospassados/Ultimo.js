//1
function cumprimentar(nome) {
  return `Olá, ${nome} !`;
}

console.log(cumprimentar("Leonardo"));
console.log(cumprimentar("Maria"));

//2
function converterIdadeDeAnosParaDias(idade) {
  console.log(idade * 365);
}

converterIdadeDeAnosParaDias(20);
converterIdadeDeAnosParaDias(25);
converterIdadeDeAnosParaDias(70);

//3

function calcularSalario(horastrabmes, recebhora) {
  return `Sálario igual a R$${horastrabmes * recebhora}`;
}

console.log(calcularSalario(150, 40.5));

//4

function nomeDoMes(numero) {
  switch (numero) {
    case 1:
      console.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
      console.log("Junho");
      break;
    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;
    default:
      console.log("Esse mes não existe");
  }
}

nomeDoMes(1);
nomeDoMes(2);
nomeDoMes(3);
nomeDoMes(4);
nomeDoMes(4);
nomeDoMes(5);
nomeDoMes(8);
nomeDoMes(13);

//5

function maiorOuIgual(num1, num2) {
  return num1 === num2;
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(5, 1));
console.log(maiorOuIgual(0, "0"));

function inverso(valor) {
  let tipo = typeof valor;
  if (tipo == "number") {
    console.log("O valor deu", !valor);
  } else if (tipo == "boolean") {
    console.log("O valor deu", -valor);
  } else {
    console.log("booleanos ou numeros esperados, o tipo é ", typeof valor);
  }
}

console.log(inverso(true));
console.log(inverso("dsadasdas"));
console.log(inverso(-5));
console.log(inverso(false));
console.log(inverso(-1));
console.log(inverso("6"));

//6
function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo && numero <= maximo;
  }
}
console.log(estaEntre(10, 100, 50));

//7

function multiplicar(num1, num2) {
  for (let i = num1; i < num2; i++) {
    if (num1 >= 0 && num2 >= 0) {
      let res = res + num2;
      return res;
    } else {
      return "Numero Negativo";
    }
  }
}

console.log(multiplicar(5, 5));

//8

function repetir(reptira, numrepticao) {
  let array = [];
  for (let i = 0; i < numrepticao; i++) {
    array.push(reptira);
  }
  return array;
}

console.log(repetir(7, 3));
console.log(repetir("código", 4));

//9

function simboloMais(num) {
  let mais = "";

  for (let i = 0; i < num; i++) {
    mais += "+";
  }
  return mais;
}

console.log(simboloMais(5));
console.log(simboloMais(8));

//10

function receberPrimeiroEultimoElemento(array) {
  let array2 = [];
  return (array2 = `[${array.shift()}, ${array.pop()}]`);
}

console.log(receberPrimeiroEultimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEultimoElemento([-100, "aplicativo", 16]));

//11

function removerPropriedade(objeto, nomeDaPropriedade) {
  const copia = Object.assign(objeto); //Aqui ele pega O objeto e gera outro objeto
  delete copia[nomeDaPropriedade]; //Aqui estou deletando dentro de copia nomeDaPropriedade "a" que foi passada como parametro
  return copia;
}
console.log(removerPropriedade({ a: 1, b: 2 }, "a"));

//const novoobj = new removerPropriedade(objeto)

//12

function filtrarNumeros(array) {
  let res = array.filter((e) => {
    return typeof e == "number"; //Para olhar o valor do number é assim
  });
  return res;
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]);
filtrarNumeros(["a", "c"]); // retornará []

//13 Fazer

//14 Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

function receberSomenteOsParesDeIndicesPares(array) {
  const res = array.filter((e, i) => {
    return e % 2 == 0 && i % 2 == 0;
  });
  return res;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])); // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])); // retornará [10, 22]

//15 //Verificar se o numero é divisivel

function checarAnoBissexto(ano) {
  const divisivelPorQuatro = ano % 4 == 0;
  const divisivelPorCem = ano % 100 == 0;
  const divisivelPorQuatrocentos = ano % 400 == 0;
  return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

//16

// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros(array) {
  let soma = 0;
  for (let i = soma; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

console.log(somarNumeros([10, 10, 10])); // retornará 30
console.log(somarNumeros([15, 15, 15, 15])); // retornará 60

//17
// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

function despesasTotais(array) {
  let soma = 0;
  array.map((e) => {
    soma += e.preco;
  });
  return console.log(soma);
}

//ou

// function despesasTotais(array){
//   let soma = 0
//   let res = array.map((e) => {
//      return e.preco
//   }).reduce((acumulador, valoratual) => {
//     return acumulador + valoratual
//   })
//   return console.log(res)
// }

despesasTotais([
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
]); // retornará 239.99
despesasTotais([
  { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
]); // retornará 34599.89

//18

// function calcularMedia(array) {
//   let soma = 0
//   let media = array.length
//   let resultado = 0
//   array.map((e) => {
//     soma += e
//     resultado = soma / media
//     return resultado
//   })
//   return console.log(resultado)
// }

function calcularMedia(array) {
  let soma = 0;
  let media = array.length;
  let resultado = 0;
  array
    .map((e) => {
      return e;
    })
    .reduce((acumulador, valoratual) => {
      soma = acumulador + valoratual;
      resultado = soma / media;
      return soma;
    });
  return console.log(resultado);
}

calcularMedia([0, 10]); // retornará 5
calcularMedia([1, 2, 3, 4, 5]); // retornará 3

//19

function areaDoTriangulo(base, altura) {
  let resultado = 0;
  resultado = (base * altura) / 2;
  return console.log(parseFloat(resultado).toFixed(2));
}

areaDoTriangulo(10, 15); // retornará 75.00
areaDoTriangulo(7, 9); // retornará 31.50
areaDoTriangulo(9.25, 13.1); // retornará 60.59

//20

// function menorNumero(array){
//    console.log(array.reduce((acumulador, valoratual) => {
//     acumulador < valoratual ? acumulador : valoratual
//   }))
// }

function menorNumero(numeros) {
  return numeros.reduce((anterior, atual) =>
    anterior < atual ? anterior : atual
  );
}

menorNumero([10, 5, 35, 65]); // retornará 5
menorNumero([5, -15, 50, 3]); // retornará -15

//21
function funcaoDaSorte(num) {
  let min = 1;
  let max = 10;
  let resultado = Math.floor(Math.random() * (max - min) + min);

  return resultado == num
    ? `"Parabéns! O número sorteado foi o ${resultado}`
    : `"Que pena! O número sorteado foi o ${resultado}`;
}

funcaoDaSorte(10); // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5); // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5); // retornará "Que pena! O número sorteado foi o 1"

//22

function contarPalavras(frase) {
  let soma = 0;
  let conversor = frase.split(" ");
  return conversor.length;
}

console.log(contarPalavras("Sou uma frase")); // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")); // retornará 5

//23

// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

function contarCaractere(caractere, string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++)
    if (string.charAt(i) === caractere) contador++;

  return console.log(contador);
}

contarCaractere("r", "A sorte favorece os audazes"); // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo"); // retornará 1

//24

// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
// Exemplos:

function buscarPalavrasSemelhantes(palavra, array) {
  array.filter((e) => {
    return console.log(e.includes(palavra));
  });
}

console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
); // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])); // retornará []

//25

// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

function removerVogais(string) {
  let vogais = "a, e, i, o, u";
  return string.replace(/[aeiou]/gi, "");
}

console.log(removerVogais("Cod3r")); // retornará "Cd3r"
console.log(removerVogais("Fundamentos")); // retornará "Fndmnts"

//26

// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:
// Exemplo:

function inverter(objeto) {
  const paresDeChaveValorInvertidos = Object.entries(
    objeto
  ).map((parChaveValor) => parChaveValor.reverse());
  return Object.fromEntries(paresDeChaveValorInvertidos);
}

inverter({ a: 1, b: 2, c: 3 }); // retornará { 1: "a", 2: "b", 3: "c"}

// //Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.
// Exemplos:

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  return numeros.filter((numero) => {
    const quantidadeDeDigitos = String(numero).length;
    return quantidadeDeDigitos === quantidadeDesejada;
  });
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2); // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1); // retornará [5, 9, 1]

// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:(

function segundoMaior(numeros) {
  let indiceDoMaior = 0;
  let segundoMaior;
  numeros.forEach((numero, indice) => {
    if (numero > numeros[indiceDoMaior]) indiceDoMaior = indice;
  });
  numeros.splice(indiceDoMaior, 1);
  segundoMaior = numeros[0];
  numeros.forEach((numero) => {
    if (numero > segundoMaior) segundoMaior = numero;
  });
  return segundoMaior;
}
console.log(segundoMaior([12, 16, 1, 5])); // retornará 12
console.log(segundoMaior([8, 4, 5, 6])); // retornará 6
