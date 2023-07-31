function Pessoa(nome) {
  this.nome = nome; //Aqui deixa como referencia para poder pegar fora tambem

  this.falar = function () {
    //Aqui ta deixando como referencia para fora
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new Pessoa("Joao"); //Aqui está instanciando e colocando na variavel p1 uma nota pessoa chamada joao
p1.falar(); //Aqui vai pegar a nova pessoa e executar a função do console.log
