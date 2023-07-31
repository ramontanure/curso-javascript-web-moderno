let comparaComThis = function (param) {
  console.log(this === param);
};
//Nessa parte o this aponta pro objeto global
comparaComThis(global);

const obj = {};
//Nessa parte com o bind o this começa a apontar pro obj
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); //Aqui agora nao sendo mais global por que ta apontando pro obj
comparaComThis(obj); //Aqui sendo o apontamento do this atual
