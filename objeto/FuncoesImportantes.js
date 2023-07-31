const pessoa = {
  //objeto literal
  nome: "Rebeca", //chave/valor
  //Atributos do objeto pessoa
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); //Quero pegar todas as chaves dentro do objeto pessoa
console.log(Object.values(pessoa)); //Pega todos os valores do objeto pessoa
//console.log(Object.freeze(pessoa)); //Vai congelar todos os valores
console.log(Object.entries(pessoa)); //Vai te da um array com todos os arrays e sub arrays com chave e valor

Object.entries(pessoa).forEach((e, chave) => {
  console.log(`${chave}: ${e[1]}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  //Aqui vai defenir propriedades e receber como objeto pessoa, criando um atributo dataNascimento, e definindo as propriedades no escopo
  enumerable: true,
  writable: false,
  value: "01/01/2019", //Aqui vai ser tipo o freeze então como a propriedade foi definida nao tem como alterar
});

pessoa.dataNascimento = "01/01/2017"; //Aqui nao vai aparecer pois as propriedade passada foi fixa como um freeze
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa)); //Aqui vai pegar as chaves do objeto pessoa que vai poder receber

//Object.assign (Ecma sCRIPT 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 }; //O a vai sobrescrever
const obj = Object.assign(dest, o1, o2); //Aqui o metodo assign vai pegar o primeiro parametro como principal, e vai jogar todos os outros objetos que foram passados como parametros dentro dele
//Ele vai concatenar os outros alem do primeiro para o primeiro
