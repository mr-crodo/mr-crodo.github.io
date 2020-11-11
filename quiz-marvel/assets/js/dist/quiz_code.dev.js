"use strict";

window.onload = function () {
  var result = {};
  var step = 0;

  function showQuestion(questionNumber) {
    document.querySelector('.question').innerHTML = quiz[step]['q'];
    var answer = '';

    for (var key in quiz[step]['a']) {
      answer += "<li data-v='".concat(key, "' class=\"answer-variant\">").concat(quiz[step]['a'][key], "</li>");
    }

    document.querySelector('.answer').innerHTML = answer;
  }

  document.onclick = function (event) {
    event.stopPropagation();

    if (event.target.classList.contains('answer-variant') && step < quiz.length) {
      // event.target.data
      if (result[event.target.dataset.v] != undefined) {
        result[event.target.dataset.v]++;
      } else {
        result[event.target.dataset.v] = 0;
      }

      step++;

      if (step == quiz.length) {
        document.querySelector('.question').remove();
        document.querySelector('.answer').remove();
        showResult();
      } else {
        showQuestion();
      }
    }

    if (event.target.classList.contains('reload-button')) {
      location.reload();
    }

    console.log(result);
  };

  function showResult() {
    var key = Object.keys(result).reduce(function (a, b) {
      return result[a] > result[b] ? a : b;
    });
    var div = document.createElement('div');
    div.classList.add('result');
    div.innerHTML = answers[key]['description'];
    document.querySelector('.main-q').appendChild(div);
    var img = document.createElement('img');
    img.src = '/assets/images/vibronniie/' + answers[key]['image'];
    img.classList.add('result-img');
    img.style.width = '80%';
    document.querySelector('.main-q').appendChild(img);
    var reloadButton = document.createElement('button');
    reloadButton.innerHTML = 'New quiz';
    reloadButton.classList.add('reload-button');
    document.querySelector('.main-q').appendChild(reloadButton);
  }

  showQuestion();
};