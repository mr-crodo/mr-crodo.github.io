// NAxodim nunnie Elementi
const form = document.querySelector('#newTaskForm'),
  inputText = document.querySelector('#addNewTask'),
  listUlGroup = document.querySelector('#list-group'),
  emptyListItem = document.querySelector('#empty-list-item');


//1. Dobavleniya novoy zadaci
// Otslejivaem otrobotku formi
// submit - otpravka formi
form.addEventListener('submit', function (event) {
  // Otmenaem standartnoe povedenie pri obrobotke formi (Perezaqruzku stranici)
  event.preventDefault();

  // Berem tekst vvedenniy polzovatelem v pole vvoda
  const taskText = inputText.value;

  // Sdes posle toqo kak vzali tekst iz inputa mi berem prototip sayta i vstavlaem 
  // v neqo naw tekst, dla etoqo v prototipe teksta mi delaem formu kuda budem vstavlat
  //nawe znacenie
  const taskHTML = `<li class="list-group-item d-flex justify-content-between">
                      <span contenteditable="true" class="task-title">${taskText}</span>
                      <div>
                        <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                        <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                      </div>
                    </li>`;

  //Dobavlaem nawu razmetku prototipa i dobavlaem eqo v nawu ul formu kotoraya uje est
  // na stranice html obrashayas k ney cerez id
  // pervoe znacenie eto kuda dobavim eto v nacalo - afterbegin, 
  // eto naw kusok html ili prototip to cto mi budem dobavlat
  listUlGroup.insertAdjacentHTML('afterbegin', taskHTML);



  // zapuskaem nujnuyu funkciyu koqda mi dobavlaem zadacu
  // ctobu skrit zapis spisok del pust
  toggleEmptyListPusto();

  //oceshaem pole vvoda 
  inputText.value = '';

  //vozvraswaem focus inputu
  inputText.focus();
});

// Piwem funkciyu dla toqo ctobi on proveral est li v tege ul zadaci, 
//esli tam est odna zadaca to forma s nazvanieem spisok pust menaet svoyo svoystvo na display none
// i skrivaetsa
function toggleEmptyListPusto() {
  // proveraet esli kolicestvo docernix elementov bolwe cem 1
  if (listUlGroup.children.length > 1) {
    //obrashayas k nemu mi izmenaem eqo svoystvo cerez css
    //emptyListItem.style.color = "red";
    emptyListItem.style.color = "none";
  } else {
    emptyListItem.style.display = "block";
  }
}

const [a, ...b] = [1, 2, 3, 4, 5]
console.log(a);
console.log(b);

