function Promocao(salario, plano) {
  switch (plano) {
    case "A":
      console.log("Salario novo", salario * 0.1 + salario);
      break;
    case "B":
      console.log("Salario novo", salario * 0.15 + salario);
      break;
    case "C":
      console.log("Salario novo", salario * 0.2 + salario);
      break;
    default:
      console.log("Plano invalido");
  }
}

Promocao(1200, "A");
Promocao(3000, "B");
Promocao(1800, "C");
Promocao(1500, "D");
