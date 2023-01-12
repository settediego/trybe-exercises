// Exercise 01

let num = 10;
let fat = 1;

for (let index = 1; index <= num ; index += 1) {
  fat *= index
}
console.log(fat);

// Exercise 02

let word = 'tryber';
let drow = '';

for (let index = word.length-1 ; index >= 0 ; index -= 1) {
  drow += word[index];
}

// We can also use the functions below:
//  drow = word.split("").reverse().join("")

console.log(drow);

// Exercise 03

let array = ['java', 'javascript', 'python', 'html', 'css'];
let smallerWord = array[0];
let biggerWord = array[0];

for (let index = 0 ; index < array.length ; index++) {
  if (smallerWord.length > array[index].length) {
    smallerWord = array[index];
  }
  if (biggerWord.length < array[index].length) {
    biggerWord = array[index];
  }
}

console.log("A maior palavra é " + biggerWord + " e a menor palavra é " + smallerWord);

// Exercise 04

let maiorPrimo = 0;


for (let index = 2 ; index <= 50 ; index += 1) {
  let cont = 0;
  for (let index2 = index ; index2 > 1 ; index2 -= 1) {
      if (index%index2 == 0) {  
        cont += 1;
      }
    }
    if (cont == 1) {     
    maiorPrimo = index;
    }
  }
console.log(maiorPrimo);