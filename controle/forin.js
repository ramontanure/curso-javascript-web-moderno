const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  //Variavel pessoa que é um tipo recebendo objetos que são as caracteristicas
  nome: "Ana", //Atributo é nome, sobrenome, idade, peso
  sobrenome: "Silva",
  idade: 29,
  peso: 64,
};
for (let atributo in pessoa) {
  //Quero pegar um atributo dentro de pessoa
  console.log(` ${atributo} = ${pessoa[atributo]}`);
} //Pega de pessoa na posição atributo pegando os valores
//Ele pecorre todos os objetos
