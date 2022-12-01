// Conventional structure
// function sum (num1, num2) {
//   return (num1 + num2);
// }


// Using arrow functions
// 1. Take off the word FUNCTION and putting CONST instead of it

// const sum (num1, num2) {
//   return num1 + num2;
// }

// 2. Putting an = after the name of the function:

// const sum = (num1, num2) {
//   return num1 + num2;
// }

// 3. Putting an arrow before the braces:

const sum = (num1, num2) => num1 + num2;

console.log(sum(2,8));