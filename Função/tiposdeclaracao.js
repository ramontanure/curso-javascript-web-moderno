console.log(soma(3, 4)); //Aqui vai ocorrer um hoisting mesmo que a função for declarada em baixo vai ocorrer um içamento e podendo fazer a impressão

//function declaration
function soma(x, y) {
  return x + y;
}

//function expression
//Aqui nao vai poder fazer o içamento pois o momento que a variavel for atribuida a uma constante, ela vai poder ser impressa depois
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 4));

//named function expression

var mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 4));
