// Exercise 1:

// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
// }
// imprimeIdade()

// Exercise 2:

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`

// const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa.nome = 'Luna';
// pessoa.idade = 19;
// // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

// Exercise 3:

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

// Exercise 4: 

// const name = 'Adriana';
// const lastName = 'Soares';
// // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// console.log(`Olá ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// Exercise 5:

// Transforme a função numeroAleatorio em uma arrow function;

// function numeroAleatorio() {
//   return Math.random()
// }
// console.log(numeroAleatorio());

// const numeroAleatorio = () => Math.floor(Math.random() * 100);

// Math.floor -> arredonda o número randômico gerado por Math.random.

// console.log(numeroAleatorio());

// Exercise 6:

// Transforme a função hello em uma arrow function:

// function hello(nome) {
//   return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

// const hello = nome => `Olá, ${nome}`;
// let nome = 'Ivan';
// console.log(hello(nome));

// Exercise 7:

// Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// Exercise 8:

let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

const speedCar = speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

console.log(speedCar);