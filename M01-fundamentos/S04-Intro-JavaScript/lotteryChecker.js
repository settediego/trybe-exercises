// A pessoa marca 6 números, no intervalo de 1 a 60;

const pickedNumbers = [8, 22, 26, 38, 42, 60];

// JOGO SORTEADO = Uma sequência de 6 números é sorteada nesse mesmo intervalo.
// const number1 = Math.floor(Math.random() * 60) + 1;
// const number2 = Math.floor(Math.random() * 60) + 1;
// const number3 = Math.floor(Math.random() * 60) + 1;
// const number4 = Math.floor(Math.random() * 60) + 1;
// const number5 = Math.floor(Math.random() * 60) + 1;
// const number6 = Math.floor(Math.random() * 60) + 1;

// const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];

let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  megaSenaNumbers.push(Math.floor(Math.random() * 60) + 1);
}

// Se os números forem correspondentes, 🤑!

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

console.log("Player's game " + pickedNumbers);
console.log('Drawn numbers ', megaSenaNumbers);
console.log('Number of hits: ', numberofHits);
