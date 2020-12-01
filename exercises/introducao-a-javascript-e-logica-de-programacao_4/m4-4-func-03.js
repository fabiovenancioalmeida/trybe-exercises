function verificaMenorValor(valMenor) {

  let itemArray = valMenor[0];
  let posicaoMenor = 0;
  
  for (let prop in valMenor) {

    if (itemArray > valMenor[prop]) {
      itemArray = valMenor[prop];
      posicaoMenor = prop;
    }
  }
  console.log(posicaoMenor);
  
  return posicaoMenor;
}