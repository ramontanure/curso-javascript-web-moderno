function calculadora(a, op = "+", b) {
  switch (op) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Operações invalidas");
  }
}

calculadora(5, "+", 7);
calculadora(5, "-", 2);
calculadora(5, "*", 2);
calculadora(5, "/", 2);
calculadora(5, "n", 2);
