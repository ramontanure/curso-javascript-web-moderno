// node faz cache (esconderijo)

module.exports = {
  //Esse objeto que traz uma instancia unica por que o node faz cache dos modulos por que mantem essas instancias sindoton uma unica instancia
  valor: 1,
  inc() {
    this.valor++;
  },
};
