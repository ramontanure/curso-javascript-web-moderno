//Aqui estou importando
const express = require("express");
//Aqui estou instanciando para pegar os valores
const app = express();
const bodyParser = require("body-parser");

//urlencoded é um padrao que quando voce submete um formulario, entao ele precisa fazer um parse
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp) => {
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuario Incluido</h1>");
});

app.post("/usuarios/:id", (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send("<h1>Parabéns. Usuario Alterado</h1>");
});

app.listen(3003);
