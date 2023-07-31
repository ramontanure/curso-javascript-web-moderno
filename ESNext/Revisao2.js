//Arrou function, função de seta

const soma = (a, b) => a + b; //QUando nao tem corpo da funçao ela faz retorno implicito e 2 parametros se fosse só 1 nao precisa de parenteses
//Ela é uma função anonima, sintaxe reduzida
console.log(soma(2, 3));

//Com o corpo de uma função é obrigado a passar um return

//Arrow Function (this)
//This de uma arrow ela está associado ao module.exports, que é o local o qual a função foi definida

const lexico1 = () => console.log(this === exports); //Sempre vai apontar pra exports, se fosse uma função tradicional ia apontar para global
const lexico2 = lexico1.bind({});

//Não adianta, o arrou garante que ele aponte para exports, assim não passando a apontar para um objeto
lexico1();

//this pode variar de acordo com a chamada da função

//parametro default

function log(texto = "Node") {
  //Voce pode definir um valor padrao de parametro
  console.log(texto);
}

log(undefined);

//operador rest (agrupar) no contexto da função o correto seria rest

function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(2, 3, 4, 5));
