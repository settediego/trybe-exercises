const lotteryNumbers = [14, 26, 56, 39, 27, 5];


// Imprime os numeros de index 0 a 5 de um em um(não é uma boa prática):

// console.log(lotteryNumbers[0]);
// console.log(lotteryNumbers[1]);
// console.log(lotteryNumbers[2]);
// console.log(lotteryNumbers[3]);
// console.log(lotteryNumbers[4]);
// console.log(lotteryNumbers[5]);

// Imprime o número de elementos do array:

// console.log(lotteryNumbers.length);

// Melhor maneira de fazer:

for (let index=0; index < lotteryNumbers.length; index += 1) {
  console.log(lotteryNumbers[index]);
}

// Estrutura for(of):

for (let value of lotteryNumbers) {
  console.log(value);
}