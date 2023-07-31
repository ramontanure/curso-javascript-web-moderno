function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    //Aqui tem um temporizador que dispara um função a partir do intervalo q vc passou entao vai passando
    this.idade++;
    console.log(this.idade);
  }, 1000);
} //Com esse contexto de arrow function ele vai pegar o contexto atual que foi escrito, então nao ligando pro temporizador

new Pessoa();
