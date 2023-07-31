//par chave/valor
const saudacao = 'Opa' /*Contexto lecixo é o contexto é o local que sua variavel 
foi definida no código no arquivo par chave e valor
*/
function exec(){
    const saudacao = 'Falaa' //contexto lexico
    return saudacao 
}
//Objetos sao grupos aninhadas de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
//Nesse caso de contexto com duas coleções de objeto poderia ter duas chaves/valor do mesmo nome, por que estaria em contexto diferente


