//Versão do Ecma Script 2015 surgiu o conceito de classe
//Classe é uma função

class Pessoa {
  //Uma função
}

class Lancamento {
  //Função construtora
  constructor(nome = "Generico", valor = 0) {
    //Aqui são os parametros da função construtora
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  //Função construtora
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
    //Operador spreed
    //Ele vai receber todos os lancamentos
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", "-220");

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contadeLuz);
