function ehPalindromo(verificPalavra) {
  
  let invertePalavra = '';
  let tamanhaPalavra = verificPalavra.length;
  
  for (let index = tamanhaPalavra -1; index >= 0; index -= 1) {
    invertePalavra += verificPalavra[index];
  }
  
  if (verificPalavra === invertePalavra) {
    return true;
  } else {
    return false;
  }
}
