//JSON == Java Script Object Notation é um formato textual

//JSON é um formato de dados, talvez o mais usado no mercado para interoperabilidade entre sistemas
//de sistemas que é voce ter um formato textual generico que não carrega com sigo
//Ele é feito pra conectar varias tecnologias diferentes, voce consegue ler ele em varias linguagens
//Ele é usuado em comunicações de sistemas
//Exemplo é com web service, e tambem como migração de dados entre sistemas e tambem com configurações internas
//Formato de dados, não é algo que é executado como uma função

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    a + b + c;
  },
};

console.log(JSON.stringify(obj)); //Aqui estou convertendo o objeto para JSON
//console.log(JSON.parse("{a:1, b: 2, c: 3}")) //Não é um formato JSON valido, aqui estou passando de JSON para Objeto
//console.log(JSON.parse("{'a': 1, 'b': 2}")) //Não é um formato valido

//Todos os atributos de um JSON deve ser de aspas duplas

console.log(JSON.parse('{"a": 1, "b": 2}")'));
console.log(JSON.parse('{"a": 1, "b": "string", "c": true})'));
