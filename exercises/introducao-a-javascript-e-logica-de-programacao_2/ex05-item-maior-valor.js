const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let itemMaiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > itemMaiorValor) {
    itemMaiorValor = numbers[index];
  }
}

console.log(`Item de maior valor na array é ${itemMaiorValor}`);
