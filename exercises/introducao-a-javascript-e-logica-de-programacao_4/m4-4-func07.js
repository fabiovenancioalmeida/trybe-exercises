function compara(word, ending) {

//  word = 'joaofernando'
//  ending = 'fernan'
  let wordLength = word.length;
  let posicao = wordLength - (ending.length);
  let literal = '';
  
  for (let index = posicao; index < wordLength; index += 1) {
    literal += word[index];
  }
  
//  console.log(`word=${word} ending=${ending} lideral=${literal}`);
//  console.log(ending === literal);
  
  return (ending === literal);
}
