//Promise nada mais é que uma promessa
//Voce usa promise quando voce quer um tipo de processamento assincrono, que voce nao faz uma coisa ao mesmo tempo
//Uma promisse tem dois grandes destinos, não só esses dois, que é ela ser resolvida, ser atendida ou seja a promessa foi cumprida
//Ou a promessa foi rejeitada

//É praticamente a mesma ideia de uma callback, ela te retorna ok ou erro
//A promise é uma estrutura que tem por objetivo representar uma operação assincrona e ele trabalha no conceito da promessa que pode ser atendida ou rejeitada

//Settimeout pra representar essa ideia do assincrono

function falarDepoisDe(segundos, frase) {
  //Temos dois parametros a quantidade de segundos que vou esperar e a frase que vou falar
  return new Promise((resolve, reject) => {
    //Retornando uma promessa
    resolve(frase); //Chamando a função resolve e passando a frase pra ser retornada sucesso
    //Retornando aqui uma promessa que vai receber uma callback
  }); //Esse parametro resolve vai ser uma função que será chamada quando a promessa for atendida
  //Duas palavras mais usadas como parametros no mundo das promises
} //Resolve é quando a promessa é resolvida, e reject é quando voce quer rejeitar essa promessa

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?")) //Essa frase que coloquei no resolve(frase) vai ser passada pro then
  .then((outrafrase) => console.log(outrafrase))
  //Pra acessar o resultado de uma promessa atendida de forma correta chamo a função then
  //Quando retorno uma promisse a promisse tem uma função then ela é chamada quando voce resolve a promisse passando o objeto que vc deseja passar pra função then
  //Promise aceita apenas um unico parametro no resolve

  //Para tratar a mensagem de erro .catch
  .catch((e) => console.log(e));
