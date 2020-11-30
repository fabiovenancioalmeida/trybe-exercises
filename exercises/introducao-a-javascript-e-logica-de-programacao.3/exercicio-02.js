/*
2- Para o segundo exercício, faça o mesmo que antes, 
  mas que imprima um triângulo retângulo com 5 asteriscos de base. 
*/
let tableAsterisk = '';
let line = '';
let lengthTable = 5;

for (let index = 1; index <= lengthTable; index += 1) {
  line += '*';
  tableAsterisk = tableAsterisk + line + '\n';
}

console.log(tableAsterisk);
