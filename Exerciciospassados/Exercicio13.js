function diautil(dia) {
  switch (dia) {
    case 1:
    case 7:
      console.log("fim de semana");
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("dia util");
      break;
    default:
      console.log("dia invalido");
  }
}

diautil(1);
diautil(2);
diautil(3);
diautil(4);
diautil(5);
diautil(6);
diautil(7);
diautil(8);
