// Dentro desse arquivo vou colocar as taks relacionadas
// ao codigo da nossa aplicacao
const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

function appHtml() {
  // Consigo pegar todos os html, minificar html
  return gulp
    .src("src/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("build"));
}

function appCSS() {
  return (
    gulp
      .src("src/assets/sass/index.scss")
      // Transformar sass em css
      .pipe(sass().on("error", sass.logError))
      //   Minificar
      .pipe(
        uglifycss({
          uglyComments: true,
        })
      )
      //   Concatenar
      .pipe(concat("app.min.css"))
      //   Colocar na pasta de build
      .pipe(gulp.dest("build/assets/css"))
  );
}

function appJS() {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(
      babel({
        presets: ["ENV"],
      })
    )
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}

function appIMG() {
  return gulp
    .src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/imgs"));
}

// Registrando task
gulp.task("appHtml", appHtml);
gulp.task("appIMG", appIMG);
gulp.task("appJS", appJS);
gulp.task("appCSS", appCSS);

module.exports = {
  appHtml,
  appCSS,
  appJS,
  appIMG,
};
