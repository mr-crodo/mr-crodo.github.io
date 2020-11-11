window.onload = function(){
  let result = {};
  let step = 0;

  function showQuestion (questionNumber) {
    document.querySelector(".question").innerHTML = quiz[step]['q'];
    let answer = '';
    for (let key in quiz[step]['a']){
      answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`
    }

    document.querySelector('.answer').innerHTML = answer;
  }

  // document.addEventListener funkciyu onlick kotoraya idet posle etoqo mojno ewo 
  // raz napisat no uje s pomowyu addeventlistener
  document.onclick = function (event) {
    event.stopPropagation;
    if (event.target.classList.contains('answer-variant') && step < quiz.length) {
      // console.log(event.target.data); // proveraem klikabelnost variantov
      // console.log(event.target);  // polucaem prototip otveta otkuda mi budem eqo polucat
      if (result[event.target.dataset.v] != undefined) {
          result[event.target.dataset.v]++;
      } else {
        result[event.target.dataset.v] = 0;
      }
      step++; // sdes mi narawivaem shq dla toqo ctobi wli druqie voprosi
      // posle toqo kak narastili shaq
      // nam nado sdelat tak ctob voprosnik ne vidaval owibku a zakancivalsa norm
      if (step == quiz.length) {
        document.querySelector('.question').remove();
        document.querySelector('.answer').remove();
        showResult();
      }
       else {
         showQuestion(step);
       }
    }
    console.log(result);
    // showQuestion(step);
  }

  function showResult() {
    let key = Object.keys(result).reduce(function(a,b) {
      return result[a] > result[b] ? a : b;
    });
    console.log(key);

    let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);

        let img = document.createElement('img');
        img.src = '/assets/img/' + answers[key]['image'];
        img.classList.add('result-img')
        document.querySelector('main').appendChild(img);

        let reloadButton = document.createElement('button');
        reloadButton.innerHTML = 'New quiz';
        reloadButton.classList.add('reload-button');
        document.querySelector('main').appendChild(reloadButton);
  }


  showQuestion(step);
};