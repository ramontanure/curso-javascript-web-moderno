const http = require("http");

const getTurma = (letra) => {
  //Função que retorna uma promisse de forma assincrona
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      }); //Ensinando como parecer de forma mais sincrona, o código vai ser mais sincrono
    });
  });
};

//Recurso do ES8
// Objetivo de simplificar o uso de promises... É usado junto com promise, o objetivo dele é simplificar o código assincrono tornando ele com uma pegada sincrona

//O primeiro passo é criar uma função e marcar a palavra async, a palavra await só vai funcionar se a função estiver marcada com async

let obterAlunos = async () => {
  //Async é assincrono
  //Aqui dentro posso utilizar a palavra await(aguardam)
  const ta = await getTurma("A"); //Atributindo o resultado do turma a á constando ta
  const tb = await getTurma("B");
  const tc = await getTurma("C");

  return [].concat(ta, tb, tc);
}; //Estou pegando o resultado de forma mais sincrona em vez do then e ter acesso a turma A, retorno simplesmente usando o await, o resultado vai ser atribuido a ta
//Por mais que retorno um array, ela vai retornar um objeto chamado async function

obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes));

//Sempre que eu tiver lidando com uma função que retorna uma promise eu posso simplesmente colocar um await
//E essa função só vai pro proximo passo se ela for resolvida ou se tiver rejeitada
