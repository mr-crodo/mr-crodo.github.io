"use strict";

var MAX_ENEMY = 16;
var HEIGHT_ELEM = 100;
var MAX_AUDIO = 3;
var score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
var audio = document.createElement('embed');
var randomAudio = Math.floor(Math.random() * MAX_AUDIO) + 1;
audio.src = "/assets/audio/audio".concat(randomAudio, ".mp3");
audio.style.cssText = "position: absolute; top: -1000px;";
car.classList.add('car');
var countSection = Math.floor(document.documentElement.clientHeight / HEIGHT_ELEM);
gameArea.style.height = countSection * HEIGHT_ELEM;
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
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
  return gameArea.offsetHeight / heightElement + 1;
}

function startGame() {
  start.classList.add('hide');
  gameArea.innerHTML = '';

  for (var i = 0; i < getQualityElements(HEIGHT_ELEM); i++) {
    var line = document.createElement('div');
    line.classList.add('line');
    line.style.top = "".concat(i * HEIGHT_ELEM, "px");
    line.style.height = HEIGHT_ELEM / 2 + 'px';
    line.y = i * HEIGHT_ELEM;
    gameArea.appendChild(line);
  }

  for (var _i = 0; _i < getQualityElements(HEIGHT_ELEM * setting.traffic); _i++) {
    var enemy = document.createElement('div');
    var randomEnemy = Math.floor(Math.random() * MAX_ENEMY) + 1;
    enemy.y = -HEIGHT_ELEM * setting.traffic * (_i + 1);
    enemy.classList.add('enemy');
    enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - HEIGHT_ELEM / 2)) + 'px';
    enemy.style.top = enemy.y + 'px';
    enemy.style.background = "transparent url(/assets/img/enemy".concat(randomEnemy, ".png) center / cover no-repeat");
    gameArea.appendChild(enemy);
  }

  setting.score = 0;
  setting.start = true;
  gameArea.append(car);
  document.body.append(audio);
  car.style.left = gameArea.offsetWidth / 2 - car.offsetWidth / 2; // car.style.left = '125px';

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
    car.style.top = setting.y + 'px';
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  if (keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = true;
  }
}

function stopRun(event) {
  if (keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = false;
  }
}

function moveRoad() {
  var lines = document.querySelectorAll('.line');
  lines.forEach(function (line) {
    line.y += setting.speed;
    line.style.top = line.y + 'px';

    if (line.y >= gameArea.offsetHeight) {
      line.y = -HEIGHT_ELEM;
    }
  });
}

function moveEnemy() {
  var enemy = document.querySelectorAll('.enemy');
  enemy.forEach(function (item) {
    var carRect = car.getBoundingClientRect();
    var enemyRect = item.getBoundingClientRect();

    if (carRect.top + 5 <= enemyRect.bottom && carRect.right + 5 >= enemyRect.left && carRect.left + 5 <= enemyRect.right && carRect.bottom + 5 >= enemyRect.top) {
      setting.start = false;
      audio.remove();
      console.warn('ДТП');
      start.classList.remove('hide');
      start.style.top = score.offsetHeight;
    }

    item.y += setting.speed / 2;
    item.style.top = item.y + 'px';

    if (item.y >= gameArea.offsetHeight) {
      item.y = -HEIGHT_ELEM * setting.traffic;
      item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - HEIGHT_ELEM / 2)) + 'px';
    }
  });
}