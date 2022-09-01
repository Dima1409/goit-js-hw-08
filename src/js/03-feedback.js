const throttle = require('lodash.throttle'); //throttle

const inputEmail = document.querySelector('input[name="email"]'); // email

const form = document.querySelector('.feedback-form'); // form

const messageText = document.querySelector('textarea[name="message"]'); //textarea

const localKey = 'feedback-form-state'; // storageKey

form.addEventListener('input', throttle(formInputSave, 500));


let savedValues = '';
function formInputSave() {
  const saveObject = {
    email: inputEmail.value,
    message: messageText.value,
  };
  localStorage.setItem(localKey, JSON.stringify(saveObject));
  
  
}



// const savedValues = JSON.parse(localStorage.getItem(localKey));
// if (savedValues) {
//   inputEmail.value = savedValues.email;
//   messageText.value = savedValues.message;
// }

savedValues = JSON.parse(localStorage.getItem(localKey));
if (savedValues) {
  inputEmail.value = savedValues.email;
  messageText.value = savedValues.message;
}
// CLEAR FORM
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
     
  if(savedValues) {
     console.log(savedValues)
     savedValues = null
     localStorage.clear();
     form.reset();
  }
}


