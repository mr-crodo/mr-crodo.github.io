"use strict";

var score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
car.classList.add('car'); // ? sdes mi klassu dobavili esho odin klass kotoriy mi opisali v css
// ? kotorimu mi zadali display none
//? eta ustarevshaya versiya tak kak dla toqo ctobi sdelat esho odin
// ? obrabotcik sobitiy nam nado budet eqo esho raz napisat
// start.onclick = function () {
//   start.classList.add('hide'); 
// };

start.addEventListener('click', startGame); // eta sobitie "keydown" srabativaet koqda na klaviature srabativaet lybaya klavisha

document.addEventListener('keydown', startRun); // "keyup" koqda otpuskaem funkciyu

document.addEventListener('keyup', stopRun);
var keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};
var setting = {
  start: false,
  score: 0,
  speed: 3,
  traffic: 3
};

function getQualityElements(heightElement) {
  return document.documentElement.clientHeight / heightElement + 1;
} // console.log(getQualityElements(100));


function startGame() {
  start.classList.add('hide');
  gameArea.innerHTML = ''; // 60 mojno izmenit

  for (var i = 0; i < getQualityElements(60); i++) {
    var line = document.createElement('div');
    line.classList.add('line');
    line.style.top = i * 100 + 'px';
    line.y = i * 100;
    gameArea.appendChild(line);
  }

  for (var _i = 0; _i < getQualityElements(100 * setting.traffic); _i++) {
    var enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.y = -100 * setting.traffic * (_i + 1); // sdes zadayem poyavleniye mashini enemy randomno

    enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
    enemy.style.top = enemy.y + 'px'; // dobavlaem kartinku avtomobila

    enemy.style.background = 'transparent url(/image/enemy.png) center / cover no-repeat';
    gameArea.appendChild(enemy);
  }

  setting.score = 0;
  setting.start = true;
  gameArea.appendChild(car); // car.style.left = gameArea.offsetWidth/2 - car.offsetWidth/2;

  car.style.left = '125px';
  car.style.top = 'auto';
  car.style.bottom = '10px';
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
  requestAnimationFrame(playGame);
}

function playGame() {
  if (setting.start) {
    setting.score += setting.speed;
    score.innerHTML = 'SCORE:<br>' + setting.score;
    moveRoad();
    moveEnemy();

    if (keys.ArrowLeft && setting.x > 0) {
      setting.x -= setting.speed;
    }

    if (keys.ArrowRight && setting.x < gameArea.offsetWidth - car.offsetWidth) {
      setting.x += setting.speed;
    }

    if (keys.ArrowUp && setting.y > 0) {
      setting.y -= setting.speed;
    }

    if (keys.ArrowDown && setting.y < gameArea.offsetHeight - car.offsetHeight) {
      setting.y += setting.speed;
    }

    car.style.left = setting.x + 'px';
    car.style.top = setting.y + 'px'; // funkciya zapuskayushaya sama sebanazivaetsa rekursiyey

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

function moveRoad() {
  var lines = document.querySelectorAll('.line');
  lines.forEach(function (line) {
    line.y += setting.speed;
    line.style.top = line.y + 'px';

    if (line.y >= document.documentElement.clientHeight) {
      line.y = -100;
    }
  });
}

function moveEnemy() {
  var enemy = document.querySelectorAll('.enemy');
  enemy.forEach(function (item) {
    var carRect = car.getBoundingClientRect();
    var enemyRect = item.getBoundingClientRect();

    if (carRect.top <= enemyRect.bottom && carRect.right >= enemyRect.left && carRect.left <= enemyRect.right && carRect.bottom >= enemyRect.top) {
      setting.start = false;
      start.classList.remove('hide');
      score.style.top = start.offsetHeight;
    }

    item.y += setting.speed / 2;
    item.style.top = item.y + 'px';

    if (item.y >= document.documentElement.clientHeight) {
      item.y = -100 * setting.traffic;
      item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
    }
  });
}