const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .mainMenu li a');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});


const submit = document.querySelector('.myButton');
submit.addEventListener('click', (event) => {
  const error = document.querySelector('.err');
  const email = document.getElementById('emailAddress').value;
  const islowerCase = (str) => str === str.toLowerCase();
  if (!islowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Please enter your email-id in lowercase';
  }
});
