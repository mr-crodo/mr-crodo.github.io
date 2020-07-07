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

'use strict';

// sdes mi zadaem nashi elementi
// esli oni zadanni cerez const ix nelza izmenit
// a tak kak eti elementi obrashayutsa k nashey verstke to eto const kotorie ne nado izmenat
const modalAdd = document.querySelector('.modal__add'),
  addAd = document.querySelector('.add__ad'),
  // dobavlaem v konstanti knobku modalnoqo okna
modalBtnSubmit = document.querySelector('.modal__btn-submit'),
// polucaem formu s html
modalSubmit = document.querySelector('.modal__submit');

// sdes mi zadaem slishitela n jdet poka proizaydet najatie ili click po knobki
// s klassom add_ad
addAd.addEventListener('click', () => {
  // posle toqo kak proizosho najaatie mi obrashaem sa k klassu i qovorim edalit klass hide
  modalAdd.classList.remove('hide');

  // sdes mi srazuje blokiruem knobku modalBtnSubmit
  modalBtnSubmit.disabled = true;
});

// sdes mi opat stavim slushatela, on sledit za mishkoy i jdet eqo najatie
// koqda proisxodit click on vidaet vse dannie ob etom klike s pomoshyu event
// v etix dannix ukazivaetsa mestopolojenie kursora otnositelno ekrana
// eqo mestopolojenie, nazvanie klassa odnim slovom vse vozmonie dannie o klasse
modalAdd.addEventListener('click', event => {
  const target = event.target;

  // posle eqtoqo mi zadaem uslovie, esli klic proizoshel immeno po etomu 
  // klassu (ukazivaem nazvanie klassa) to doljno proizoyti deystvie v dannim 
  if (target.classList.contains('modal__close') ||
  // i esho mi na verxu dobavili ili cto oznacaet ili
  // najatie po krestiku ili po vsemu klassu modal__add cto na samom dele 
  // evlaetsa fonom modalnoqo okna
    target === modalAdd) {
    // v dannom sluvae mi dobavlaem klass (hide) nashemu obyektu cto
    // zakrivaet modalnoe okto, kak bi koqda uberali poyavlalos, koqda dobavlaem
    // uberaetsa , tem samim proisxodit zakritie modalnoqo okna
    modalAdd.classList.add('hide');
    // sdes ocishaem formu posle toqo kak zakrili
    // ctob steralos napisannoe
    // u formi est xoroshaya funkciya reset kotoraya kakbi perezaqrujaet 
    // formu ili oceshaet eyo i privodit eyo k zavodskim nastroykam
    modalSubmit.reset();
  }
});

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

