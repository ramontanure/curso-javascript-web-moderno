const nome = "Rebeca";
const concatenacao = "Olá" + nome + "!";
const template = `
Olá 
${nome}`; //Template String passa para outra linha
console.log(concatenacao, template);

console.log(`1+1 = ${1 + 1}`); //Template string pode fazer somas

const up = (texto) => texto.toUpperCase(); //ToUpperCase colocar letras maisculas
console.log(`Ei ... ${up(`cuidado`)} " `); //Ele fez uma função com um parametro texto e e pegou esse texto e colocou maiusculas
//Assim podendo utilizar uma literal dentro da template string
