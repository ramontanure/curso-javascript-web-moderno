const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
//Sem callback
let notasBaixas = [];

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);

//com callback //É uma função que vai filtrar os elementos de um
notasBaixas = notas.filter(function (nota) {
  return nota < 7; //O filter vai ter uma condição de verdadeiro ou falso
}); //Vai retornar a nota menor que 7, em que o primeiro metodo que está como parametro nota  é o numero

console.log(notasBaixas);

const notasBaixas3 = notas.filter((nota) => nota < 7); //Recebe como parametro o elemento atual
console.log(notasBaixas3);

//Função callback que retorna true ou false
