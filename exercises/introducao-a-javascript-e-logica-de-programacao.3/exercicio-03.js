/*
  3- Agora inverta o lado do triângulo
*/

let tableAsterisk = '';
let line = '';
let spaces = '';
let lengthTable = 5;

//for (let index2 = 1; index2 <= lengthTable; index2 += 1) {

for (let index = 0; index <= lengthTable; index += 1) {
  console.log(tableAsterisk.length);
  console.log(index);
  console.log((tableAsterisk.length == lengthTable));
    if (tableAsterisk.length == lengthTable) {
      tableAsterisk = tableAsterisk + '*' + '\n';
    } else {
      tableAsterisk += ' ';
    }
      tableAsterisk += ' ';
      console.log() 
  }

//}

console.log(tableAsterisk);