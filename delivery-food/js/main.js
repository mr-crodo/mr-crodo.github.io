const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// ! Day one
const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.querySelector('#logInForm'),
  loginInput = document.querySelector('#login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('deliveriLocal');

// // console.dir(modalAuth); выводит класс в виде обьекта 
// modalAuth.classList.add('hello'); // dobavlaet klass
// modalAuth.classList.contains('hello'); // proveraet est li tak takoy klas ili net i peredaet znaceniya v vide boolevix znaceniyax truu ili folse
// modalAuth.classList.remove('modal-auth'); // udalaet klass
// //todo: toogle dobavlaet klass esli klassa netu, udalaet esli klass est
// modalAuth.classList.toggle('hello');

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
  loginInput.style.borderColor = '';

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


function notauthorized() {
  function logIn(event) {
    event.preventDefault();
    // eto uslovie dla toqo ctobi ne vvoda login nelza bilo zayti
    // i esli vvel probel to on ne zawitivaetsa

    if (loginInput.value.trim()) {

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
      loginInput.style.borderColor = '#ff0000';
    }
    
  }

  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);


}


function checkAuth() {
  if (login) {
    authorized();
  } else {
    notauthorized();
  }
}

checkAuth();