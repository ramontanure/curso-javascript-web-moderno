// IIFE -> Imedately Invoked Function Expression
//É uma função muito usada para fugir do escopo global
//Ficando assim toda a função dentro de seu corpo(Contexto) atual
(function () {
  console.log("Será executado na hora!"); //Tudo que eu colocar aqui o escopo nao vai ser global
  console.log("Foge do escopo mais abrangente!");
})(); //Chamada imediata da função
