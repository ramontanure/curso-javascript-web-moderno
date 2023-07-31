//Vamos configurar o express que vai ser nosso framework web para criacao dos nossos web services
//Sempre que tiver comunicacao com rede, preciso declarar uma porta
//Porta é um processo dentro do PC, a porta é unica por processo

const porta = 3003;

const express = require("express");
const bodyParse = require("body-parser");
const app = express(); //Aqui estou chamando a função e pegando os valores

const bancoDeDados = require("./bancodedados");

app.use(bodyParse.urlencoded({ extended: true })); //Qualquer requisição ele vai passar por esse middleware e vai transformar vai fazer um Parse pra objeto

//Get é uma forma de requisiçao //   /produtos é uma url
app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
  //Função send envia uma resposta
}); //Converte para JSON automaticamente

app.get("/produtos/:id", (req, res, next) => {
  //PEGAR
  //:id é um parametro que vou passar o valor dele que vai ser um numero
  res.send(bancoDeDados.getProduto(req.params.id)); //Request.params, é o local que coloquei parametros na url e id é o parametro
});

app.post("/produtos", (req, res, next) => {
  //POSTAR
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON

  //Requisição .body, como se fosse o formulario que aparece o corpo da requisição, e quando voce envia a requisição o req pega isso assim
});

app.put("/produtos/:id", (req, res, next) => {
  //UPDATE
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id, //Aqui posso passar o parametro na url e ele pode alterar no id desejado o nome com o PUT
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON

  //Requisição .body, como se fosse o formulario que aparece o corpo da requisição, e quando voce envia a requisição o req pega isso assim
});

app.delete("/produtos/:id", (req, res, next) => {
  const deletar = bancoDeDados.excluirProduto(req.params.id);
  res.send(deletar);
});
//Vou submeter os dados e salvar o novo produto
app.listen(porta, () => {
  //Aqui o app que é o express vai ficar escutando(listen) na porta tal
  console.log(`Servidor executando na porta ${porta}`); //Console só pra saber qual porta estamos
});

//Consigo executar apenas 1 porta, nao posso ter o mesmo processo, ocupando a mesma porta

//body da req ta vindo correto, só que do lado do servidor voce precisa analisaro que veio do body e transformar isso em objeto
