let salarioBruto = 1700;
let salarioLiquido = 0;

// INSS
let valorInss = 0;
let aliquotaInss = 0;
let valorAliquota = 0;
let salarioBase = 0

// IRPF
let aliquotIRPF = 0;
let parcelaDeducao = 0;
let valorADeduzir = 0;
let valorIr = 0;
let isContribui = true;

// INSS
if (salarioBruto <= 1556.94 ) {
  aliquotaInss = 0.08;
  valorAliquota = salarioBruto * aliquotaInss;
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = 0.09;
  valorAliquota = salarioBruto * aliquotaInss;
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = 0.11;
  valorAliquota = salarioBruto * aliquotaInss;
} else {
  valorAliquota = 570.82;
}

salarioBase = salarioBruto - valorAliquota; 

// IRPF
if (salarioBruto <= 1903.98) {
  // isento IRPF
  isContribui = false;
  salarioLiquido = salarioBase;
} else if (salarioBruto <= 2826.65) {
  aliquotIRPF = 0.075;
  valorADeduzir = 142.80;
  parcelaDeducao = (salarioBase * aliquotIRPF);
  valorIr = parcelaDeducao - valorADeduzir;
  salarioLiquido = salarioBase - valorIr
} else if (salarioBruto <= 3751.05) {
  aliquotIRPF = 0.15;
  valorADeduzir = 354.80;
  parcelaDeducao = (salarioBase * aliquotIRPF);
  valorIr = parcelaDeducao - valorADeduzir;
  salarioLiquido = salarioBase - valorIr
} else if (salarioBruto <= 4664.68) {
  aliquotIRPF = 0.225;
  valorADeduzir = 636.13;
  parcelaDeducao = (salarioBase * aliquotIRPF);
  valorIr = parcelaDeducao - valorADeduzir;
  salarioLiquido = salarioBase - valorIr
} else {
  aliquotIRPF = 0.275;
  valorADeduzir = 869.36;
  parcelaDeducao = (salarioBase * aliquotIRPF);
  valorIr = parcelaDeducao - valorADeduzir;
  salarioLiquido = salarioBase - valorIr
}

salarioBruto = salarioBruto.toFixed(2);
salarioBase = salarioBase.toFixed(2);

if (isContribui) {
  aliquotIRPF = aliquotIRPF.toFixed(4);
  valorIr = valorIr.toFixed(2);
  salarioLiquido = salarioLiquido.toFixed(2);

  console.log(`
Salario Bruto    = R$ ${salarioBruto};
SalarioBase      = R$ ${salarioBase};
Aliquota do IRPF = ${aliquotIRPF};
Valor do IRPF    = R$ ${valorIr};
Salario Liquido  = R$ ${salarioLiquido};
`)
} else {
  salarioLiquido = salarioLiquido.toFixed(2);

  console.log(`
Salario Bruto    = ${salarioBruto};
SalarioBase      = ${salarioBase};
Salario Liquido  = ${salarioLiquido}
Faixa isenta do IRPF
`)
}