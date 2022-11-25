let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRINTING ALL VALUES ON ARRAY:

// for (let index = 0; index < numbers.length; index +=1) {
//   console.log(numbers[index]);
// }

// it can also be done using FOR OF:
// for (variável OF array) {
//
// }


// SUM OF ARRAY VALUES:

let sumArray = 0;

for (let index = 0 ; index < numbers.length; index +=1) {
  sumArray = sumArray + numbers[index]
}

console.log(sumArray);

// Arithmetic Average:

let ariAvg = sumArray/numbers.length;
console.log('Arithmetic Average: ' + ariAvg);

// Bigger, Smaller or Equal 20:

if (ariAvg > 20) {
  console.log("Value bigger than 20");
} else {
  console.log("Value smaller or equal 20");
}

// Highest value on Array:

let higher = numbers[0];
for (let index = 0; index < numbers.length ; index += 1) {
  if (higher < numbers[index]) {
    higher = numbers[index]
  }
}
console.log('The highest value on Array is ', higher);