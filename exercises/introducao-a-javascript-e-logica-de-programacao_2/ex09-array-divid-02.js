const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 17, 4, 6, 18, 28, 21, 29, 35, 31, 41, 42, 52, 42, 1, 7, 11];
const novaArray = [];
let numberDividido = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numberDividido = numbers[index] / 2;
  console.log(`${numbers[index]} - ${numberDividido}`)
}
