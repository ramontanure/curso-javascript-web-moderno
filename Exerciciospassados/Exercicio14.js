function definitFrutas(fruta) {
  switch (fruta) {
    case "maça":
      console.log("Nao vendemos esta fruta aqui");
      break;
    case "kiwi":
      console.log("Estamos com esquassez de kiwis");
      break;
    case "melancia":
      console.log("Aqui está esta 3 reais o kilo");
      break;

    default:
      console.log("ERROR");
  }
}

definitFrutas("maça");
definitFrutas("kiwi");
definitFrutas("melancia");
definitFrutas("disjda");
