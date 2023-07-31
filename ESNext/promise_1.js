//Promise é promessa é algo que voce vai resolver no futuro

let a = 1;
console.log(a); //Aqui voce tem a variavel disponivel

// let p = new Promise() //Aqui p recebe uma promessa que vai ser uma promessa que vai ser concluida no futuro
//A gente precisa passar uma função como parametro pra promise

console.log(typeof Promise); //Uma função que quando voce cria uma nova promise ele vai criar um objeto

let p = new Promise(function (cumprirPromessa) {
  //
  cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"]);
}); //Aqui preciso passar uma função como parametro para essa promisse que dentro dessa função vai ser passada como parametro outra função
//E dentro dessa função voce chama comprirPromessa com o valor 3

console.log(typeof p);

//Promise é uma função, quando instanciada ela vira um objeto

p.then((valor) => valor[0])
  .then((primeira) => primeira[0])
  .then((resp) => console.log(resp)); //Acessa a resposta da promessa

//Uma promessa gera apenas um valor
