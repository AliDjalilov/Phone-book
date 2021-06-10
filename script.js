const ContactTemplate = document.getElementById('newContactTemplate').innerHTML
const contactsListEl = document.getElementById('contactsList');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const phoneInputEl = document.getElementById ('phoneNumberInput');


document.getElementById('addContactBtn').addEventListener('click',onAddContactBtnClick);

function onAddContactBtnClick() {
  if (isFormValid()) {
    const newContact = getformData();
    addContact ({newContact});
    resetForm();  
  }
}

function isFormValid () {
return (
    !isEmpty(nameInputEl.value) && 
     !isEmpty(surnameInputEl.value) &&  
     !isEmpty(phoneInputEl.value) 
);
}

function isEmpty (str) {
  return str === '' || str === null; 
}

function addContact(contact) {
const newContactHtml = getContactRowHtml(contact);

contactsListEl.insertAdjacentHTML('beforeend', newContactHtml);
}

function getContactRowHtml (contact) {

 return contactTemplate

  .replace('{{name}}', contact.name)
  .replace('{{surname}}', contact.surname)
  .replace('{{phone}}', contact.phone);
}

function getformData() {

return {
  name: nameInputEl.value,
  surname: surnameInputEl.value,
  phone: phoneInputEl.value,  
};
}

function resetForm() {

nameInputEl.value = '';
surnameInputEl.value = '';
phoneInputEl.value = '';
}