// tagged templates - processa um template string dentro de uma função

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra string";
}

const aluno = "Gui";
const situacao = "Aprovado";

console.log(tag`${aluno} está ${situacao}`); //Significa que to passando a template string para esse função tag
