// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression); // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression); // isso é mentira

// Como você pode ver, a sintaxe do operador ternário é bem simples: x ? y : z.

// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa.

// Example: 

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

// Example 2:
let age = 16;

// if (age >= 18) {
//   console.log(`Você tem idade para dirigir!`);
// } else {
//   console.log(`Você ainda não tem idade para dirigir...`);
// }

// Using Ternary Operator:

const driverAge = age >= 18 ? 'Você tem idade para dirigir!' : 'Você ainda não tem idade para dirigir...';

console.log(driverAge);

// To situations that we need to have an answer only in case of a positive IF:

// console.log(age >= 18 && 'testeteste');
