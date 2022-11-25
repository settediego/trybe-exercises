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

// ARRAY 1 TO 25:

let arrayto25 = [1];
for (index = 0 ; index < 24 ; index += 1) {
  arrayto25.push (arrayto25[index] + 1);
}
console.log(arrayto25);

// DIVISIONS BY 2:

console.log("The last array divided by 2:")
let div2 = arrayto25
for (index =0 ; index < div2.length ; index += 1) {
  div2[index] = div2[index]/2
}
console.log(div2)