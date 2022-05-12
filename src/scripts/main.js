'use strict';

const form = document.querySelector('.form-fields');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

document.querySelector('.questions__btn').addEventListener('click', () => {
  document.querySelector('.questions').classList.toggle('questions-open');
});
