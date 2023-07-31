//Set é uma estrutura de conjunto, não indexada, e não aceita repeticao
//Não aceita repetições e não é indexada

const times = new Set(); //Adiciona no set add
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corinthias");
times.add("Flamengo");
times.add("Vasco"); //Não aceita repetições

console.log(times);
console.log(times.size); //Ver o tamanho do set da estrutura, no caso é 5
console.log(times.has("vasco")); //Aqui has ver se tem um elemento dentro de times
console.log(times.has("Vasco"));
times.delete("Flamengo"); //Excluir um time
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Ramon", "Julia", "Ramon"];
const nomeSet = new Set(nomes);
console.log(nomeSet);

console.log(times);
