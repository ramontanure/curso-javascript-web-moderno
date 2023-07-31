function soNoticiaboa(nota) {
  //Nome = soNoticiaboa recebe a nota como parametro
  if (nota >= 7) {
    //Expressão relacional
    console.log("Aprovado com " + nota);
  }
}
soNoticiaboa(8.2); //Chama a função e passa 8.2 como o valor da nota
soNoticiaboa(6.1); //Aqui vai da false e nao vai mostrar

function seForVerdadeiroEuFalo(valor) {
  if (valor) {
    console.log("É verdade ..." + valor);
  }
}

seForVerdadeiroEuFalo(); //Falso
seForVerdadeiroEuFalo(null); //Falso
seForVerdadeiroEuFalo(undefined); //Falso
seForVerdadeiroEuFalo(NaN); //Falso
seForVerdadeiroEuFalo(""); //Falso
seForVerdadeiroEuFalo(0); //Falso
seForVerdadeiroEuFalo(-1); //Verdadeiro o valor
seForVerdadeiroEuFalo(" "); //Verdadeiro o valor
seForVerdadeiroEuFalo("?"); //Verdadeiro
seForVerdadeiroEuFalo([]); //Verdadeiro
seForVerdadeiroEuFalo([1, 2]); //Verdadeiro
seForVerdadeiroEuFalo({}); //Verdadeiro
