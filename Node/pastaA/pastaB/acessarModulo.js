const moduloA = require("../../moduloA"); //Aqui é um caminho relativo
const demonstracao = require("/home/ramontanure/Documentos/Cursos/CursoUdemyJavaScript/Node/moduloA.js"); //Não faz sentido acessar dessa forma
console.log(moduloA.ola);
console.log(demonstracao.ateLogo);

//Voce pode importar também modulos que vem previamente instalados com o node

const c = require("./pastaC/index"); //Posso importar a pastaC e não preciso importar o nome do arquivo ja pegando ./pastaC
console.log(c.ola2);

// const http = require('http') //Modulo interno do node
// http.createServer((req, res) => { //Aqui estou criando um server http passando como parametro uma call back com a requisição e uma resposta
//     res.write('Bom dia!') //Estou respondendo uma requisicão
//     res.end() //finaliza a requisição

// }).listen(8080) //Ta escutando na porta 8080
