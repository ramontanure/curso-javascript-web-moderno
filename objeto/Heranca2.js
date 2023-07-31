// Cadeia de protótipos(prototype chain)

Object.prototype.attr0 = "0"; //não faça isso em casa
const avo = { attr1: "A" };
const Pai = { __proto__: avo, attr2: "B" }; //Definindo qual é seu pai, e definindo seu atributo como chave/valor
const Filho = { __proto__: Pai, attr3: "C" }; //Com o metodo proto ele define quem é seu pai

console.log(Filho.attr0, Filho.attr1, Filho.attr2, Filho.attr3);
//Aqui ele acessa toda a cadeia de objeto atraves dos prototipos, por que ta falando que seu pai é o pai e o pai de seu pai é avo e o pai do avo é o object.prototype, que cria um atributo chamado attr = '0' que ele vai encontrar isso dentro
//Assim o maior pai de todos ele aponta pro objectprototype, que vai da undefined caso não encontrar nada
//E quando O pai recebe attr3, e o filho tiver primeiro, ele sobrescreve, como uma sombra, como se fosse no escopo de uma função se ele tivesse uma constante dentro dela ele não procuraria outra constante fora dela

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //shadowing significa sombreamento
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; // Super se chamar o this vou ficar chamando de forma recursiva o mesmo metodo, mais quero metodo proto
  }, //this.modelo é o modelo do objeto atual e se não encontrou vai procurar nos prototipos
};

Object.setPrototypeOf(ferrari, carro); //Estabele a relação entre prototipo
//Primeiro parametro é o objeto, e o segundo parametro é o prototipo, nesse momento estou referenciando ferrari com carro
//ferrari tem carro como seu prototipo(pai)
//mesma coisa que __proto__: carro
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(100);
console.log(ferrari.status());
