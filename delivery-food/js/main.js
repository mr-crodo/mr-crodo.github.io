'use strick';

import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';



const RED_COLOR = '#ff0000';
// ! Day one
const
  cartButton = document.querySelector("#cart-button"),
  close = document.querySelector(".close"),
  modal = document.querySelector(".modal"),
  buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginInput = document.querySelector('#login'),
  passwordInput = document.querySelector('#password'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out'),
  cardsRestaurants = document.querySelector('.cards-restaurants'),
  containerPromo = document.querySelector('.container-promo'),
  restaurants = document.querySelector('.restaurants'),
  menu = document.querySelector('.menu'),
  logo = document.querySelector('.logo'),
  cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('deliveriLocal');

// // console.dir(modalAuth); выводит класс в виде обьекта 
// modalAuth.classList.add('hello'); // dobavlaet klass
// modalAuth.classList.contains('hello'); // proveraet est li tak takoy klas ili net i peredaet znaceniya v vide boolevix znaceniyax truu ili folse
// modalAuth.classList.remove('modal-auth'); // udalaet klass
// //todo: toogle dobavlaet klass esli klassa netu, udalaet esli klass est
// modalAuth.classList.toggle('hello');

const getData = async function(url) {
  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус: ${response}`);
  }

  return response.json();
};




// ! Funkciya validacii dla logina
// sdes slovo function zamenena const
const validName = function(str) {
  const regName = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  return regName.test(str);
}


function toggleModal() {
  modal.classList.toggle("is-open");
}


function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
  //  ! syda mi propisivaem funkciyu dla ostanovki scrola na stranice
  if (modalAuth.classList.contains('is-open')) {
    disableScroll();
  } else {
    enableScroll();
  }

}

// sdes piwem funciyu dla ocistki logina vo vrema zakritiya modalki
function clearForm() {
  loginInput.style.borderColor = '';
  logInForm.reset();
}

function authorized() {
  function logOut() {
    login = null;
    localStorage.removeItem('deliveriLocal');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  console.log('Avtorizovan');
  userName.textContent = login;

  // buttonAuth.style.backgroundColor = 'red';
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}


function notAuthorized() {
  function logIn(event) {
    event.preventDefault();
    // eto uslovie dla toqo ctobi ne vvoda login nelza bilo zayti
    // i esli vvel probel to on ne zawitivaetsa

    if (validName(loginInput.value)) {

      login = loginInput.value;
      localStorage.setItem('deliveriLocal', login);
      toogleModalAuth();
      buttonAuth.removeEventListener('click', toogleModalAuth);
      closeAuth.removeEventListener('click', toogleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
      // alert('Введите логин');
      loginInput.style.borderColor = RED_COLOR;
      // udalaem probeli posle toqo koqda vveli probel
      loginInput.value = '';
    }

  }

  buttonAuth.addEventListener('click', toogleModalAuth);
  // buttonAuth.addEventListener('click', clearForm);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
  //  sdes piwem functiyu dla zakritiya modalnoqo okna po kliku temnoy oblasti
  modalAuth.addEventListener('click', function (event) {
    if (event.target.classList.contains('is-open')) {
      toogleModalAuth();
    }
  });


}

buttonAuth.addEventListener('click', clearForm);


function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}





// polucaem kartocki restoranov
function createCardRestorant() {

  const card = `
               <a class="card card-restaurant">
                  <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
                  <div class="card-text">
                    <div class="card-heading">
                      <h3 class="card-title">Пицца плюс</h3>
                      <span class="card-tag tag">50 мин</span>
                    </div>
                    <div class="card-info">
                      <div class="rating">
                        4.5
                      </div>
                      <div class="price">От 900 ₽</div>
                      <div class="category">Пицца</div>
                    </div>
                  </div>
                </a>
                
  `;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);
}



function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('beforeend', `
						<img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Везувий</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
									«Халапенье», соус «Тобаско», томаты.
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">545 ₽</strong>
							</div>
						</div>
					
 `);


  cardsMenu.insertAdjacentElement('beforeend', card);
}

function openGoods(event) {

  const target = event.target;

  if (login) {


    const restaurant = target.closest('.card-restaurant');
    if (restaurant) {
      cardsMenu.textContent = '';
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');

      createCardGood();
      createCardGood();
      createCardGood();
    } 

  } else {
    toogleModalAuth();
    loginInput.value = '';
  }




}


cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

cardsRestaurants.addEventListener('click', openGoods);

logo.addEventListener('click', function () {
  containerPromo.classList.remove('hide')
  restaurants.classList.remove('hide')
  menu.classList.add('hide')
});

checkAuth();

createCardRestorant();
createCardRestorant();
createCardRestorant();


// Slider 
new Swiper('.swiper-container', {
  sliderPerView: 1,
  loop: true,
  effect: 'cube',
  cubeEffect:{
    shadow: false
  },
  // autoplay: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    // reverseDirection: true,
  },
  
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});