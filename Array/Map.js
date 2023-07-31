//Map serve para fazer uma transformação em um array
//Serve para mapear um array para outro array do mesmo tamanho com os dados transformados
//Um exemplo é um array de 3 elementos (1, 2, 3) com o map voce pode mapear esse array pecorrer cada elemento e transformar esse array por exemplo colocando cada numero o dobro
//Serve para transformar um array em outro o resultado vai ser o mesmo só que com transformado

const nums = [1, 2, 3, 4, 5];

//Map é um for com proposito

const res = nums.map((e) => {
  //Estou passando aqui uma callback e nessa função posso receber tres parametros
  return e * 2; //Ela pode receber tres parametros dentro do map, o proprio valor atual, indice, e o array completo
});

console.log(res);

//O map ele gera um novo array, ele não transforma o atual, sempre transformando o novo array

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;

const res1 = nums.map(soma10).map(triplo).map(paraDinheiro);
//Aqui ele ta como se fosse pegando cada elemento e aplicando todas essas funções em um elemento só e passando pro proximo

console.log(res1);
