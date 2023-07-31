function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado que vai pertencer apenas no escopo dessa função
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    //Aqui vai deixar o metodo publico com this, que vai estar apontando para outro lugar
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    } //this torna algo publico para fora
  };
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro(); //Aqui está criando uma função construtora
uno.acelerar(); //Chamando a função acelerar a partir da instancia
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
//Tenho duas instancias diferentes a partir da mesma função construtora
