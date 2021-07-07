const
  headerCityButton = document.querySelector('.header__city-button'),
  subheaderCart = document.querySelector('.subheader__cart'),
  cartOverlay = document.querySelector('.cart-overlay');


// ternarniy operator
headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите ваш город');
  headerCityButton.textContent = city;
  localStorage.setItem('lomoda-location', city)
});

// ! no scroll
// ? dla toqo ctobi scroll ne priqal
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left:0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};
const enableScroll = () =>{
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY
  })
}


//! modal window

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disableScroll();
}

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open')
  enableScroll()
};
subheaderCart.addEventListener('click', cartModalOpen);

// zakritie po Esk
document.addEventListener('keydown', function (event) {
      if (event.code == 'Escape') {
        cartModalClose();
      }
    })

// delegirovanie
cartOverlay.addEventListener('click', event => {
  const target = event.target
  
  // ! krome -- target."classList.contains" mojno ispolzovat "matches" no s selektorom tocki ili rewetki
  if(target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose();
  }
})