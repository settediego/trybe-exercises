// TEMPLATE LITERALS:

// Com o template literals

console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


// Imprimindo valores dentro de um objeto e usando template literals para referênciar variáveis e colocar mudanças de linhas apenas com o Enter - Usar crases ao invés de aspas

let pessoa = {
  nome: 'Marcia',
  sobrenome: 'Nascimento',
  anoNascimento: 1979,
}

console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade da paciente: ${2022 - pessoa.anoNascimento}`);

// ARROW FUNCTIONS:

//Example 1:
// Without Arrow Functions:
// function contaPalavras (frase) {
//   return frase.split(' ').length;
// }

// console.log(contaPalavras('Fala tribo, beleza?'));

// Using Arrow Functions:
const contaPalavras = (frase) => frase.split(' ').length;

console.log(contaPalavras('Fala tribo, beleza?'));

//Example 2:
// Without Arrow Functions:
// function objetoPessoa (nome, idade) {
//   return {
//     nome: nome,
//     idade: idade,
//   }
// }

// console.log(objetoPessoa('Joaquim', 25));

// Using Arrow Functions:

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

console.log(objetoPessoa('Joaquim', 25));