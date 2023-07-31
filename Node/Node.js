//Front end roda no broser na pagina
//Back end roda no server, servidor

//Node é um ambiente de execução de código javascript que roda em um servidor

//Trad é um processo, linha de execução indenpendete

//O node inicialmente ele não nasceu como uma plataforma que rodasse javascript no back end
//Na vdd ele na nasceu pra cuidar de IO
//O javascript sempre veio trabalhar com ambientes assincronos por que voce esta no browser sempre demandando coisas do servidor remoto
//IO é sempre que voce precisa ler algo de um arquivo fazer alguma conexao com rede
//Exemplo de IO é a conexão de banco de dados, por que voce tem que acessar um arquivo, disco, mandar requisção pela red
//Qualquer coisa que envolva entrar e saida é um IO

// IMPORTANTE !!

//O node é formado por duas partes o V8 que é um interpretador JavaScript de codigo aberto do goole
//E tambem do LIBUV é uma biblioteca que trata de forma assincrona a parte mais lenta de um processo, ler um banco de dados, tudo que diz a respeito a IO
//Temos uma fila de eventos que é por exemplo uma requisição de um banco de dados(tabelas etc) e depois disso ele vai pro event loop, e depois ele vai pra thereads
//da threads ele vai ver a requisação e consultar isso em um banco de dados, e retorna para o usuario uma callback

//Aula 2

//O sistema(aplicação) é organizado  e dividido em camadas

//Dentro do node 1 arquivo representa 1 modulo.

/*A organização e divisao de camadas de uma aplicação 
Front-end == ela é composta por varios arquivos e para voce enviar 
para um browser o melhor é comprimir esses arquivos assim ficando menos pesado
Algumas bibliotecas códigos internos não sao entedidos pelo browser que entede javascript 
então ele faz a tradução disso por exemplo o react JSX

Back-end == organizado também por arquivos mais não precisamos se preocupar com a
compactação de arquivos, pois o código não vai pro browser vai pro server
assim nao interferindo no aperfeiçoamento da aplicação





*/

console.log("teste");
