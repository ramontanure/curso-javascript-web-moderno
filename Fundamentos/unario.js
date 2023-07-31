let num1 = 1
let num2 = 2

num1++ //Pós fixada
console.log(num1)
--num1 //pré fixada
console.log(num1)

console.log(++num1 === num2--) //Dá verdadeiro por que o ++ foi executado antes da operacao e o -- foi executado depois 
//Só depois da operacao que o -- será executado entao os dois vale 2 
console.log(num1 === num2)


