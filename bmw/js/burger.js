const menuElem = document.querySelector('.menu');
const humburgerMenu = document.querySelector('.humburger-menu');
const body = document.querySelector('body');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerMenu.classList.toggle('humburger-menu-active');

  if (humburgerMenu.classList.contains('humburger-menu-active')) {
    body.style.overflow = 'hidden';
    humburgerMenu.classList.add('merko');
  } else {
    body.style.overflow = 'auto';
  }
};

const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerMenu.classList.remove('humburger-menu-active');

  if(humburgerMenu.classList.contains('merko')) {
    body.style.overflow = 'auto';
  }
};

  humburgerMenu.addEventListener('click', toggleMenu);
  
  menuElem.addEventListener('click', (event) => {
    const target = event.target;
    console.log('target: ', target);
    
    if (target.classList.contains('menu-list__link')) {
      closeMenu();
    }
  });