//Pecorre um array de uma forma proposital
//Ele é uma função que serve para voce por exemplo transformar um array em um unico elemento, um array em um numero, um array em uma string
//O fato é que voce tem um parametro que é acumulado em chamada e chamada
//O reduce recebe 2 elementos como parametro, o primeiro elemento indice 0 que seria o acumulador e o indice 1
//Sempre o primeiro elemento é o acumulador e o segundo elemento é o atual

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "João", nota: 8.7, bolsista: true },
];

//Estou passando pro map e reduce uma callback
const resultado = alunos
  .map((a) => a.nota)
  .reduce((acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 10);

//Retorno implicito
