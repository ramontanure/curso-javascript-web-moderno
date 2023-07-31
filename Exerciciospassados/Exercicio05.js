function ValorCorreto(a) {
  return console.log("R$", a.toFixed(2).replace(".", ","));
}

ValorCorreto(0.1 + 0.2);
