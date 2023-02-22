// Exercise 1:

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Grape', 'Strawberry', 'Orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Mango', 'Apple'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui:
  const fruitSalad = [...fruit, ...additional];
  return fruitSalad;
}

console.log(fruitSalad(specialFruit, additionalItens));

// Exercise 2:

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const personalInfos = { ...user, ...jobInfos};

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const aboutMe = ({ name, age, nationality, profession, squad, squadInitials }) => {
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
};

aboutMe(personalInfos);