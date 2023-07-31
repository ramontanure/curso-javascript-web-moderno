// Arquivo que vai controlar o servidor
// É um servidor em desenvolvimento, não é um servidor que voce vai usar em produção
// Vai te ajudar a automatizar no fluxo de desenvolvimento
const gulp = require("gulp");
const webServer = require("gulp-webserver");
const watch = require("gulp-watch");

function servidor() {
  // Vou passar pro pipe as configurações do nosso servidor
  return gulp.src("build").pipe(
    webServer({
      port: 8080,
      //   Abrir browser
      open: true,
      //   liveReload como está rodando no servidor a gente ja consegue acessar o menu
      livereload: true,
    })
  );
}

function monitorarArquivos(cb) {
  // Vamos usar o watch pra ficar monitorando os arquivos e sempre que ouver uma mudança ele manda pro build
  //   Onde eu quero monitorar? que vai disparar um build q vai gerar a aplicação, a parte que foi mudada
  watch("src/**/*.html", () => {
    gulp.series("appHtml")();
  });
  watch("src/**/*.scss", () => {
    gulp.series("appCSS")();
  });
  watch("src/**/*.js", () => {
    gulp.series("appJS")();
  });
  watch("src/assets/imgs/**/*.*", () => {
    gulp.series("appIMG")();
  });
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
