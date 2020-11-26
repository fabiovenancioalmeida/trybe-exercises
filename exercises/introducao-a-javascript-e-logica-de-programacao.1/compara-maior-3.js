let a = 7;
let b = 15;
let c = 4;

let ordemMaior01 = 0;
let ordemMaior02 = 0;
let ordemMaior03 = 0;


if (a > b && a > c) {
  ordemMaior01 = a;
  if (b > c) {
    ordemMaior02 = b;
  }
};

if (b > a || b > c) {
  ordemMaior01 = b;

if
  ordemMaior02 = c;
  ordemMaior03 = b;
  console.log( ordemMaior01 + ' ' + ordemMaior02 + ' ' + ordemMaior03);
} else if ((b > a || a > c) && b > c){
  ordemMaior01 = b;
  ordemMaior02 = c;
  ordemMaior03 = a;
} else if (c >= a >= b) {
  ordemMaior01 = c;
  ordemMaior02 = a;
  ordemMaior03 = b;
  console.log( ordemMaior01 + ' ' + ordemMaior02 + ' ' + ordemMaior03);
} else if (c > b > a) {
  ordemMaior01 = c;
  ordemMaior02 = b;
  ordemMaior03 = a;
  console.log( ordemMaior01 + ' ' + ordemMaior02 + ' ' + ordemMaior03);
}
console.log( ordemMaior01 + ' ' + ordemMaior02 + ' ' + ordemMaior03);
console.log(`Sequencia dos números em ordem: ${ordemMaior01}, ${ordemMaior02} e ${ordemMaior03}`);
/*
const arrayNumeros = [7, 15, 4];

const sequenciaMaior = arrayNumeros.sort((a, b) => a - b);

console.log(`Sequencia dos números em ordem: ${sequenciaMaior[0]}, ${sequenciaMaior[1]} e ${sequenciaMaior[2]}`);
*/
