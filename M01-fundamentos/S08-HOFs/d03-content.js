const estudantes = require('./students')


// --------------------- filter ---------------------

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const names = dados.filter((item) => typeof item === 'string');

console.log(names);
// ----

const listaNumeros = [10, 20, 30, 40];

const maiorVinte = listaNumeros.filter((item) => item > 20);

console.log(maiorVinte);


// --------------------- reduce ---------------------

const valorItens = [1, 32, 44, 2, 3];

valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

// --------------------- reduce & map ---------------------

// Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele!

const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name,
}));

console.log(reportBest(estudantes));