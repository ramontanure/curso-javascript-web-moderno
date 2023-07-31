function tratarErro(erro) {
  throw new Error("....");
}
function imprimirNome(obj) {
  try {
    console.log(obj.nome.toUpperCase() + "!!!");
  } catch (e) {
    tratarErro(e);
  }
}
const obj = { nome: "Roberto" };
imprimirNome(obj);
