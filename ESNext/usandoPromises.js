//A ideia é obter o conteudo dos arquivos json turma A, B e C

//com promise ....

const { rejects } = require("assert");
const http = require("http"); //http é um modulo do proprio node
const { resolve } = require("path");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    //Na hora de instanciar uma promisse voce passa 2 funções que é o resolve, e o reject como callback
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      }); //Os dados não chega todos de uma vez, ele vai compondo, e quando chega completo chama o resolve

      res.on("end", () => {
        try {
          //Se conseguir fazer o parse direito vou chamar o resolve
          resolve(JSON.parse(resultado));
        } catch (e) {
          //Caso não de certo vou cair no catch e chamar o reject
          reject(e);
        }
      });
    });
  }); //A função resolve é quando a promise é atendida
};

let nomes = [];

getTurma("A").then((alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  console.log(nomes);
  getTurma("B").then((alunos) => {
    nomes = nomes.concat(alunos.map((b) => `B: ${b.nome}`));
    console.log(nomes);
    getTurma("C").then((alunos) => {
      nomes = nomes.concat(alunos.map((c) => `C: ${c.nome}`));
      console.log(nomes);
    });
  });
});

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) //Esse promise all vai ficar esperando as promises serem resolvidas ou rejeitadas
  .then((turmas) => [].concat(...turmas)) //Tenho todos os elementos em um unico array
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes));

//Ai faço o then e pego os resultados de todas as turmas
//Essa função all posso passar varias promises para ela e quando todas elas forem resolvidas, ela chama a cadeia dos metodos then
//Ela fica escutando esperando todas as promessas forem resolvidas

getTurma("D").catch((e) => console.log(e));

//Unexpected Tojen não veio JSON e quando ele tentou fazer um parse
//Fazer o tratamento de erro
