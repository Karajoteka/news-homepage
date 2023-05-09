const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const mobileMenu = document.querySelector('.mobile-menu');

iconMenu.addEventListener('click', showMenu);
iconClose.addEventListener('click', hideMenu);

function showMenu() {
  mobileMenu.classList.remove('inactive'); 
}

function hideMenu() {
  mobileMenu.classList.add('inactive');
}


