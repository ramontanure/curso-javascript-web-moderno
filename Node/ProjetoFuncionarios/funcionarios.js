//Ele é um arquivo descritor de um projeto em node
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios"); //Aqui estou pegando a lib axios e colocando na variavel axios

//Axios ele obtem informações de algo que está remoto, fazendo requisições
//Para objeter esse arquivo que está em outro servidor e poder a fazer alterações vamos usar o axios que vai fazer requisiçoes
const china = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";

const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const func = funcionarios.filter(china).filter(mulheres).reduce(menorSalario);

  console.log(func);
});
//Metodo get serve para obter informações do servidor(pegar)
// e quando a requisição retornar ele vai chamar um metodo chamdo then
