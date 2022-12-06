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
  console.log("Value greater than 20");
} else {
  console.log("Less than or equal to 20");
}

// HIGHEST VALUE ON ARRAY:

let higher = numbers[0];
for (let index = 1; index < numbers.length ; index += 1) {
  if (higher < numbers[index]) {
    higher = numbers[index]
  }
}
console.log('The highest value on Array is ', higher);

// SMALLEST NUMBER ON ARRAY:

let smaller = numbers[0];
for (let index = 1; index < numbers.length ; index += 1) {
  if (smaller > numbers[index]) {
    smaller = numbers[index]
  }
}
console.log('The smaller value on Array is ', smaller);

// ODDS VALUES ON ARRAY:

let oddNumbers = 0
for (let index = 0; index < numbers.length ; index += 1) {
  if (numbers[index] % 2 != 0) {
    oddNumbers += 1;
  }
}
if (oddNumbers == 0) {
  console.log("No odd value found");
} else {
  console.log("The number of odd values on array is "+ oddNumbers);
}

// ARRAY 1 TO 25:

console.log("Array 1 to 25:");
let arrayto25 = [];
for (index = 1 ; index <= 25 ; index += 1) {
  arrayto25.push (index);
}
console.log(arrayto25);

// ARRAY CREATED AND DIVIDED BY 2:

console.log("The last array divided by 2:")
let div2 = arrayto25
for (index =0 ; index < div2.length ; index += 1) {
  div2[index] = div2[index]/2
}
console.log(div2)

// DIVISIONS OF THE GIVEN ARRAY BY 2:

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};