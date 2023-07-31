/* Com o pré processador CSS voce consegue colocar novas funcionalidades qua não estão
 disponiveis no css, para te ajudar a ter um CSS com mais reuso
 E o SASS é o mais famoso pré processador CSS
 Mais maduro, estavel e poderoso profissional CSS
 Voce pode criar por exemplo variaveis no CSS e sai usando essa variavel onde voce queira na sua aplicação
 Voce pode criar por exemplo uma cor primaria e não precisa ficar se preocupando em 
 ficar repetindo e sim usar a variavel
 Voce pode fazer coisas aninhadas

 nav {
     li {

     }
     div {

     }
 }

 Voce tem um super 7 de css colocando varios recursos qua não estão disponiveis
 no CSS padrão e voce tem um pré processador que gera tudo e transforma pra css,
 pro browser interpretar.

 Vamos fazer o processamento para acessar com o gulp o SASS
 Vamos usar o uglify

*/

const { parallel } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
  return (
    gulp
      .src("src/sass/index.scss")
      // Aqui ele ja vai pegar todo o sass e vai converter pra css
      .pipe(sass().on("error", sass.logError))
      .pipe(
        uglifycss({
          uglyComments: true,
        })
      )
      .pipe(concat("estilo.min.css"))
      .pipe(gulp.dest("build/css"))
  );
}

function EnviarHTML() {
  return gulp.src("src/index.html").pipe(gulp.dest("build/"));
}

exports.default = parallel(transformacaoCSS, EnviarHTML);
