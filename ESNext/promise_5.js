function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        //0 e 1 é menor que chanceErro?? Ocorreu um erro se não mostre o valor
        reject("Ocorreu um erro");
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => console.log(v))
  .catch((err) => console.log(`Erro: ${err}`)) //Aqui estou tratando o erro com o catch
  .then(() => console.log("Fim")); //POde colocar um then mais depois do catch voce nao vai ter mais dados
//O catch por via de regra coloque na ultima posição
//Vode pode tratar um erro especifico atraves do then colocando outro parametro err
//Catch no final, por que o then perde de valor quando recebe um erro, assim colocando sempre no fim, pra pegar de todos
