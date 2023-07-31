const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice, array) {
  //Posso imprimir tambem o array
  console.log(`${indice + 1} ${nome}`);
}); //Aqui vou pegar o array aprovador e pecorrer esse array com o foreach
//E como parametro estou chamando uma callback, vai ser chamada para cada interação que for feita no array
//Cada novo elemento que for pecorrido no array ele vai chamar uma callback passando o proprio elemento e o indice daquele elemento

aprovados.forEach((nome) => console.log(nome)); //Aqui estou interessado apenas no nome então pode

const teste = (nome, indice) => {
  //Aqui pra passar somente o indice, preciso do primeiro parametro, que é o metodo do foreach
  console.log(nome, indice);
};

aprovados.forEach(teste);
