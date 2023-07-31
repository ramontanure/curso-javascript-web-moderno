var numero = 1; //Voce pode ter duas variaveis em um código mas sendo de escopo diferente
//Assim sobrescrevendo a variavel que ta no escopo mais abragente ficando asssim r: 2 e r: 2
{
  var numero = 2;
  console.log("dentro", numero);
}
console.log("fora = ", numero);
