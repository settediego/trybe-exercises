import validator from 'validator';

import './style.css';

const valueInput = document.getElementById('value');
const validateBtn = document.getElementById('btnValidation');
const seletor = document.getElementById('option');
const outputText = document.getElementById('answer');

const UUID_VERSION = 4;

validateBtn.addEventListener('click', (event) => {
  // Usado para evitar que ao clicar no botão a página seja regarregada
  event.preventDefault();

  const inputType = {
    email: validator.isEmail(valueInput.value),
    CPF: validator.isTaxID(valueInput.value, 'pt-BR'),
    URL: validator.isURL(valueInput.value),
    uuid: validator.isUUID(valueInput.value, UUID_VERSION),
    hexColor: validator.isHexColor(valueInput.value),
  };

  outputText.innerHTML = `A validação retornou ${inputType[seletor.value]}`;
});
