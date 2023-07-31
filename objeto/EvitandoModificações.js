//Object.preventExtensions esse metodo ele vai fazer que voce restringi um objeto, não colocando mais atributos exemplo
//Com ele voce pode excluir atributos, mas não pode adicionar mais atributos dentro desse objeto

const produto = Object.preventExtensions({
  //Aqui estou criando uma variavel produto que recebe um objeto com prevenção para que não crie outros atributos
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção", //Atributos e valores (Chave e valor)
});

console.log("Extensivel:", Object.isExtensible(produto)); //Objeto é extensivel?? FAlSE

produto.nome = "Borracha"; //Aqui vai da certo por que não é como o freeze ele pode alterar
produto.descricao = "Borracha escolar branca"; //Aqui não vai acontecer nada ele vai tentar procurar no objeto mais nao vai encontrar UNDEFINED
delete produto.tag; //Aqui vai deletar, com esse metodo o que não pode é adicionar atributos

console.log(produto);

//Object.seal Metodo de celar um objeto

const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado: ", Object.isSealed(pessoa)); //Aqui ta verificando se o objeto está celado TRUE

//Aqui voce consegue selar o objeto, voce não pode excluir nenhum atributo e nem adicionar um atributo
//Voce consegue apenas modificar

pessoa.sobrenome = "Silva"; //Aqui ele não vai poder adicionar um atributo
delete pessoa.nome; //Aqui ele não consegue apagar um atributo
pessoa.idade = 29; //Aqui ele consegue alterar

console.log(pessoa);

//Object.freeze = selado + valores constantes 100% constantes, não podem ser modificador

//Esses metodos ele evita esse comportamento dinamico de um objeto dentro do javascript
