const escola = "Cod3r";

console.log(escola.charAt(4));
//CharAt serve para olhar qual letra está na posicão 4
console.log(escola.charAt(5)); // Não achou um char na posicao 5
console.log(escola.charCodeAt(3)); //Pega o valor da tabela unicode ASK
console.log(escola.indexOf("3")); //Pega o valor do indice na posição da letra ou numeor exemplo: indice 0 letra C R: 0

console.log(escola.substring(1)); //Vai pegar da posição do indice 1 para frente  e escerever
console.log(escola.substring(0, 3)); //Vai do incice zero ate o indice 2 não vai ate o 3

console.log("Escola ".concat(escola).concat("!")); // concatenou a variavel escola com o valor Coder com as literais Escola e !
console.log("Escola " + escola + "!"); //Mesma coisa do de cima

console.log(escola.replace(3, "e")); // Replace serve para fazer uma troca de um valor na variavel por outra letra ou numero

console.log("Ana, Maria, Pedro".split(",")); //Vai gerar um array(vetor) com tres elementos separados por ,
