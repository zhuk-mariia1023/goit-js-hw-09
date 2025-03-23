const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
};

form.addEventListener('input', handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  saveToLocalStorage();
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

loadFromLocalStorage();
