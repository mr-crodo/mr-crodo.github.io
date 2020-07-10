// const date = new Date();
// console.log(date);

// const name = 'Ilya'

// let multiStr = 'Privet\n' +
//   name + '\n' +
//   '!';

// let arrStr = [
//   'Privet',
//   name,
//   '!',
// ].join('\n')

// let templateStr = `Privet
// ${name} !`;

// console.log(multiStr);
// console.log(arrStr)
// console.log(templateStr);
// **************************
// ! ***********************
// TODO ************************

'use strict';

// TODO: sdes mi sozdaem pustoy massiv ctobi dobavlat obyavleniya tuda
const dataBase = [];

//! sdes mi zadaem nashi elementi ili konstanti
// esli oni zadanni cerez const ix nelza izmenit
// a tak kak eti elementi obrashayutsa k nashey verstke to eto const kotorie ne nado izmenat
const modalAdd = document.querySelector('.modal__add'),
  addAd = document.querySelector('.add__ad'),
  // dobavlaem v konstanti knobku modalnoqo okna
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  // polucaem formu s html
  modalSubmit = document.querySelector('.modal__submit'),
  // sdes opisivaem konstantu ul kataloga tovarov
  catalog = document.querySelector('.catalog'),
  modalItem = document.querySelector('.modal__item'),
  modalBtnWarning = document.querySelector('.modal__btn-warning');

// ****************************
const elementsModalSubmit = [...modalSubmit.elements]
// TODO : esli u nasvmesto knobki napisanno input type "submit" to mojno zapisat tak kak v sinem
// ? .filter(elem => elem.tagName !== 'BUTTON' && elem.type !== "submit");
.filter(elem => elem.tagName !== 'BUTTON');


// TODO:  console.log(...elementsModalSubmit); eto toje samoe cto i perecislenie cerez odin kajdiy element
// on nazivaetsa spred no esli mi dobavim k nemu [] to polucim [massiv]
// ? () => eto nazivaetsa callback funciya
// console.log(elementsModalSubmit);

// *****************************************
// ! a sdes ya sozdayu constantu obrabotcika sobitiya ili je
// ? zakritiya modalnix okon, ctobi uje vmesto vseqo usloviya
// ? zapisat tolko nazvanie

// const closeModal = event => {
//   const target = event.target;

//   if (target.closest('.modal__close') ||
//     target === modalAdd ||
//     target === modalItem) {
//     modalAdd.classList.add('hide');
//     modalItem.classList.add('hide');
//     modalSubmit.reset();
//   }
// };

// ? u verxney funkcii est 2 sposob cerez this
const closeModal = function (event) {
  const target = event.target;
  // console.log(this);
  // ! this eto obyekt kotoriy vizval sobitiya

  if (target.closest('.modal__close') || target === this) {

    // ? funkciyaa this oznacaet cto otnositsa ko vsem klassam ili pravilneye
    // ? skazat on obobshaet

    this.classList.add('hide');
    // modalSubmit.reset(); eto mojno zapisat i tak kak nije
    if (this === modalAdd) {
      modalSubmit.reset();
    }
  }
};

// *******************************
// ! sdes mi stavim konstantu dla zakritiye Esc
const closeModalEsc = event => {
  // s pomoshyu console.log mi delaem proverku kak border v Css
  // console.log('close');
  if (event.code === 'Escape') {

    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
    // ? eto mi posatavili ctob slushitel knopki ne visela na vsem processe
    document.removeEventListener('keydown', closeModalEsc);
  };
};

// ! Sdes mi aktiviruem knopku otpravit koqda zapolnenni vse pola
// ? koqda vse pola zapolnenni poyavlaetsa true i knobka aktiviruetsa
// *************
modalSubmit.addEventListener('input', () => {
  const validForm = elementsModalSubmit.every(elem => elem.value);
  // TODO: !znak pered nazvaniem elementa oznacaet obratnuyu intepritaciyu
  // ? kak bi esli tam budet true 
  modalBtnSubmit.disabled = !validForm;
// ? a tak je mi dobavlaem udalenie tekstra radom s knobkoy na modalke
// TODO mi sdes ispolzuem svoystvo style iz css i dobavlaya k nemu svoystvo displav proveraem
// !sdes mi proveraem cto koqda 'none' eto pravda koqda pustaya stroka '' to loj
modalBtnWarning.style.display = validForm ? 'none' : '';
//TODO: verxneye mojno zapisat i tak
// if (validForm) {
//   modalBtnWarning.style.display = 'none';
// } else {
//   modalBtnWarning.style.display = '';
// }
// TODO : a esho mojno zapisat tak 
// if (validForm) modalBtnWarning.style.display = 'none';
// else modalBtnWarning.style.display = '';

});

// *******************************
// ! sdes zapisivaem Obyavleniya
// ? mi na verxu sozdali massiv, a sdes mi zapolnaem dannie s raznimi kriteriyami
// ? dla obyavleniya ctob eti dannie dobavlalis v massiv i sizdavali nashu bazu obyavleniy
modalSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const itemObj = {};
  for (const elem of elementsModalSubmit) {
    itemObj[elem.name] = elem.value;

  }

  // ! kak i v Git mi sdes posilaem dannie v massiv
