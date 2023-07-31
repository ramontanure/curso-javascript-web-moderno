const moduloA = require("./moduloA"); //Aqui estou importando requerendo tudo dentro de moduloA que está sendo exportado colocando isso na variavel moduloA
const moduloB = require("./moduloB");
// "./teste" É um caminho relativo

console.log(moduloB);
console.log(moduloA);

console.log(moduloA.ateLogo);
console.log(moduloA.bemVindo);

//Aquilo que voce não exportou fica apenas dentro do modulo
//E aquilo que voce exportou voce pode utilizar fora do modulo
