const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica"); //Tanto os dois compartilha do mesmo objeto

const contadorC = require("./instanciaNova")(); // COmo ele retorna uma função factory preciso chamar essa funçaõ para invocar o objeto
const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);

//Vai imprimir o valor por que por padrao o node faz cache(guarda o valor retornado, guando eu chamo a função inc 2 vzs ele guarda isso no cache e quando chamei contador B ele tem guardo e pegando as alterações)
//Então o que eu fizer no contadorA o contadorB tambem vai saber node guardando no cache

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor); //Aqui  como é nova instancia a partir da funcao factory cada uma vai receber o valor dele mesmo, sem guardar no cache
