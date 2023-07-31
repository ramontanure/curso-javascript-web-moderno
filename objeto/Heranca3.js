const pai = { nome: "Pedro", corCabelo: "preto" };

const filha1 = Object.create(pai); //Aqui ta filha1 recebe um objeto com referencia de prototipo da variavel pai
filha1.nome = "Ana"; //Aqui ta criando um atributo chamado Nome e passando como falor Ana
console.log(filha1.corCabelo); //Aqui ele ta pegando do pai, que ele tem como referencia na linha 3 e passando esse valor pra ela
console.log(filha1.nome); //Aqui vai criar normal o nome, pois isso ta indo para a variavel filha1

const filha2 = Object.create(pai, {
  //Aqui filha2 recebe um objeto que passa como parametro o prototipo dela que é pai, e cria 3 atributos
  nome: { value: "Bia", writable: false, enumerable: true },
}); //Atributo nome recebe objeto, que tem como valor 'Bia', nao pode ser alterado, e quando for chamado em uma chave key pode ser chamada
//Definindo propriedades

console.log(filha2.nome, filha2.corCabelo);
filha2.nome = "Carla"; //Aqui não vai da por que ele tem o writable, que não pode ser alterada
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2)); //Aqui ta pegando todas as chaves criadas a partir do objeto
console.log(Object.values(filha1));

for (let key in filha2) {
  filha2.hasOwnProperty(key) //Ela tem aquela propriedade pertence a ela? e se pertencer
    ? console.log(key) //Determinado atributo percente ao proprio objeto? Se for console.log(key) se não pega os por herança
    : console.log(`Por herança: ${key}`);
}
