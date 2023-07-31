function teste1(num) {
  if (num > 7) console.log(num); //Aqui ele vai ser executado pois é a primeira setença de codigo
  //Se tiver mais sentenças de codigo colocar em um bloco, se ouvir só uma sentença tanto faz.
  console.log("Final"); //Aqui ele está fora da sentença do IF então vai ser executado 2 vezes
}
teste1(6);
teste1(8);

function teste2(num) {
  if (num > 7);
  {
    console.log(num);
  }
} //Aqui ele vai ser executado os dois pois tem um ; atrapalhando na sentença do codigo entao nao pode
teste2(6);
teste2(8);
