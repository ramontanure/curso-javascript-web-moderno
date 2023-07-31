console.log(this === global); //False por que o this não apronta pra global e sim para o module.exports
console.log(this === module); //false por this é um objeto e é referencia a module.exports

console.log(this === module.exports); //True por que ele aponta para o mesmo objeto
console.log(this === exports); //True por que ele aponta para o mesmo objeto, mesma referencia

function logThis() {
  console.log("Dentro de uma função....");
  console.log(this === exports); //False por ele aponta pro global
  console.log(this === module.exports);
  console.log(this === global); //True ele aponta pra global
  this.perigo = "..."; //Aqui o perigo é atributo que aponta pro global
}

logThis();
//Dentro aponta de uma função aponta pra global , Mas fora de uma função ele aponta pra exports
