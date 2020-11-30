const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaItensArray = 0;
let mediaItensArray = 0;

for (let index = 0; index < numbers.length; index += 1) {
  somaItensArray += numbers[index];
}

mediaItensArray = somaItensArray / numbers.length;
console.log(mediaItensArray);
