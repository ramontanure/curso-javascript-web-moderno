const a = 1;
const b = 2;
const c = 3;

//Ecma antigo
const obj1 = { a: a, b: b, c: c }; //Aqui ta pegando os valores da constante mais com essas repitocoes

//Ecma 2015
const obj2 = { a, b, c }; //Aqui ja pega o valor
console.log(obj1, obj2);

const nomeAttr = "nota";
const valorAttr = 7.7;

const obj3 = {};
obj3[nomeAttr] = valorAttr; //Com os colchetes eu consigo pegar o valor do nome
console.log(obj3);

//Com o objeto da pra pegar valores de uma constante e inicializar como atributo recebendo outra constante como atributo

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  funcao1: function () {
    // ...
  },
  funcao2() {
    //Definir objeto da versao objeto em uma versão mais nova
  },
};
