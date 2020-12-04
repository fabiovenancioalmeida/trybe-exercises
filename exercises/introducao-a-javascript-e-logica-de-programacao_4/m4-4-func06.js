function nomeMaior(numeroInteiro) {

  //numeroInteiro = 15;
  somatoria = 0;
  
  for (let index = 0; index <= numeroInteiro; index += 1) {
    somatoria += index;
  }
  //console.log(somatoria);
  
  return somatoria;
}