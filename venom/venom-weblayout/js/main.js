const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");
menuButton.addEventListener("click", () => {
  menu.classList.add("is-open");
  menuButtonClose.classList.add("is-active");
});
menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuButtonClose.classList.remove("is-active");
});


// pop-up form
const hideForm = document.querySelector('.hide-form')
const orderTicket = document.querySelector('.order-ticket')
const orderTrigger = document.querySelector('.order-trigger')
const orderTicketForm = document.querySelector('.order-ticket__form')


// vizivaem etu knopku s zaderjkoy
setTimeout(() => {
  // nashli visotu fori bes probki
  const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -heightForm + 'px'
}, 3000)


const sendData = (data, callback) => {

}

const showThankYou = () => {
  console.log('Spasibo');
}


orderTrigger.addEventListener('click', () => {
  hideForm.classList.toggle('hide-form-active')
})

orderTicketForm.addEventListener('change', (event) => {
  const target = event.target;
  const label = target.labels[0];
  if(label && target.value) {
    label.classList.add('order-ticket__label-focus')
  } else {
    label.classList.remove('order-ticket__label-focus')
  }
});

orderTicketForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(orderTicketForm);
  const data = {};
  for (const [name, value] of formData) {
    data[name] = value;
  }

  sendData(data, shawThankYou);
  console.log(data);
  
});
