//Para que eu coloque de fato o global para o escopo global preciso importar
require("./Global"); //Aqui não precisando da importação de novo

console.log(minhaApp.saudacao()); // Ja esta global

//Só em casos necessarios usar isso, normal é padrao do sistemas de modulos
console.log(minhaApp.nome);
// MinhaApp.nome = "Eita";
// console.log(minhaApp.nome);
