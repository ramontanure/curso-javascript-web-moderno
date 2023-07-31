const schedule = require("node-schedule"); //Cronograma

const tarefa1 = schedule.scheduleJob("*/5 * 8 * * 2", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds()); //Mostrar segundos sendo executados
}); //Quero executar em 5 e 5 segundos em qualquer minuto
//Agendar trabalho,,,,, sem */ vai executar quando tiver em 5 segundos, com isso vai executar 5 segundos, assim por padrao dps minutos, horas, dia, mes dia da seman

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa"); //cancel função de tarefa 1 quero cancelar de 20 em 20 segundos
}, 20000);

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule(); //Regra de cronograma
regra.dayOfWeek = [new schedule.Range(1, 5)]; //Dia de 1 ate 5
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando tarefa 2 !", new Date().getSeconds());
});
