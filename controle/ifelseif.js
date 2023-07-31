const Entre = function (num) {
  if (num >= 10) {
    console.log("Aprovado");
  } else if (num > 4 && num < 7) {
    console.log("Media");
  } else if (num > 1 && num < 5) {
    console.log("Reprovado ");
  }
};
Entre(10);
Entre(5);
Entre(2);

Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim; //Vou acessar com a palavra this o Number que é o valor atual
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra");
  } else if (nota.entre(7, 8.99)) {
    //Vai chamar a função entre e colocar os valores dos parametros
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota Invalida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(5);
