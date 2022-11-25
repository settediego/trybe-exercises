// A pessoa marca 6 números, no intervalo de 1 a 60;

const pickedNumbers = [8, 22, 26, 38, 42, 60];
console.log("Player's game " + pickedNumbers);

// JOGO SORTEADO = Uma sequência de 6 números é sorteada nesse mesmo intervalo.

const number1 = 20;
const number2 = 4;
const number3 = 32;
const number4 = 28;
const number5 = 39;
const number6 = 60;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];
console.log("Drawn numbers "+ megaSenaNumbers);

// Se os números forem correspondentes, FORRA:

let numberofHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
 let drawnNumber = megaSenaNumbers[index];
 //console.log('Numero sorteado ', drawnNumber);

  for (let cont = 0; cont < pickedNumbers.length; cont += 1) {
    let playerNumber = pickedNumbers[cont];
    // console.log('Picked number ', playerNumber);

    if (drawnNumber === playerNumber) {
      numberofHits += 1;
    }
  }
}

console.log('Number of hits: ', numberofHits)