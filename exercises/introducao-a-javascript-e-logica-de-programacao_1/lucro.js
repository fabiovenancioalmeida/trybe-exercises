let valorCusto = 100;
let valorVenda = 150;

let valorImposto = valorCusto * 0.2;

let valorCustoTotal = valorCusto + valorImposto;

let lucro = valorVenda - valorCustoTotal;

if ((valorCusto > 0) && (valorVenda > 0)) {
  lucroTotal = lucro * 1000;
  console.log(lucroTotal);
} else {
  console.log('ERR0: O Valor do custo do produto e seu valor de venda tem que ser maior qe zero.')
}


