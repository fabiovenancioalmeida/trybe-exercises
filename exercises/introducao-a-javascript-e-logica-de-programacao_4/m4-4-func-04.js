function nomeMaior(arrayNomes) {

//  const arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let tamanhoItemAntes = arrayNomes[0].length;
  let tamanhoItemAtual;
  let itemNome = '';
  
  for (let prop in arrayNomes) {
    tamanhoItemAtual = arrayNomes[prop].length;

    if (tamanhoItemAtual > tamanhoItemAntes) {
      itemNome = arrayNomes[prop];
      tamanhoItemAntes = tamanhoItemAtual;
    }
  }
//  console.log(itemNome);
  
  return posicaoMenor;
}