const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const changeLiTech = (event) => {
  const liTech = document.getElementsByClassName('tech')[0];
  liTech.className = '';
  event.target.className = 'tech';
};

firstLi.addEventListener('click', changeLiTech);
secondLi.addEventListener('click', changeLiTech);
thirdLi.addEventListener('click', changeLiTech);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const getText = () => {
  const classTech = document.getElementsByClassName('tech')[0];
  classTech.innerText = input.value;
}

input.addEventListener('input', getText)

// It can also be done with the function declared inside the addEventListener
input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', () => {
  window.location.href = 'https://www.linkedin.com/in/diegosette/';
})

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', () => {
  let arrayColor = ['pink', 'gray', 'blue', 'yellow', 'orange', 'black', 'red', 'green', 'white', 'purple'];
  let color = Math.floor(Math.random()*9);
  myWebpage.style.color = arrayColor[color];
})

myWebpage.addEventListener('mouseout', () => {
  myWebpage.style.color = 'unset';
})
// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.