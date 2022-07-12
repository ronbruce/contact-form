/* import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */
const nameInput = document.querySelector('[name="name"]');

nameInput.addEventListener('invalid', () => {
  nameInput.setCustomValidity('Please enter your first name');
});
