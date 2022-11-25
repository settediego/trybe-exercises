// BONUS EXERCISE:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// MULTIPLYING BY THE NEXT NUMBER:

let xNext = [];
for (index = 0 ; index < numbers.length ; index += 1) {
  if (index == numbers.length -1) {
    xNext.push(numbers[index]*2);
  } else {
  xNext.push(numbers[index]*numbers[index + 1]);
  }
}
console.log(xNext);

// PUTTING THE ARRAY IN ASCENDING AND DESCENDING ORDER:


for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log("Ascending order: ", numbers)

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log("Descending order: ", numbers)
