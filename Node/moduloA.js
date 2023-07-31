/*Usando o node como servidor pode funcionar com apache,
 pode ser um servidor web que prover pagina, prover imagem, e gerar
 conteudos dinamicos, e gerar uma api para seu sistema 

Voce organiza uma aplicação de back-end em node em pastas e arquivos
EM cada arquivo representa um modulo, modulo significa ele tem uma certa interioridade
ele não deixa que tudo aquilo que voce codifica dentro dele disponivel pra todo mundo

Voce tem um modulo esses códigos ficam visiveis apenas dentro do modulo, se voce quiser tornar visivel para fora voce precisa exportar e importar
2 Padroes de modulos existem dentro do node == common.js(padrao do node) e do EcmaScript 2015(import e export)


 */

//Exportar algo no node, para ser utilizado em outro arquivo
//Metodos de exportação

this.ola = "Fala Pessoal"; //Essa frase pode ser acessada em outro arquivo
exports.bemVindo = "Bem vindo ao node"; //Esse ola, bem vindo foi criado atraves do this e exports
module.exports.ateLogo = "Até proximo exemplo";

//Todos esses são objetos to criando atributos dinamicanete
