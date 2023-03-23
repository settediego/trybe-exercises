// --------------------- sort --------------------- 

// Use sort to sort the array by age of the people in ascending order 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
// Add your code here:

people.sort((personA, personB) => personA.age - personB.age);

console.log(people);


// --------------------- map --------------------- 

// Transform all the numbers into negative and pass them into a new array.

const numbers = [1, 2, 3, 4, -5];
// Add your code here:

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Consider that you have two lists: the price of the first product (Rice) is the first element of the list prices (2.99), and so on. You want to combine them into just one object list

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]
