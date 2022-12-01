let number = 21
// const evenOrOdd = (number) => {
//     // if(number % 2 === 0){
//     //   return 'PAR';
//     // } else {
//     //   return 'ÍMPAR'
//     // }

// // Using Ternary Operators instead of IF:

//   return (number % 2 ===0) ? 'PAR' : 'ÍMPAR';
// }

// Refatorando:
const evenOrOdd = (number) => (number % 2 === 0) ? 'PAR' : 'ÍMPAR';

console.log(`O número ${number} é: ${evenOrOdd(number)}`);