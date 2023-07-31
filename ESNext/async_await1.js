function esperarPor(tempo = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, tempo);
  });
}

// esperarPor(2000)
//   .then(() => console.log("Executando promise 1...."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 2...."))
//   .then(esperarPor)
//   .then(() => console.log("Executando promise 3...."));

//A ideia do async e await é exatamente é voce ter um código que parece sincrono embora é assincrono
//Em vez dele chamar a função then ele vai ficar parado esperando a execucao e só vai pra proxima linha quando terminar a execucao

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 5000); //Essa função vai demorar 5 segundos pra retornar esse valor 10
  });
}

const executar = async () => {
  //Com a função assincrona voce tem a capacidade de esperar dentro dela que determinada promisse seja resolvida sem usar o metodo then
  let valor = await retornarValor(); //Aqui eu quero esperar que essa função seja executada
  //Vou precisar que esse valor seja resolvido pra só então motrar o esperarPor
  await esperarPor(2000); //Aqui é como se voce tivesse pegando o valor de resposta dessa funcao
  console.log(`Aync/Await ${valor} ...`);
  await esperarPor(2000);
  console.log(`Aync/Await ${valor + 1} ...`);
  await esperarPor(2000);
  console.log(`Aync/Await ${valor + 2} ...`); //Sempre que tem uma função que retorna promise posso usar ela junto com o await

  return valor + 3;
};

// const v = executar(); //Aqui nao da por que a função devolve uma promise
// console.log(v);

const executarDeVerdade = async () => {
  const valor = await executar();
  console.log(valor);
};
executarDeVerdade();

executar().then(console.log);

//Se eu quero que a promise espere ser resolvida e só então ir pra proxima linha

//Por traz do async e await tem que ter uma promise
