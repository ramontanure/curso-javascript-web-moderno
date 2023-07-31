//Pessoa aponta pra um endereco de memoria 123 ex -> {objeto}
const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";
//Quando eu adiciono esse atributo é por que o objeto pessoa aponta para o endereco de memoria 123 nao pro objeto
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

//Como constante vai apontar para o mesmo endereco, criando por exemplo outro objeto

Object.freeze(pessoa); //Congelando o objeto pessoa, voce nao consegue mais mecher no objeto

pessoa.nome = "Maria"; //Nao vai funcionar, mais tambem nao vai gerar um erro
console.log(pessoa.nome); //Congelou

const pessoaConstante = Object.freeze({ nome: "Joao" });
console.log(pessoaConstante);
