module.exports = function (...nomes) {
  //Argumento variavel, que voce pode passar quantos nomes q vc quiser dentro de array
  return nomes.map((nome) => `Boa semana ${nome}`); //Peguei o array nomes e quero mapear cada nome desse array e mandando uma mensagem para cada nome funcao callback
};
