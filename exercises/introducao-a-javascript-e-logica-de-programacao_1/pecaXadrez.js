/*
Rei: Pode ser movimentado em qualquer direção do tabuleiro,
 mas apenas de casa em casa.

Rainha: Sem restrições, a Rainha tem livre movimentação
 no jogo na horizontal, vertical e diagonais.

Torre: pode correr sem restrição de número de casas e
 em todas as direções (frente, trás, direita, esquerda).

Bispo: Sem restrição de número de casas,
 mas somente no sentido diagonal.

Cavalo: Realiza movimentos em “L”, ou seja, duas casas em
 um sentido e uma casa em sentido perpendicular àquele,
 em qualquer direção.

Peão: Pode apenas realizar movimentos frontais, de forma que
 o primeiro movimento de cada peão abranja até duas casas,
 e os demais se limitam a uma casa à frente.
 O ataque do peão sempre ocorre na diagonal.

Peão = Pawn
Bispo = Bishop
Cavalo = Knight
Torre = Rook
Dama = Queen
Rei = King
 */

let pecaXadrez = 'Queen';

pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
  case 'pawn':
    console.log('front');
    break;
  case 'bishop':
    console.log('diagonals');
    break;
  case 'knight':
    console.log('el');
    break;
  case 'rook':
    console.log('column');
    break;
  case 'queen':
    console.log('front/diagonals');
    break;
  case 'king':
    console.log('one square');
    break;
  default:
    console.log('Peça inválida!');
}
