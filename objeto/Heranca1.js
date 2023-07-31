const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.__proto__);
//A partir do __proto__ consigo acessar o objeto que é objeto super ou pai do ferrari
//Se ele encontrar algum atributo desejado vai pegar isso se não encontrar ele vai procurar por toda a cadeia, e vai da undefined

console.log(ferrari.__proto__ === Object.prototype);
//Proto é estritamente igual a object.prototype? True
//Um objeto criado por padrao vai ser apontado pra Object.prototype
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); //False não tem um prototipo maior na hierarquia
console.log(Object.prototype.__proto__ === null); //True

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
