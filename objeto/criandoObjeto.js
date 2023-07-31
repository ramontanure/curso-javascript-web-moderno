// usando a notação literal

const obj1 = {
  //Abre e feicha colchetes
};

//Object em js
console.log(typeof Object,typeof new Object()); // Object é uma função então eu crio e instancio um objeto atraves da função object que o valor vai ser objeto

const obj2 = new Object();
console.log(obj2);

//Funcoes construtoras
//É a mesma da linha 10 mais é uma função minha
function Produto(nome, preco, desc) {
  this.nome = nome; //Estou tornando a variavel nome publica com o this
  //Essa variavel nao está encapsulada dentro do objeto, ela está visivel para fora do objeto
  //JavaScript let e const apenas no bloco, window que é o escopo global,4
  //No browser  temos o escopo window que é global, escopo da função e escopo das variaveis let e const
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

//Se eu quiser acessar para alterar só vou poder acessar o nome por que está visivel pra fora com o this, o preco e o desc nao pq ele ta encapsulado, interno dentro da função construtora
const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory

function CriarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = CriarFuncionario("João", 7980, 4);

console.log(f1.getSalario());

// Object.create

const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Um função famosa que retorna objeto...

const fromJson = JSON.parse('{"info": "Sou um Json"}');
console.log(fromJson.info);
