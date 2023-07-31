//Escrever um arquivo

const fs = require("fs"); //Require do modulo do node fs

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

//Quero pegar esse objeto e salvar no disco
//Posso pegar um objeto e transformar para json JSON.StringFy

fs.writeFile(
  __dirname + "/arquivoGerado.Json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo salvo!");
  }
); //Escrever arquivo passando de objeto para JSON
//Aqui passo o diretorio atual e o arquivo que quero gerar e depois passo o conteudo passado para JSON
//E depois eu passo a callback que recebo apenas como resposta o erro, se tiver posso fazer tratamento
