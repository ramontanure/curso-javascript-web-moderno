const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 7.9 },
];

//Abordagem imperativa

let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota; //Aqui tem menos reuso, por que estamos fazendo tudo de uma vez
}

console.log(total1 / alunos.length);

//Declarativa

//Abordagem muito mais interessante por varios fatores
const getNota = (aluno) => aluno.nota; //Aqui pode ter mais reusos por que pode ser utilizado em varias circunstancias
const soma = (total, atual) => total + atual;
const total = alunos.map(getNota).reduce(soma);
console.log(total / alunos.length);

//Voce pode utilizar o reduce como uma forma de agregar
