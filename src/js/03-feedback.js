const throttle = require('lodash.throttle'); //throttle

const inputEmail = document.querySelector('input[name="email"]'); // email

const form = document.querySelector('.feedback-form'); // form

const messageText = document.querySelector('textarea[name="message"]'); //textarea

const localKey = 'feedback-form-state'; // storageKey

form.addEventListener('input', throttle(formInputSave, 500));

// SAVE VALUES

function formInputSave() {
  const saveObject = {
    email: inputEmail.value,
    message: messageText.value,
  };
  localStorage.setItem(localKey, JSON.stringify(saveObject));
}
// RELOAD
let savedValues;
reloadPage();

function reloadPage() {
  savedValues = JSON.parse(localStorage.getItem(localKey));
  console.log(savedValues);
  if (savedValues === null) {
    inputEmail.value = '';
    messageText.value = '';
  }
  inputEmail.value = savedValues.email;
  messageText.value = savedValues.message;
}
// const savedValues = JSON.parse(localStorage.getItem(localKey));
// if (savedValues) {
//   inputEmail.value = savedValues.email;
//   messageText.value = savedValues.message;
// }
// CLEAR FORM
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  console.log(savedValues);
  localStorage.clear(localKey);
  form.reset();
}
//! /////////////////////////////

// const obj = {};
// var throttle = require('lodash.throttle');

// if(JSON.parse(localStorage.getItem('feedback-form-state'))){
//     ref.inputTypeTextarea.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
//     ref.inputTypeEmail.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
// }

// ref.buttonSubmit.addEventListener('click', newForm)

// function newForm (e) {
// console.log(`attention please!!! message = ${obj.message} and email = ${obj.email}`)
// alert(`attention please!!! message = ${obj.message} and email = ${obj.email}`)
// e.preventDefault();
// localStorage.clear('feedback-form-state');
// ref.inputTypeEmail.value = '';
// ref.inputTypeTextarea.value = '';

// }
