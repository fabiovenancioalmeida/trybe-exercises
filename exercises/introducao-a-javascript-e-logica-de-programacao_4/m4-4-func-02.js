function verificaMaiorValor(valMaior) {
  posicaoMaior = 0;
  
  for (let prop in valMaior) {
    if (valMaior[prop] > posicaoMaior) {
      posicaoMaior = valMaior[prop];
    }
  }
  return posicaoMaior;
}