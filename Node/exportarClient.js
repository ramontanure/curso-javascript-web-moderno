const exportar = require("./exportar");
console.log(exportar);

// this e exports são apenas duas referencias em que module.exports aponta

//Sempre que voce atribuir a um objeto importado obrigatoriamente tem que ser por module exports

const obj = {
  nome: "Ramon",
};

this.obj;

//O que sera retornado é que ta dentro de module.exports
//com o this e exports só se o objeto tiver criado que ele vai ser exportado agora atributido a eles não vai ser exportado e não vai mudar a referencia, a referencia sempre vai ser a do module.exports
//THis e exports são apenas referencia que voce pode passar o valor que o module.exports aponta
