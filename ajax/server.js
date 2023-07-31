// Responsavel por fazer o parse do body da requisição, quando fizer um request e se eu mandar dados dentro desse request ele vai interpretar esses dados e deixar esse dado pronto pra ser manipulado dentro desse arquivo

const bodyParser = require("body-parser");
// const { response } = require("express");
const express = require("express");
// Instanciei o Express
const app = express();

// Vou começar a definir os midlewares que serão aplicados sempre que ocorrer uma requisição
// Nada mais é uma função que vai ser executada quando uma determinada requisição chegar
// Use no app, e dentro da pasta atual onde o server.js está,  sirva os arquivos estáticos, os arquivos html, js, fontes, dados, css
app.use(express.static("."));
// E se vier algum formato atraves de um submit de um formulario vai ser responsavel por ler os dados e transformar isso em objeto
app.use(bodyParser.urlencoded({ extended: true }));
// Se vier json dentro da requisição esse código que vai transformar json em objeto
app.use(bodyParser.json());

// Arquivo do upload
const multer = require("multer");

// Dentro do multer voce tem a função diskStorage que recebe um objeto serve para configurar a pasta q vc vai salvar os arquivos, e personalizar o arquivo para salvar ele

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    //Qual a pasta de destino que quero armazenar o arquivo
    // Armazenar na pasta atual dentro de upload
    callback(null, "./upload");
  },
  // Função chamada no momento que ele vai escolher o nome do arquivo
  filename: function (req, file, callback) {
    // Vou passar a pasta atual o nome do arquivo padrao q ele use o arquivo
    // Quero que ele use o nome original que ja veio só que antes do nome original colocar Date.now que é a data atual
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
// E digo que vou receber a requisição com esse nome arquivo
const upload = multer({ storage }).single("arquivo");

// Vai ser via post pra fazer requisição desse arquivo
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.end("Ocorreu um erro.");
    }
    res.end("Concluído com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.get("/parOuImpar", (req, res) => {
  // req.body
  // req.query
  //req.params
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? "par" : "impar",
  });
});

// Quando vier uma requisição do tipo get nessa url /teste chama essa função callback e retorna request e response
app.get("/teste", (req, res) => {
  // Vai retornar OK
  res.send("ok");
});

app.listen(8080, () => console.log("Executando..."));
