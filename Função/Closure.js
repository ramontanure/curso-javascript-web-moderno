// Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variaveis externas à função

//Contexto Léxico em ação

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    //O contexto da declaração da função de dentro foi declarada dentro da função fora
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
