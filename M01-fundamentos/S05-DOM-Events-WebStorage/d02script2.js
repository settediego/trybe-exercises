// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const novoIrmao = document.createElement('section');
novoIrmao.id = 'novoIrmao';
pai.appendChild(novoIrmao);

// Crie um filho para elementoOndeVoceEsta.
const OndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const maisUmFilho = document.createElement('section');
maisUmFilho.id = 'maisUmFilho';
OndeVoceEsta.appendChild(maisUmFilho);

// Crie um filho para primeiroFilhoDoFilho.
const primeiroNeto = document.getElementById('primeiroFilhoDoFilho');
const bisneto = document.createElement('section');
bisneto.id = 'bisneto';
primeiroNeto.appendChild(bisneto);
// Everything in this item can be resumed in the next line, but I don't think it is a good practice:

// document.getElementById('primeiroFilhoDoFilho').appendChild(document.createElement('section')).id = 'bisneto';


// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = bisneto
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);