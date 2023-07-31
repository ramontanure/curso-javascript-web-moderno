//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())



/*Uma função é um verbo uma açao, define um bloco,
logo depois tem um corpo da função é um trecho de código
um bloco de código
vai da um nome pra ele e tem funções sem nome
recebe parametros que sao igredientes
no final retorna um valor 
*/
