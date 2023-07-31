// Importação Gulp
const gulp = require("gulp");
// Fazer varias tarefas em series, ou seja uma atras da outra
// const { series, parallel } = require("gulp");
// Voce também pode pegar series assim:
const series = gulp.series;
const parallel = gulp.parallel;

// Pode colocar o parallel

// Cada função dessa representa uma task
const antes1 = (callback) => {
  console.log("Tarefa Antes 1");
  return callback();
};

const antes2 = (callback) => {
  console.log("Tarefa Antes 2");
  return callback();
};

// Essa callBack precisa ser chamada quando voce termina de executar uma tarefa, para o gulp saber que determinada tarefa foi atualizada
function copiar(callback) {
  // Serve para voce selecionar os arquivos para entrada do workflow dentro desse arquivo

  //   gulp
  //     .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
  //  Qualquer aquivo que esta dentro da pastaA e seja txt vou copiar para a pastaB
  gulp
    .src("pastaA/**/*.txt")
    //   Função pipe serve para voce aplicar transformações nos arquivos que voce definiu como entrada para seu workFlow
    // Quero pegar 300 imagens e transformar elas em metade, o pipe faz isso, voce chama uma função voce consegue fazer varias transformações
    // .pipe(imagePelaMetade());
    //Colocar em uma pasta de destino esses arquivos de cima
    // Voce pode ter varias transformações pipe()
    .pipe(gulp.dest("pastaB"));
  //   console.log("Tarefa de copiar!");
  return callback();
}
// A pasta de destino seria como se fosse o build, que seria como se tivesse em produção
const fim = (callback) => {
  console.log("Tarefa Fim");
  return callback();
};
// Exportar series e passar a função copiar, só que isso não é o suficiente o gulp espera uma tarefa chamda default
// Vai executar as funções em serie uma atras da outra
module.exports.default = series(parallel(antes1, antes2), copiar, fim);

//Quando voce executa o gulp dentro daquele arquivo voce tem que ter o gulpFile.js
// Na hora de voce exportar voce tem que colocar a task default, seria a porta de entrada do gulp para que ele faça outras tarefas
