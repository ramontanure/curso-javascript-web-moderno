const anonimo = process.argv.indexOf("-a") !== -1;

if (anonimo) {
  process.stdout.write("Fala Anonimo!\n"); //Aqui vou imprimir uma saida
  process.exit();
} else {
  process.stdout.write("Fala seu nome");
  process.stdin.on("data", (data) => {
    const nome = data.toString().replace("\n", "");
    process.stdout.write(`Fala ${nome} !! \n`);
    process.exit();
  }); //teclado no evento on data, voce acaba de entrar com dados
}
