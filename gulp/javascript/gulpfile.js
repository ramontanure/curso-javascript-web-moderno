const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

//Vou precisar chamar esse callback pra dizer que foi terminado essa função
function padrao(cb) {
  // gulp.src('src/calculadora.js', 'src/testeCalculadora.js')
  //   Qualquer subPasta que esteja dentro de src
  gulp
    .src("src/**/*.js")
    // Transformação passando primeiro o babel
    .pipe(
      babel({
        //   Não quero que arquivos de comentarios sejam transferidos para o arquivo final
        comments: false,
        // presets env vai pegar o javaScript mais novo possivel e converter para uma versão antiga mais compativel
        presets: ["env"],
        // Então a primeira transformação que vamos fazer, é pegar esse código e converter para uma versão mais compativel, vai tirar os comentarios e colocar o preset
      })
    )
    //   Outra transformação vou colocar o uglify não precisando colocar parametro e ele vai converter e esse código vai ficar minificado
    .pipe(uglify())
    //Quando acontecer um determinado um evento
    // Caso aconteça um erro
    .on("error", (err) => console.log(err))
    // concat vai pegar todos os arquivos compilados usando o babel da versão mais antiga, que ja foi feito o processo o código que foi formatado jogado em uma linha só, esse código agora vai ser concatenado
    // E aqui como parametro coloco o arquivo que vai ser gerado
    .pipe(concat("codigo.min.js"))
    // Destino
    .pipe(gulp.dest("build"));

  return cb();
}

function fim(cb) {
  console.log("Fim!!!");
  return cb();
}

exports.default = series(padrao, fim);
