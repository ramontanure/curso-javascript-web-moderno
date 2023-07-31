//Estrutura de chave e valor a diferença pro objeto é que no objeto voce tem a chave como uma string
//E no map, voce pode ter a chave como um numero, uma string, function, objeto

const tecnologias = new Map(); //Instanciando o map a partir do new, set serve para criar uma chave e valor dentro do map
tecnologias.set("react", { framework: false }); //Chave e valor
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); //Não funcionar por que nao da pra acessar o atributo
console.log(tecnologias.get("react").framework); //Assim voce consegue acessar o valor da chave

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"], //Aqui voce abre um array e dentro desse array vai ter varios arrays dentro com a chave e valor
]);
//Temos aqui chaves variadas, a chave vai ser uma função, um objeto, um number

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); //Essa função diz se está contido dentro ou não desse Map
//Return true ou false
chavesVariadas.delete(123); //Tenho metodos para verificar a chave
console.log(chavesVariadas.has(123)); //Tem 123 como chave em chavesVariadas ?? false por que deletei acima
console.log(chavesVariadas.size); //Diz quantos elementos estão presentes dentro do map

//Não aceita repetição na chave, duplicadas nao pode

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
console.log(chavesVariadas);
//Ela sobrescreve com o valor acima, pois não pode ter chaves iguais
//Chave não aceita repetição
