const fs = require("fs");
const caminho = __dirname + "/arquivo.json"; //Aqui estou pegando o direto atual + o nome do arquivo

//Esse arquivo vou usar tanto pra ler de forma sincrona quanto assincrona

//Ler de forma sincrona não vale apenas por que ele vai liberar o arquivo até quando ele totalmente tiver carregado
//Sincrona
//Cuidado por que se o arquivo for pesado, ele entra no event loop e demorando pela forma sincrona

const conteudo = fs.readFileSync(caminho, "utf-8"); //Para ler de forma sincrona é fs que é sistema de arquivos, e colocar readFileAsync que vai ler a sincronização de arquivo
//Vou passar o caminho pra ele ler, e tambem vou passar o incode utf-8 que foi passado dentro do arquivo.json e que esta na variavel caminho
console.log(conteudo); //Assim entao lendo o arquivo

//assincrono...
//Aqui vou ler de forma assincrona passando o caminho, e o incolde
//E vou passar uma callback e nela quando eu tiver lido o arquivo ele chama essa callback e podendo fazer essas transformações em cima do arquivo

fs.readFile(caminho, "utf-8", (err, conteudo) => {
  //Primeiro que eu passo é o erro, e o conteudo do arquivo
  const config = JSON.parse(conteudo); //Só vai funcionar esse de baixo de config for um objeto
  console.log(`${config.db.host}: ${config.db.port}`);
});

//Para converter string para objeto é JSON.parse

const config = require("./arquivo.json"); //Como não é JS, tem que dizer exatamente qual é o arquivo

console.log(config.db); //Esse executou antes de fs readFIle, por eser um sincrono e outro assincrono

//Leitura de pasta

fs.readdir(__dirname, (err, arquivos) => {
  //__dirname é uma constante que está presente em todos os arquivos node que representa o diretorio atual
  console.log("Conteudo da pasta...");
  console.log(arquivos);
}); //Leia um diretorio, diretorio atual, e passe uma callback com os erros e arquivos
