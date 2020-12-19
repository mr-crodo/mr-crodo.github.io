"use strict";

var MAX_ENEMY = 16,
    HEIGHT_ELEM = 100,
    MAX_AUDIO = 3,
    score = document.querySelector(".score"),
    start = document.querySelector(".start"),
    gameArea = document.querySelector(".gameArea"),
    car = document.createElement("div"),
    audio = document.createElement("embed"),
    randomAudio = Math.floor(3 * Math.random()) + 1;
audio.src = "/trafficracer/assets/audio/audio".concat(randomAudio, ".mp3"), audio.style.cssText = "position: absolute; top: -1000px;", car.classList.add("car");
var countSection = Math.floor(document.documentElement.clientHeight / 100);
gameArea.style.height = 100 * countSection, start.addEventListener("click", startGame), document.addEventListener("keydown", startRun), document.addEventListener("keyup", stopRun);
var keys = {
  ArrowUp: !1,
  ArrowDown: !1,
  ArrowRight: !1,
  ArrowLeft: !1
},
    setting = {
  start: !1,
  score: 0,
  speed: 3,
  traffic: 3
};

function getQualityElements(e) {
  return gameArea.offsetHeight / e + 1;
}

function startGame() {
  start.classList.add("hide"), gameArea.innerHTML = "";

  for (var e = 0; e < getQualityElements(100); e++) {
    var t = document.createElement("div");
    t.classList.add("line"), t.style.top = 100 * e + "px", t.style.height = "50px", t.y = 100 * e, gameArea.appendChild(t);
  }

  for (var _e = 0; _e < getQualityElements(100 * setting.traffic); _e++) {
    var _t = document.createElement("div"),
        s = Math.floor(16 * Math.random()) + 1;

    _t.y = -100 * setting.traffic * (_e + 1), _t.classList.add("enemy"), _t.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + "px", _t.style.top = _t.y + "px", _t.style.background = "transparent url(/trafficracer/assets/img/enemy".concat(s, ".png) center / cover no-repeat"), gameArea.appendChild(_t);
  }

  setting.score = 0, setting.start = !0, gameArea.append(car), document.body.append(audio), car.style.left = gameArea.offsetWidth / 2 - car.offsetWidth / 2, car.style.top = "auto", car.style.bottom = "10px", setting.x = car.offsetLeft, setting.y = car.offsetTop, requestAnimationFrame(playGame);
}

function playGame() {
  setting.start && (setting.score += setting.speed, score.innerHTML = "SCORE:<br>" + setting.score, moveRoad(), moveEnemy(), keys.ArrowLeft && setting.x > 0 && (setting.x -= setting.speed), keys.ArrowRight && setting.x < gameArea.offsetWidth - car.offsetWidth && (setting.x += setting.speed), keys.ArrowUp && setting.y > 0 && (setting.y -= setting.speed), keys.ArrowDown && setting.y < gameArea.offsetHeight - car.offsetHeight && (setting.y += setting.speed), car.style.left = setting.x + "px", car.style.top = setting.y + "px", requestAnimationFrame(playGame));
}

function startRun(e) {
  keys.hasOwnProperty(e.key) && (e.preventDefault(), keys[e.key] = !0);
}

function stopRun(e) {
  keys.hasOwnProperty(e.key) && (e.preventDefault(), keys[e.key] = !1);
}

function moveRoad() {
  document.querySelectorAll(".line").forEach(function (e) {
    e.y += setting.speed, e.style.top = e.y + "px", e.y >= gameArea.offsetHeight && (e.y = -100);
  });
}

function moveEnemy() {
  document.querySelectorAll(".enemy").forEach(function (e) {
    var t = car.getBoundingClientRect(),
        s = e.getBoundingClientRect();
    t.top + 5 <= s.bottom && t.right + 5 >= s.left && t.left + 5 <= s.right && t.bottom + 5 >= s.top && (setting.start = !1, audio.remove(), console.warn("ДТП"), start.classList.remove("hide"), start.style.top = score.offsetHeight), e.y += setting.speed / 2, e.style.top = e.y + "px", e.y >= gameArea.offsetHeight && (e.y = -100 * setting.traffic, e.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + "px");
  });
}