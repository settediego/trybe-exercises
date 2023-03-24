import validator from 'validator';

import './style.css';

const valueInput = document.getElementById('value');
const validateBtn = document.getElementById('btnValidation');
const seletor = document.getElementById('option');
const outputText = document.getElementById('answer');

validateBtn.addEventListener('click', (event) => {
  //Usado para evitar que ao clicar no botão a página seja regarregada
  event.preventDefault();

  const inputType = {
    email: validator.isEmail(valueInput.value),
    CPF: validator.isTaxID(valueInput.value, 'pt-BR'),
    URL: validator.isURL(valueInput.value),
    CPF: validator.isUUID(valueInput.value, 4),
    CPF: validator.isHexColor(valueInput.value),
  }

  outputText.innerHTML = `A validação retornou ${inputType[seletor.value]}`;
});