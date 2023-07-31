//Objeto é uma colecao dinamica de pares chave/ valor

const produto = new Object(); //Aqui a variavel produto está recebendo um novo objeto, aqui ta instanciando um objeto

produto.nome = "Cadeira"; //Aqui atraves da criação do objeto produto, ta criando atributos atraves da notação ponto e criou o atributo nome com o valor cadeira

produto["marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto); //Posso criar atributos dinamicamente

delete produto.preco; //Deletar atributos
delete produto["marca do produto"];
console.log(produto);

const carro = {
  //Pares de chave e valor
  modelo: "A4",
  valor: 89000,
  proprietario: {
    //Um objeto dentro de carro
    nome: "Raul",
    idade: 56,
    endereco: {
      //um objeto dentro de proprietario
      logradouro: "Rua Abc",
      numero: 123,
    },
  },
  condutores: [
    {
      //Array de objetos
      nome: "Junior",
      idade: 19,
    },
    {
      //Segundo objeto dentro desse array marcado pela virgula
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    //Funções (Procedimentos) dentro do objeto carro
    //...
  },
};

//Posso acessar os atributos a partir da notação ponto

carro.proprietario.endereco.numero = 1000; //Aqui ta modificando
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"; //Aqui estou acessando igual a notaçao ponto
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
console.log(carro.condutores); //Nao vai da erro por que carro existe, entao pode ter qualquer coisa no carro então vai da undefined
