const ContactTemplate = document.getElementById('newContactTemplate').innerHTML
const contactsListEl = document.getElementById('contactsList');
const nameInputEl = document.getElementById('nameInput');
const surnameInputEl = document.getElementById('surnameInput');
const phoneInputEl = document.getElementById ('phoneNumberInput');


document.getElementById('addContactBtn').addEventListener('click',onAddContactBtnClick);

contactsListEl.addEventListener('click', onAddContactsListClick)

function onAddContactBtnClick() {
  if (isFormValid()) {
    const newContact = getformData();

    addContact ({newContact});

    resetForm();  
  }
}

function onAddContactsListClick(e) {
  if(e.target.classList.contains('delete-btn')) {
    const el = getContactRow(e.target);
    deleteContact(el);
  }
}

function getContactRow(el) {
return el.closest ('.contact-item');
}

function isFormValid () {
return (
    !isEmpty(nameInputEl.value) && 
     !isEmpty(surnameInputEl.value) &&   
     !isEmpty(phoneInputEl.value) 
);
}

function deleteContact (el) {
  el.remove();

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