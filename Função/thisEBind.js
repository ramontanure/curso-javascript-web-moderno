const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    //Aqui é uma função que a partir do ecmascript 2015 pode ser criado assim dentro tambem de um objeto
    console.log(this.saudacao);
  }, //Estou acessando saudacao de quem? Do objeto do qual é o dono da função quem é o dono? pessoa
};
pessoa.falar(); //Aqui estou chamando a função passando o objeto e chamando a função que está dentro dela
const falar = pessoa.falar;
falar(); //Conflito entre paradigmss: funcional e OO

//Aqui vai ser contexto diferente por que const falar nao recebe o contexto que está dentro de pessoa, assim gerando conflito

const falarDePessoa = pessoa.falar.bind(pessoa); //Aqui o bind vai referenciar que o objeto pessoa é o contexto global do this e assim pegando
//Aqui falardePessoa vai receber o contexto atraves do bind passando o contextoatual e assim pegando o this.saudacao
falarDePessoa();

const cachorro = {
  raca: "pincher",
  name: "Bob",
  diga() {
    //Padrao do ecma script
    console.log(`A raça é ${this.raca} e o nome é ${this.name}`); //Aqui ele acessou o atributo raca de qual o dono da função é o objeto cachorro, assim o this sendo o cachorro
  }, //Então aqui o this está apontando para o dono do objeto é o cachorro assim podendo acessar dados dentro do objeto como os atributos(chave e valor)
};
cachorro.diga(); //Aqui estou fazendo referencia do cachorro que é o dono do objeto para pegar a função que é filho dela

const cach = cachorro.raca;
//cach(); //Aqui nao vai funcionar por que tem conflitos com paradigmas funcionas e Orientacao a objetos
//Entao para a resolução disso é necessario usar o bind que vai fazer a referencia do que o this está apontando para a funçao

const cacho = cachorro.raca.bind(pessoa);
cacho();

//Então o this pode variar de acordo com a chamada
