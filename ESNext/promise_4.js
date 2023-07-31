function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]; //Aqui estou invertendo
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    //Aqui
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 5000),
  ]);
}
console.log();

gerarVariosNumeros().then((numeros) => console.log(numeros)); //Essa função all ela pega todas as promises e quando elas forem resolvidas ela chama
//ELe só vai trazer o resultado quando todas as promessas forem cumpridas
