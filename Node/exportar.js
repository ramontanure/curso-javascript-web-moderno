console.log(module.exports === this);
console.log(module.exports === exports); //Aqui os tres são estritamente igual e todos valendo pra importar

this.a = 1; //Significa que o atributo a vai ser visivel fora do arquivo
exports.b = 2; // Também ficara visivel fora
module.exports.c = 3; //Também exporta para fora

//Importante
//Mesmo se eu atribuir um valor para o exports por exemplo null, ele vai ser exportado
//Por que o module.exports exports e this aponta pro mesmo endereço de memoria

exports == null; //Mudando a referencia
console.log(module.exports);

exports = {
  // Mudando a referencia
  nome: "Teste",
};

console.log(module.exports); //Continua sendo o mesmo objeto a referencia é a mesma
