// --------------------- spread ---------------------

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// cria um novo array com os itens do array original espalhados
const newItems = [...items, 'Meia'];

console.log(newItems);

// -----------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// ---------- spread em objetos:

const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

// Exercise:

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