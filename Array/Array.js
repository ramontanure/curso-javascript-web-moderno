//Array é um objeto, objeto especial
//Ele organiza atraves do indice em vez de chave e valor
//Primeiro elemento do indice é 0
//Organizando seus dados a partir do indice

console.log(typeof Array, typeof new Array(), typeof []); //É um objeto , o new é por que ele ta instanciando

//Array é uma estrutura heterogenea como por exemplo colocar um number, string, boolean
//Trabalhar com dados homogeneos, apenas com um tipo de dado, boa pratica

let aprovados = new Array("Bia", "Carlos", "Ana"); // Aqui estou instanciando um novo array dentro de aprovados com esses valores não é uma forma recomendada
//instanciei a partir da função array

console.log(aprovados);

aprovado = ["Bia", "Carlos", "Ana"]; //Notação literal(recomendada)
console.log(aprovados[0]); //Retorna bia
console.log(aprovado[1]);
console.log(aprovado[2]);
console.log(aprovado[3]); //Retorna undefined

aprovado[3] = "Paulo"; //Aqui estou adiciando um novo elemento no array
aprovado.push("Abia"); //Mais recomendado para adicionar elementos dentro de um array
console.log(aprovado.length); //Aqui estou pegando o tamanho de aprovado, que vai ser 5 elementos

aprovado[9] = "Rafael"; //Aqui pode passar valores de indices na frente os que ficarem no meio vao ficar undefined
console.log(aprovado.length);
console.log(aprovado[8] === undefined);

console.log(aprovado);
aprovado.sort(); //metodo sort vai ordernar o array
console.log(aprovado);

delete aprovado[1]; //Forma de excluir usando delete, deleta o indice 1
//Mesmo que voce deletou o elemento de indice 2 na frente do 1 vai continuar sendo 2 e ele vai se tornar undefined
console.log(aprovado[1]);
console.log(aprovado[2]);
//O array não foi reordenado depois que voce colocou o delete, o indice dele fica undefined

aprovado = ["Bia", "Carlos", "Ana"];
aprovado.splice(1, 1);
//Primeiro elemento passado para o parametro vai ser o indice que quero trabalhar
//Na altura do elemento 1 vai excluir o elemento 1
//Se eu quisesse excluir dois elementos?? Ia começar a partir do indice 1 e colocasse 2, excluiria toda aquele space de 1 a 2 exemplo
console.log(aprovado);
//Ela serve para adicionar elementos e tambem pra remover elementos, e remover e adicionar ao mesmo tempo

aprovado.splice("Elemento1", "Elemento2"); //Aqui ele ta adicionando elementos dentro de um array
//Voce consegue inserir em determinado indice, excluir em determinado indice

//Obs:: Os elementos de um array são organizados a partir de indices
//Um array não tem uma estrutura propria chamada array, e sim um objeto
