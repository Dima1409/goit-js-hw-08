import { save, load, remove } from './storage';

const throttle = require('lodash.throttle'); //throttle

const inputEmail = document.querySelector('input[name="email"]'); // email

const form = document.querySelector('.feedback-form'); // form

const messageText = document.querySelector('textarea[name="message"]'); //textarea

const LOCAL_KEY = 'feedback-form-state'; // storageKey

form.addEventListener('input', throttle(formInputSave, 500));

function formInputSave() {
  const saveObject = {
    email: inputEmail.value,
    message: messageText.value,
  };
  save(LOCAL_KEY, saveObject);
}
const savedValues = load(LOCAL_KEY);

if (savedValues) {
  inputEmail.value = savedValues.email;
  messageText.value = savedValues.message;
}

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  if (load(LOCAL_KEY)) {
    console.log(load(LOCAL_KEY));
    remove(LOCAL_KEY);
    form.reset();
  }
}
