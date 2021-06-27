const hamburguer = document.querySelector('#hamburger');
const menu = document.querySelector('#menu')

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('no__hidden')
})