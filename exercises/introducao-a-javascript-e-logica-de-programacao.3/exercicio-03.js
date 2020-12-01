/*
  3- Agora inverta o lado do triângulo
*/
let tableAsterisk = '';
let line = '';
let lengthTable = 5;

//linha
for (let index = 1; index <= lengthTable; index += 1) {
  //coluna
  line = '';
  for (let index1 = 1; index1 <= (lengthTable - index); index1 += 1) {
    line += ' ';
  }
  for (let index2 = 1; line.length < lengthTable; index2) {
    line += '*'
  }

  tableAsterisk = tableAsterisk + line + '\n';
}

console.log(tableAsterisk);
