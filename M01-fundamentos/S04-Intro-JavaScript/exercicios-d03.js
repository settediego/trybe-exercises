// Exercise 01

// let num = 10;
// let fat = 1;

// for (let index = 1; index <= num ; index += 1) {
//   fat *= index
// }
// console.log(fat);

// Exercise 02

let word = 'tryber';
let drow = '';

for (let index = word.length-1 ; index >= 0 ; index -= 1) {
  drow += word[index];
}

// We can also use the functions below:
//  drow = word.split("").reverse().join("")

console.log(drow)