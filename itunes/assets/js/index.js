//TODO: sdes mi pishem export ctobi eksportirovat kode s druqix JS faylov

import {
  videoPlayerInit
} from './videoPlayer.js';

import {
  radioPlayerInit
} from './radioPlayer.js';

import {
  musicPlayerInit
} from './musicPlayer.js';

// Document eto DOM derevo
// ? dalee mi mi budem polucat elementi so stranici,
// TODO: queryselectorALL oznacaet cto mi xotim polucit elementi so vseqo
// TODO: Elementa kotoriyi mi oboznacim v skobkax ('')
const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');

// !naxodim v brouzere naadpis media portal itunes i naxodim eqo v html
const temp = document.querySelector('.temp');

// TODO: sozdaem funkciyu dla deaktivacii
const deactivationPlayer = () => {
  // !ctob skrit element mi ispolzuem stili i obrahsaemsa k style
  temp.style.display = 'none';
  // ? sdes mi pereberaem player btn/ player block
  // TODO: mi propisivaem ix cerez item no kdruq druqu
  // TODO: oni nekakoqo otnosheniya ne imeyut
  playerBtn.forEach(item => item.classList.remove('active'));
  // ?mojno zapisat i kak na verxu i kak vnizu/ potomu cto odno virajenie
  playerBlock.forEach((item) => {
    item.classList.remove('active')
  });
}
// TODO: dalee mi budem propisivat bloki ctobi pri klike na nix
// TODO: proisxodil player btn
// ? dla toqo ctobi propisat najatie po knobki ctob proisxodilo deystvie
// ? na vsex blokax mi budem pereberat, pereberat mi mojem obicnim ciklo for
// ?  mojem tak je pereberat ciklom for of
// TODO: mi budem propisivat metodom for Each

// ? forEach eto metod kotoriy prinimaet collback funkciyu
// ?cto znacit callback functiya eto funkciya eto funkciya kotoraya budet zapushena
// ?vnutri funkcii forEach, zapuskaetsa v kontekste massivov
// ? () => eto lamda funkciya
// mi zapisivaem btn tak kak btn eto nazvanie vsex knopok
playerBtn.forEach((btn, i) => {
  
  // TODO: event listener slishatel sobitiy
  btn.addEventListener('click', () => {
    // TODO: dla toqo ctobi posle najatiya udalat do najatuyu knobku
    // TODO: propisivaem funkciyu
    deactivationPlayer();
    // ? mi s pooshyu classlist naveshivaem sobitiya na knobku btn
    // ? metod add. est dobavit klass ubrat class i togle
    // ? toest on dobavlaet koqda net classa i uberaet koqda on est
    btn.classList.add('active');
    playerBlock[i].classList.add('active');

  });
});

// TODO: vizov funkcii
videoPlayerInit();
radioPlayerInit();
musicPlayerInit();