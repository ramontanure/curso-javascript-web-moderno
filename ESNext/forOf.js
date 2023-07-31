//for in trabalha em cima de indice, e for of trabalha em cima de valor
//Outras alternativas como map, reduce, filter

//interando em cima de uma string

for (let letra of "Cod3r") {
  //Aqui estou criando uma variavel letra que vai pecorrer com o for pegando todos os valores das palabra c o d 3 r
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (let i in assuntosEcma) {
  //Nesse caso usando in ele pega os indices em vez dos valores 0, 1, 2
  console.log(i);
}

for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntos = new Map();

assuntos.set("Map", { verdade: true });
assuntos.set("Set", { verdade: true });
assuntos.set("Promise", { verdade: true });

console.log(assuntos.get("senha"));

for (let assunto of assuntos) {
  console.log(assunto);
}

for (let valor of assuntos.values()) {
  //Pode pegar apenas o valor
  console.log(valor);
}

for (let chave of assuntos.keys()) {
  //Pode pegar apenas a chave
  console.log(chave);
}

for (let [ch, vl] of assuntos.entries()) {
  console.log(ch, vl);
}

//Posso fazer um destructuring um array

const s = new Set(["a", "b", "c"]);

for (let letra of s) {
  console.log(letra);
}
