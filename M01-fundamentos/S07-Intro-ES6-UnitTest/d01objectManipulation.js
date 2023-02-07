// 1 - Add infos(name, email, phone number, github and LinkedIn) to the object pessoaEstudante = {} using the methods learned in this content.

const pessoaEstudante = {};

const addProperty = (object, newKey, value) => {
  object[newKey] = value;
}

addProperty(pessoaEstudante, 'Name', 'Diego Sette');
addProperty(pessoaEstudante, 'email', 'dsettedsm@gmail.com');
addProperty(pessoaEstudante, 'phone number', '+55 31 99999-9999');
addProperty(pessoaEstudante, 'GitHub', '/settediego');
addProperty(pessoaEstudante, 'LinkedIn', '/diegosette');

console.log(pessoaEstudante);

// Try to create a function that show the text 'Name of skill, Level: key value of skill':

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom',
};

const showSkillLevel = (student) => {
  
}


// ------------------Object.keys-------------------

// const student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// const student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for (const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const student = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskill: 'Ótimo',
// };


// ------------------Object.values-------------------

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => {
//   return Object.values(student);
// }

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));


// ------------------Object.entries-------------------

// const coutries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(coutries);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


// ------------------Object.assign-------------------

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// /* Output
//   { name: 'Alberto',
//   lastName: 'Gomes',
//   age: 23,
//   job: 'engenheiro',
//   children: [ 'Maria', 'João' ],
//   wife: 'Ana'
//   } */