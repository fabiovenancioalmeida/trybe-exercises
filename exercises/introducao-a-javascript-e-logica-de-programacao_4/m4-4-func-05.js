function nomeMaior(arrayInteiros) {

  const arrayInteiros = [9, 1, 2, 3, 9, 5, 7];
  const numerosOrdenados = arrayInteiros.sort((a, b) => a - b);
  itemContAnt = 0;
  itemAnt = numerosOrdenados[0];
  itemContAtu = 0;
  itemAtu = numerosOrdenados[0];

  //console.log(numerosOrdenados);

  for (let prop in numerosOrdenados) {
    itemAtu = numerosOrdenados[prop];

    if (itemAtu != itemAnt) {
      if (itemContAnt < itemContAtu) {
        itemContAnt = itemContAtu;
        itemContAtu = 0;
      }
      itemContAtu += 1;
    } else {
      itemContAtu += 1
      itemAnt = itemAtu;
    }
    //itemAtu = numerosOrdenados[prop];

  }
  console.log(itemAnt, itemContAnt);

  return itemAnt;
}