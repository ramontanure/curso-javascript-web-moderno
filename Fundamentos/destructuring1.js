//Novo recurso do ES2015

const pessoa = {
  //Esse aqui é um objeto pessoa
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);
//Tire de dentro do objeto pessoa o atributo nome e idade qual objeto = pessoa

const { nome: n, idade: i } = pessoa; //Aqui está mudando o valor da chave de nome para n
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; //Aqui esses atributos nao existem dentro do objeto e ficou undefined
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa; //Aqui ele acessou o obejto endereco dentro de pessoa e assim mostrando o resultado
console.log(logradouro, numero);

//const{conta: {ag, num}} = pessoa //ERRO não é um objeto
//console.log(ag, num)

//Destruturação
