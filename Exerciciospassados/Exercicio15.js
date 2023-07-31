function Vendacarro(carro) {
  switch (carro) {
    case "hatch":
      console.log("Compra efetuada com sucesso");
      break;
    case "sedan":
    case "motocicletas":
    case "caminhonetes":
      console.log("Tem certeza que nao prefere esse modelo?");
      break;
    default:
      console.log("Nao trabalhamos com este tipo de automovel aqui");
  }
}
Vendacarro("hatch");
Vendacarro("sedan");
Vendacarro("motocicletas");
Vendacarro("caminhonetes");
Vendacarro("sandero");
