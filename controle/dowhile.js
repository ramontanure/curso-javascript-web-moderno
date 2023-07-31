function Aleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = Aleatorio(-1, 100);
  console.log(`Os numeros gerados foram ${opcao}`);
} while (opcao != -1);
