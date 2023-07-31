const valores = [7.7, 8.9, 6.3 , 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)//Ver o tamanho do vetor

valores.push({id: 3}, false, null, 'teste')//Push serve para inserir um valor no vetor
console.log(valores)

console.log(valores.pop()) //Serve para deletar o ultimo elemento do vetor
console.log(valores)
delete valores[0]//Deletar um elemento da posiçao desejada
console.log(valores)

console.log(typeof valores)//Array no javascript é um objeto
