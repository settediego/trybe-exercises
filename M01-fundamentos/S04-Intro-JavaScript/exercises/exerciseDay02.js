let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRINTING ALL VALUES ON ARRAY:

// for (let index = 0; index < numbers.length; index +=1) {
//   console.log(numbers[index]);
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