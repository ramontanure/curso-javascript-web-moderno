//ES8: Object.values/Object.entries
//values vai me da os valores, e entries vai me da uma matriz com cada atributo chave e valor

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Melhorias na Notacao literal

const nome = "Carla";
const pessoa = {
  nome, //Aqui nao precisa criar um atributo nome, ele ja cria altomaticamente passando o nome para nome
  ola() {
    return "Oi gente!";
    //Não precisa colocar a palavra function
  },
};

console.log(pessoa.nome, pessoa.ola());

//Class

class Animal {}
class Cachorro extends Animal {
  //Aqui o pai de cachorro é animal
  falar() {
    return "Au au!";
  }
}

console.log(new Cachorro().falar());

//Criar um objeto dentro de uma class, usar a palavra reservada new
