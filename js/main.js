const doc = document;

const userForm = doc.forms.userForm;
const fields = userForm.fields.elements;
const sendBtn = userForm.sendBtn;
const fieldName = userForm.name;

const isValid = {
  name: false,
  age: false,
};

for (let field of fields) {
  field.oninput = function() {
    const value = this.value;
    const fieldName = field.name;
    const parent = field.parentElement;
    console.log(parent);

    if (value.length >= 5) {
      console.log(`[${fieldName}] is valid`);

      parent.classList.remove('error');
      delete parent.dataset.helperText;

      sendBtn.classList.remove('form-notvalid');
      sendBtn.classList.add('form-valid');

      isValid[fieldName] = true;
    } else {
      parent.classList.add('error');
      parent.dataset.helperText = 'Is not valid data !!!'

      sendBtn.classList.remove('form-valid');
      sendBtn.classList.add('form-notvalid');

      isValid[fieldName] = false;
    }
  }
}

userForm.onsubmit = function(e) {
  e.preventDefault();
  console.log(isValid);
}
