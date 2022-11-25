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

// ARITHMETIC AVERAGE:

let ariAvg = sumArray/numbers.length;
console.log('Arithmetic Average: ' + ariAvg);

// BIGGER, SMALLER OR EQUAL 20:

if (ariAvg > 20) {
  console.log("Value bigger than 20");
} else {
  console.log("Value smaller or equal 20");
}

// HIGHEST VALUE ON ARRAY:

let higher = numbers[0];
for (let index = 0; index < numbers.length ; index += 1) {
  if (higher < numbers[index]) {
    higher = numbers[index]
  }
}
console.log('The highest value on Array is ', higher);

// LOWEST NUMBER ON ARRAY:

let lower = numbers[0];
for (let index = 0; index < numbers.length ; index += 1) {
  if (lower > numbers[index]) {
    lower = numbers[index]
  }
}
console.log('The lower value on Array is ', lower);

// ODDS VALUES ON ARRAY:

let oddNumbers = 0
for (let index = 0; index < numbers.length ; index += 1) {
  if (numbers[index] % 2 != 0) {
    oddNumbers += 1
  }
}
if (oddNumbers == 0) {
  console.log("No odd value found");
} else {
  console.log("The number of odd values on array is "+ oddNumbers);
}

