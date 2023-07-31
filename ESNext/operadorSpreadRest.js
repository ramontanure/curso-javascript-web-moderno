// operador ... rest(juntar) /spread(espalhar)
// usar rest com parametro de função function spread(...array){} spread(1,2,3,4) junta esses elementos e se torna um array

// usar spread com objeto

const funcionario = {
  nome: "Maria",
  salario: 12348.99,
};

const clone = {
  ...funcionario, //Espalhando os valores e atributos de funcionario aqui
  idade: 19,
};

console.log(clone);

//usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA];
console.log(grupoFinal);
