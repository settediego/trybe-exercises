// --------------------- forEach --------------------- doesn't have a return

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.
// Add your code here:
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});

// or

// const cadastrado = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// emailListInData.forEach(cadastrado);


// --------------------- find --------------------- returns the first match

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// Add your code here:
const checkNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(checkNumbers);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Add your code here:
const fiveLettersName = names.find((name) => name.length === 5);
console.log(fiveLettersName);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Add your code here:
const idMusic = musicas.find((music) => music.id === '31031685');
console.log(idMusic);


// --------------------- some --------------------- returns a boolean if it finds an item that respect the rule

// Create a function that checks if the name Ana is in the list, do it for Pedro as well.
const list = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
// Add your code here:
  return arr.some((invited) => invited === name);
};

console.log(hasName(list, 'Ana'));
console.log(hasName(list, 'Pedro'));


// --------------------- every --------------------- returns a boolean if all items respect the rule

// Create a function that verifies if all items from array PEOPLE has the minimum age specified
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Add your code here:
const verifyAges = (arr1, age) => arr1.every((person) => person.age > age);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
