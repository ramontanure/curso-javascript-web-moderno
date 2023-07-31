//Toda função tem um atributo chamado prototype

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object); //Function as 3

String.prototype.reverse = function () {
  //Vai pegar e reverter
  return this.split("").reverse().join("");
}; //O split vai virar array e separar com um espaço essas letras e vai reverter depois vai juntar tudo
console.log("Escolha Cod3r".reverse());

//Voce acessa o prototype pelo this

Array.prototype.first = function () {
  return this[0];
};
console.log([1, 2, 3, 4, 5].first());
