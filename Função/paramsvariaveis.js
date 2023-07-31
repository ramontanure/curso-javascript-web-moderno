function soma() {
  let soma = 0; //Isso aqui vai recuperar parametros função
  for (let i in arguments) {
    //Vai pegar indice dentro de arguments
    soma += arguments[i]; //Arguments é um array(vetor) interno de uma função que tem todos os argumentos que foram passados
  }
  return soma;
} //Ele ta concatenando se passar uma string vai

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
