function Pessoa() {
  this.idade = 0; //No momento que eu instanciar essa função, criar um objeto a partir dessa função vou ter o atributo idade para que eu possa manipular
  setInterval(
    function () {
      //SetInterval dispara outra função a partir do intervalo que voce passou
      this.idade++;
      console.log(this.idade);
    }.bind(this), //this aponta pra pessoa
    1000
  ); //A cada x segundos essa funçao vai ser disparada direto
}

new Pessoa(); //Aqui está instanciando a função e passando o objeto
