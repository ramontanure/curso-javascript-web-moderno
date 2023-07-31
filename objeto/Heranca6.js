function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até Breve", 456);
console.log(aula1, aula2); //Aqui estou recebendo duas instancias de objeto em dua variaveis, com o valor, e ta apontando pra funcao.prototype

//similuando o new

function novo(f, ...params) {
  //Operador spred
  const obj = {};
  obj.__proto__ = f.prototype; //Associei o prototipo desse objeto pra prototipo que eu passei como parametro
  f.apply(obj, params); //Vai passar o obj e params, e retornando um obj
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
