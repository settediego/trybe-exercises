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

  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);

  // Exercise 4: 

  const name = 'Adriana';
  const lastName = 'Soares';
  // console.log('Olá' + ',' + name + ' ' + lastName + '!');
  console.log(`Olá ${name} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
  console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);