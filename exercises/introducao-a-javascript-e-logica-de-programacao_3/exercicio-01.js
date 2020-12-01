/*
1- Para o primeiro exercício de hoje, faça um programa que, 
  dado um valor n qualquer, seja n > 1 , 
  imprima na tela um quadrado feito de asteriscos de lado e 
  de tamanho n.
*/
let tableAsterisk = '';
let line = '';
let lengthTable = 5;

for (let index = 1; index <= lengthTable; index += 1) {
  line += '*';
}

for (let index = 1; index <= lengthTable; index += 1) {
  tableAsterisk = tableAsterisk + line + '\n';
}

console.log(tableAsterisk);
