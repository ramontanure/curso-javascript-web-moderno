let isAtivo = false;
console.log(isAtivo);

isAtivo = true; //Atribuição para um novo valor de let, tem que ser sem let, apenas o nome do identificador
console.log(isAtivo);

isAtivo = 1; //Passou a receber isso
console.log(!!isAtivo); //Colocar o negacação ele vai trocar o verdadeiro ou falso

console.log("Os verdadeiros....");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!" texto ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "";
console.log(nome || "Desconhecido");
