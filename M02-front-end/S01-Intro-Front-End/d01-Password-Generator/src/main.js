import { nanoid } from "nanoid";
import copy from 'clipboard-copy';

import './style.css';

const btnCreate = document.getElementById('btnElement');
const password = document.getElementById('password');
btnCreate.addEventListener('click', () => {
  const safePassword = nanoid()
  password.innerHTML = safePassword;
});

password.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
