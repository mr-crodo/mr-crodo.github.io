const menuElem = document.querySelector('.menu');
const humburgerMenu = document.querySelector('.humburger-menu');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerMenu.classList.toggle('humburger-menu-active');
  disableScroll();

  // if (humburgerMenu.classList.contains('humburger-menu-active')) {
  //   document.body.style.overflow = 'hidden';
  //   humburgerMenu.classList.add('merko');
  // } else {
  //   document.body.style.overflow = 'auto';
  // }
};

const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerMenu.classList.remove('humburger-menu-active');
  enableScroll();

  // if(humburgerMenu.classList.contains('merko')) {
  //   document.body.style.overflow = 'auto';
  // }
};

  humburgerMenu.addEventListener('click', toggleMenu);
  
  menuElem.addEventListener('click', (event) => {
    const target = event.target;
    console.log('target: ', target);
    
    if (target.classList.contains('menu-list__link')) {
      closeMenu();
    }
  });