// Remova a tag h2, filha do elemento elementoOndeVoceEsta.

const father = document.getElementById('pai');
console.log(father);

const allSons = pai.childNodes;
console.log(allSons);

for (let index = 0; index < allSons.length; index += 1) {
  const elementToBeRemoved = allSons[index];

  if (elementToBeRemoved.id === 'elementoOndeVoceEsta') {
    elementToBeRemoved.removeChild(elementToBeRemoved.firstElementChild);
  }
}

// Using the selector getElementById we can select the element with id elementoOndeVoceEsta and use the method removeChild()

// const pai = document.getElementById('elementoOndeVoceEsta');
//   pai.removeChild(pai.firstElementChild);