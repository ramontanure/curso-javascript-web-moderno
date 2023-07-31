const valor = "Global";

function minhaFuncao() {
  //O resultado da exec da função será Global, pois o contexto lexico da função MinhaFunção está no contexto Global que é o arquivo contextoLexico
  console.log(valor); //A funçao carrega consigo o local que foi definida que é o contexto lexico
}

function exec() {
  const valor = "Local";
  console.log(valor);
}

exec();
