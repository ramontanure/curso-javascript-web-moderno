const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //Esse metodo remove o ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); //Aqui ele adiciona um elemento na ultima posição do array
console.log(pilotos);

pilotos.shift(); // Esse metodo remove o primeiro elemento do array, ao contrario do pop
console.log(pilotos);

pilotos.unshift("Hamilton"); //Esse metodo adiciona um elemento na primeira posição ao contrario do push
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
//Na posição 2 não quero remover ninguem e quero adicionar bottas e massa
console.log(pilotos);

//remover

pilotos.splice(3, 1); //Aqui estou removendo o elemento na posição 3, quero remover apenas 1
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Ele retorna um novo array a partir de um indice do array desejado
//Que no caso aqui é indice 2
console.log("teste", algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //Slice é voce pegar uma parte de um array
//Primeiro elemento que voce vai passar como parametro é o indice do elemento que voce vai querer começar a pegar do array
//Nesse caso o indice 4 não entra, ele vai até o indice 4, não incluindo o elemento dele.
console.log(algunsPilotos2);
