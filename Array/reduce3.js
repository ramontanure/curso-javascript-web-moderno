Array.prototype.reduce = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;
  let acumulador = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  } //Aqui o acumulador vai receber o resultado da callback assim chamando de volta com o valor atualizado

  return acumulador;
};
