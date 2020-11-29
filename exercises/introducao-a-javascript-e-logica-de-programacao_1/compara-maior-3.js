let a = 7;
let b = 15;
let c = 4;

let maiorNumero = 0;

if (a > b && a > c) {
  maiorNumero = a;
  console.log(`O maior número entre ${a}, ${b} e ${c} é ${maiorNumero}`)
  } else if (b > a && b > c) {
    maiorNumero = b;
    console.log(`O maior número entre ${a}, ${b} e ${c} é ${maiorNumero}`)
  } else {
    maiorNumero = c;
    console.log(`O maior número entre ${a}, ${b} e ${c} é ${maiorNumero}`)
}
