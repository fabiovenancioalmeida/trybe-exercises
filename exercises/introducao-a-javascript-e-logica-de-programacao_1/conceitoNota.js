let notaPercentual = 110;

console.log(notaPercentual);
if (notaPercentual > 100) {
  console.log('ERRO: O número deve ser de 1 a 100!')
} else if (notaPercentual >= 90) {
  console.log('A');
} else if (notaPercentual >= 80) {
  console.log('B');
} else if (notaPercentual >= 70) {
  console.log('C');
} else if (notaPercentual >= 60) {
  console.log('D');
} else if (notaPercentual >= 50) {
  console.log('E');
} else if ((notaPercentual < 50) && (notaPercentual > 0)) {
  console.log('F');
} else {
  console.log('ERRO: O número deve ser de 1 a 100!')
}
