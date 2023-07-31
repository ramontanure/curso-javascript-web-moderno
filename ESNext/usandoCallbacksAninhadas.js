//A ideia é obter o conteudo dos arquivos json turma A, B e C

//sem promise ....

const http = require("http"); //http é um modulo do proprio node

//Vamos fazer uma requisição e obter os resultados daqueles 3 arquivos JSON

const getTurma = (letra, callback) => {
  //Vou passar a letra A B ou C e passar uma callback que vai executar quando o arquivo estiver carregado
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`; //guardando na url o link
  http.get(url, (res) => {
    //Aqui estou pegando a url e passo uma função callback pra retornar a resposta
    let resultado = "";

    res.on("data", (dados) => {
      //Aqui é um evento de resposta que pega os dados e passo uma callback para os dados que estão chegando
      resultado += dados; //Resultado recebe os dados que estão chegando
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    }); //Terminou de chegar os dados
  });
};

let nomes = [];

getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  console.log(nomes);
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((b) => `B: ${b.nome}`));
    console.log(nomes);
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((c) => `C: ${c.nome}`));
      console.log(nomes);
    });
  });
});
