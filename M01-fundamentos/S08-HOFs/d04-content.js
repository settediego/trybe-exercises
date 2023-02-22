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


// --------------------- rest ---------------------

// O spread é responsável por espalhar valores, e ele pode ser utilizado para passar parâmetros ao EXECUTAR uma função. Já o rest pode ser utilizado para agrupar valores ao DECLARAR funções que podem receber múltiplos parâmetros.

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
