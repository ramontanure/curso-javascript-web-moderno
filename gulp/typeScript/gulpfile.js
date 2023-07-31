// O que é TypeScript
/*
Tudo que tem no JavaScript é suportado no TypeScript
Ele não é uma linguagem indenpendente, voce escreve ele em TypeScript e sempre vai ser convertido
para JavaScript

Coração do TypeScript é colocar tipos dentro do JavaScript
Linguagem Tipada

ex no js: var a = qualquer tipo
no typeScript int a = 1

// O navegador enxerga determinados problemas por a linguagem ser tipada
Java script que escala, 

Vamos converter esse código para JavaScript
Voce pode usar TypeScript com angular, reac, node
*/

const { series } = require("gulp");
const gulp = require("gulp");
const ts = require("gulp-typescript");
// É o arquivo que o compilador javaScript vai usar
const tsProject = ts.createProject("tsconfig.json");

function transformacaoTS() {
  // Peguei todo codigo fonte do meu projeto e pelo arquivo de configuração ele sabe qual é o código fonte
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest("build"));
}

exports.default = series(transformacaoTS);
