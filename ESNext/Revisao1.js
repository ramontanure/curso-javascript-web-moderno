//EcmaScript é o nome oficial de JavaScript, ecmaScript é uma especificacao
//E javaScript é uma linguagem que atende essa especificação

//let e const duas novas palavras reservadas
//Let ela tem escopo de bloco, função e global

{
  var a = 2;
  let b = 3;
}

console.log(a); //Aqui eu consigo pois não tenho impedimento, escopo de bloco
//console.log(b); //NÃO CONSIGO POIS TENHO ESCOPO DO BLOCO, APENAS LA DENTRO

//Template String
//Voce delimita template com crases e dentro dele voce pode usar variaveis que tem dados, e até somas matematicas pra retornar para seu usuario
//O valor da variavel é interpolado, interpretado

const produto = "Ipad";
console.log(`${produto} 
é
caro`); //Além disso ele quebra a linha nao precisando do \n

//Destructuring desestruturar um elemento, atributo desejado e conseguindo acessar ele
//Tirar de dentro de uma estrutura, pegar de dentro algo, seja de um array, objeto, string

const [l, e, ...tras] = "Cod3r"; //Vai ser atributo letras no lugar de coder
//Operador rest, de agrupar tudo agrupando l, e, tras
console.log(l, e, tras);

const [x, y] = [1, 2];
console.log(x, y);

const obj = {
  idade: 19,
  nome: "Ramon",
};

const { idade, nome } = obj;
console.log(idade, nome);

const { cidade, cep } = { cidade: "Curvelo", cep: 123 }; //Tirando atributos dentro de um objeto
console.log(cidade, cep);
//Posso renomear a desistrutacao
