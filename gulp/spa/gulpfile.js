// SPA seria um nome de um projeto qualquer, vamos fazer o build nele
// SPA Single page Aplication toda a parte de navegação vai ser feita usando javascript
const { series, parallel } = require("gulp");
const gulp = require("gulp");
const { appHtml, appCSS, appJS, appIMG } = require("./gulpTasks/app");
const { depsCSS, depsFonts } = require("./gulpTasks/deps");
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor");

module.exports.default = series(
  parallel(series(appHtml, appCSS, appJS, appIMG), series(depsCSS, depsFonts)),
  servidor,
  monitorarArquivos
);
