function ComprimentoTriang(a, b, c) {
  let ladoA = a;
  let ladoB = b;
  let ladoC = c;
  if (
    ladoA == ladoB &&
    ladoB == ladoA &&
    ladoB == ladoC &&
    ladoC == ladoB &&
    ladoC == ladoA
  ) {
    console.log("Equilatero os tres lados são iguais");
  } else if (
    (ladoA == ladoB && ladoB != ladoC) ||
    (ladoC == ladoB && ladoA != ladoB)
  ) {
    console.log("Isosceles, dois lados iguais");
  } else if (
    ladoA != ladoB &&
    ladoB != ladoA &&
    ladoB != ladoC &&
    ladoC != ladoB &&
    ladoC != ladoA
  ) {
    console.log("Escaleno Todos os lados são diferentes");
  }
  return console.log(
    `O tamanho do lado A é: ${ladoA}\nO tamanho do lado B é: ${ladoB}\nO tamanho do lado C é: ${ladoC}`
  );
}

ComprimentoTriang(5, 3, 4);
