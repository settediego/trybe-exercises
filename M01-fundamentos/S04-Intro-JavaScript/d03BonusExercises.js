let n = 5;
let result = '';
let ast = '*';
let space = ' ';

// for (let index = 0 ; index < n; index += 1) {
//   result += '*';
//   console.log(result); //Commeting this line, we can make a square of stars
// }

// for (let index2 = 0 ; index2 < n ; index2 +=1) {
// console.log(result); //Commeting this line, we can make a right triangle
// }


// Do a piramid with 'n' asteriscs in the base:

for (let index = 0; index <= n-3; index++) {
  if (index < 2) {
    result += space;
  } else {
    result += ast;
  }
}
console.log(result);

result = '';

for (let index = 0; index <= n-2; index += 1) {
  if (index < 1) {
    result += space;
  } else {
    result += ast;
  }
}
console.log(result);

result = '';

for (index = 0; index <= n-1; index++) {
  result += ast;
}
console.log(result);