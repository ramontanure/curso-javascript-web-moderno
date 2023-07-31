const fs = require("fs");

const path = require("path");

function consumo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
  });
}

const caminho = path.join(__dirname, "dados.txt");

consumo(caminho).then((conteudo) => console.log(conteudo));
