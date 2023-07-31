function MeuObjeto() {} //Criacao de uma função
console.log(MeuObjeto.prototype); //Aqui o prototipo da função MeuObjeto é um objeto vazio

const obj1 = new MeuObjeto(); //Aqui a variavel obj1 recebe uma nova instancia de MeuObjeto
const obj2 = new MeuObjeto(); //Aqui a variavel obj2 recebe uma nova instancia de MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__); //Aqui está verificando se o obj1.prototipo é estritamente igual ao obj2.protoritipo
//true o prototipo da função construtora vai apontar pro mesmo prototipo
//A função construtora é diferente de declaracao de objetos literal, pois o obj1.__proto__ aponta pra funcao.prototype, no outro é outra coisa, Object.prototype

console.log(
  MeuObjeto.prototype === obj1.__proto__
    ? "Sim pois o obj1 aponta pro {} e o meuobjetotambem"
    : false
);

MeuObjeto.prototype.nome = "Anonimo";
//Todo objeto que for criado em cima da função construtora, vai ter como prototipo o atributo nome
//console.log(obj1.__proto__ === MeuObjeto.prototype);
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}`);
};

obj1.falar(); //Aqui como o obj1 aponta pro mesmo do MeuObjeto.Prototype ele pegou a função falar, e o atributo nome

obj2.nome = "Rafael"; //Criou um atributo dentro do objeto obj2
obj2.falar(); //Aqui sobrescreve o mais proximo

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; //Aqui em vez da obj3 apontar pra Object.Prototype passei pra ela pra apontar pra Funçao.Prototype
//Vou ter acesso a tudo
obj3.nome = "Obj3";
obj3.falar();

//Resumindo a loucura
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); //True
console.log(MeuObjeto.__proto__ === Function.prototype); //Função ele tem o atributo __proto__ e aponta por padrao pra Function.prototype
