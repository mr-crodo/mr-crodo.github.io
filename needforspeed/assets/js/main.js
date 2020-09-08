const score = document.querySelector('.score'),
  start = document.querySelector('.start'),
  gameArea = document.querySelector('.gameArea'),
  car = document.createElement('div');

  car.classList.add('car');

// ? sdes mi klassu dobavili esho odin klass kotoriy mi opisali v css
// ? kotorimu mi zadali display none
//? eta ustarevshaya versiya tak kak dla toqo ctobi sdelat esho odin
// ? obrabotcik sobitiy nam nado budet eqo esho raz napisat
// start.onclick = function () {
//   start.classList.add('hide'); 
// };

start.addEventListener('click', startGame);

// eta sobitie "keydown" srabativaet koqda na klaviature srabativaet lybaya klavisha
document.addEventListener('keydown', startRun);
// "keyup" koqda otpuskaem funkciyu
document.addEventListener('keyup', stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};

const setting = {
  start: false,
  score: 0,
  speed: 3
};

function startGame() {
  start.classList.add('hide');
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  console.log('Play game!');
  if (setting.start) {
    // funkciya zapuskayushaya sama sebanazivaetsa rekursiyey
    requestAnimationFrame(playGame);
  }

}

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}