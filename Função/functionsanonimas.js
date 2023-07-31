const soma = function (x, y) {
  //Função sem nome
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};
imprimirResultado(3, 4);
imprimirResultado(3, 5, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y; //Diretamente dentro do Resultado do parametro ele passou outra somando
});
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log("Opa");
  },
};

pessoa.falar(); //Voce acessa a partir de um atributo do objeto que vc definiu
