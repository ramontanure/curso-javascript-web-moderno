class Avo {
  //Aqui é uma função construtora que tem como parametro sobrenome
  constructor(sobrenome) {
    this.sobrenome = sobrenome; //Aqui vou deixar variavel sobrenome publica e pegando o valor da instancia que eu fizer futuramente
  }
}

class Pai extends Avo {
  //Aqui ta falando que pai tem como prototipo(pai) o Avo
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); //Estou chamando o constructor do pai que é o AVO e passando pra ele o sobrenome
    //Ele passou super para instanciar um função construtora da super classe
    this.profissao = profissao; //Quando estou fazendo this.profissao estou atribuindo a profissão ao objeto que foi instanciando
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho = new Filho(); //Instanciando FIlho