dataBase.push(itemObj);
// TODO : a sdes mi ocishaem formu dla sleduyusheqo obyavleniya
modalSubmit.reset();
});



// **********************
//! sdes mi zadaem slushitela, on jdet poka proizaydet najatie ili click po knobki
// s klassom add_ad
addAd.addEventListener('click', () => {
  // posle toqo kak proizosho najaatie mi obrashaem sa k klassu i qovorim edalit klass hide
  modalAdd.classList.remove('hide');

  // ? sdes mi vstavili zakritie po Esc
  document.addEventListener('keydown', closeModalEsc);

  //! sdes mi srazuje blokiruem knobku modalBtnSubmit
  modalBtnSubmit.disabled = true;
});



// ! Sdes mi pishem zakritie dla vsex modalnix okon, tak kak klas krestika
// ? ili zakritiya modalnoqo okna u nix obshiy 

// const target = event.target;

// // posle eqtoqo mi zadaem uslovie, esli click proizoshel immeno po etomu 
// // klassu (ukazivaem nazvanie klassa) to doljno proizoyti deystvie v dannim 
// if (target.classList.contains('modal__close') ||
//   // i esho mi na verxu dobavili ili cto oznacaet ili
//   // najatie po krestiku ili po vsemu klassu modal__add cto na samom dele 
//   // evlaetsa fonom modalnoqo okna
//   target === modalAdd) {
//   // v dannom sluvae mi dobavlaem klass (hide) nashemu obyektu cto
//   // zakrivaet modalnoe okto, kak bi koqda uberali poyavlalos, koqda dobavlaem
//   // uberaetsa , tem samim proisxodit zakritie modalnoqo okna
//   modalAdd.classList.add('hide');
//   // sdes ocishaem formu posle toqo kak zakrili
//   // ctob steralos napisannoe
//   // u formi est xoroshaya funkciya reset kotoraya kakbi perezaqrujaet 
//   // formu ili oceshaet eyo i privodit eyo k zavodskim nastroykam
//   modalSubmit.reset();
// }

// });

// ***************** verxneye mojno sdelat i cerez closest
// eto v osnovnom ispolzuetsa koqda 

// if (target.closest('.modal__close') ||
//     target === modalAdd) {
//     modalAdd.classList.add('hide');
//   }
// });

// ************* Domashka 
// na dokument naveshivaem sobitie najatie a klaviaturu
// opredelaem cto najalos knobka Esc i dobavlaem klass hide kotoraya zakroet 
// nashe modalnoe okno

//? sdes mi doljni zapisat zakritie po najatiyu na Esc

// ? sdes mi dobavlaem sobitie keydown cto oznacaet najatie vniz
// ? tam takje est najatie vverx kak bi otpustit knobku
// ! event nujen dla toqo ctobi opredelit cto najalos

// ! sdes mi stavim konstantu dla zakritiye Esc
// const closeModalEsc = event => {
//   if (event.code === 'Escape') {
//     modalAdd.classList.add('hide');
//     modalItem.classList.add('hide');
//   };
// };

// document.addEventListener('keydown', closeModalEsc );

// *********************************
//! sdes zapisivaem modalnoe okno
// stavim emu slushitel po kliku, i zapisivaem k nemu event ctob znat 
// cto mi budem najimat po cliku

catalog.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    // ? sdes mi vstavili zakritie po Esc
    document.addEventListener('keydown', closeModalEsc);
  };

});

// **********************************
// //! Sdes mi opat stavim sluhitel po constante "modalItem"
// // ? cto bi po eventu otlavlivat sobitie po kliku 

// modalItem.addEventListener('click', event => {
//   const target = event.target;

//   // ? Posle etoqo ukazivaem uslovie cto koqda v event poyavitsa
//   // ? klass  "modal__close" i obsheqo klassa "modalItem"
//   //? doljno proizoyti uslovie dobavlenie klassa hide
//   // ? cto sposobstvuet zakritiyu modalnoqoq okna

//   if (target.classList.contains('modal__close') ||
//     // i esho mi na verxu dobavili ili cto oznacaet ili
//     // najatie po krestiku ili po vsemu klassu modal__add cto na samom dele 
//     // evlaetsa fonom modalnoqo okna
//     target === modalItem) {
//     // v dannom sluvae mi dobavlaem klass (hide) nashemu obyektu cto
//     // zakrivaet modalnoe okto, kak bi koqda uberali poyavlalos, koqda dobavlaem
//     // uberaetsa , tem samim proisxodit zakritie modalnoqo okna
//     modalItem.classList.add('hide');
//   }

// });

// ***********************************
// sdes mi opat stavim slushatela, on sledit za mishkoy i jdet eqo najatie
// koqda proisxodit click on vidaet vse dannie ob etom klike s pomoshyu event
// v etix dannix ukazivaetsa mestopolojenie kursora otnositelno ekrana
// eqo mestopolojenie, nazvanie klassa odnim slovom vse vozmonie dannie o klasse

// ! sdes na meste "closeModal" bilo "event =>"
modalAdd.addEventListener('click', closeModal);

// **********************************
// ! zdes zapisivaem slushitel dla zakritiya v korotkoy versiyey
// ? tak kak mi uje zadali constantu funkcii

modalItem.addEventListener('click', closeModal);
