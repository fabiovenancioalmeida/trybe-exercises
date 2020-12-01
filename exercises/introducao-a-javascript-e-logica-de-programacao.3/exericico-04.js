/*
    *    
   ***   
  *****  
 ******* 
*********


let tableAsterisk = '';
let line = '';
let lengthLines = 5;
let lengthColunms = (lengthLines * 2) -1;

//linha
for (let index = 1; index <= lengthLines; index += 1) {
  //coluna
    line = '';
  for (let index1 = 1; index1 <= (lengthColunms - index); index1 += 1) {
    if (lengthLines <= ind                              ex1)  
    line += ' ';
  }
  for (let index2 = 1; line.length < lengthColunms; index2) {
    line += '*'
  }

  tableAsterisk = tableAsterisk + line + '\n';
}

console.log(tableAsterisk);
*/
 
let espaco = ' ';
let asterisco = '*';
let n = 15;

for (let indexLinha = 0; indexLinha < n; indexLinha += 2) {
  let linha = '';
  let numAsteriscos = 1 + indexLinha;
  let numEspacosEsquerda = (n - numAsteriscos) / 2;
  let numEspacosDireita = (n - numAsteriscos) / 2;

  for (let indexColuna = 0; indexColuna < n; indexColuna += 1) {
    if (indexColuna < numEspacosEsquerda) {
      linha += espaco;
    } else if (
      indexColuna >= numEspacosEsquerda &&
      indexColuna < n - numEspacosDireita
    ) {
      linha += asterisco;
    } else {
      linha += espaco;
    }
  }
  console.log(linha);
}
