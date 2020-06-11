// *** ZDES MI PODKLYCAEM VIDEO FON

// $(window).on('load', function () {

//   //podklycaem vieo fon po vide.js
//   $('#header').vide('/assets/video/todo2.mp4');
// })



// function sayHello(name) {

//   console.log('Hello, ${name}! kak dela');
// }

// ***************** Nacinaem !!!!

// 1. Naxodim formu na stranice

const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList');



// *****************  Massiv dla xranenie Zadac ---------------

let tasks = [];


// ************** POLUCAEM DANNIE IZ LOCAL STORAGE KOTORIYE MI VVELI TUDA V JSON FORMATE


/*
* let tasksJSON = localStorage.getItem('tasks');
*
* if (tasksJSON) {
* let tasksArray = JSON.parse(tasksJSON);
*
*  tasks = tasksArray;
}
*/

// Sokroshennaya zapis verxneqo koda JSON

// Smotrim est li u nas dannie
if (localStorage.getItem('tasks')) {
  // parsim dannie prevrashaya ix v massiv
  tasks = JSON.parse(localStorage.getItem('tasks'));
  // teper dobavlenie elementi soxranayutsa v JSON massive na stranice 
  // i pri obnavlenie ne udalayutsa

  // *******  TEPER VIVEDEM IX NA STRANICE, VIVEDEM IX NA RAZMETKU
  tasks.forEach(function (item) {

    // Razmetka dla novoy zadaci
    const taskHTML = `
      <li class="list-group-item d-flex justify-content-between">
          <span class="task-title">${item}</span>
          <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
      </li>
       `;


       //Vstavlaem Novuyu zadacu v obshiy spisok zadac

  //  vse svoystva dla dobavleniya ( afterbegin, afterend, beforebegin, beforeend)
  tasksList.insertAdjacentHTML('afterbegin', taskHTML);


  })

}



// sayHello('Nasib')

// function sum(a, b) {

//   console.log(a + b);

// }

// sum(10, 5)



// 2. Otslejivaem sobitie otpravki formi

form.addEventListener('submit', function (event) {
  // console.log(event)
  event.preventDefault(); // Otmena standartnoqo povedeniya

  // const input = document.querySelector('#addNewTask');
  // console.dir(input.value);

  const taskInput = document.querySelector('#addNewTask'); // NAxodim input
  const taskText = taskInput.value; // Berem znacenie iz Inputa. Tekst zadaci


  // ********Eto Nujno dla  soxranenie elementov v massive brauzera
  //  DObavlaem zadacu v massiv tasks
  tasks.push(taskText);


  // ************************ SAVE          

  // Soxranaem v LocalStorage JSON stroku ot massiva tasks pod klycem tasks

  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Formiruem razmetku dla novoy zadaci
  const taskHTML = `
  <li class="list-group-item d-flex justify-content-between">
      <span class="task-title">${taskText}</span>
      <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
  </li>
`;



  //Vstavlaem Novuyu zadacu v obshiy spisok zadac

  //  vse svoystva dla dobavleniya ( afterbegin, afterend, beforebegin, beforeend)
  tasksList.insertAdjacentHTML('afterbegin', taskHTML);

  // Ocishaem input ili pole vvoda
  taskInput.value = "";


});

// ***************** Udalenie Zadac

// Прослуску клыка внутри списка с задачами

// pervoe '' eto sobitie kotoroe proisxodit, a vtoroe 
//eto funkciya kotoraya zapuskaetsa v moment vipolneniya sobitiya
tasksList.addEventListener('click', function (event) {
  // console.log('Click!!!');

  // Pri vivode eventa v console on pokazivaet takie dannie qde naxodilsa 
  // kursor v moment klika kuda najimalsa kursor po kakoy osi on shel
  // a esli vivodit na ekran event.target to on pokazivaet v kakoy
  // moment i po kakomu mestu bil sdelan click po span po bloku ili po knibke
  // console.log(event.target);

  // Проверка клика по кнобке удалить
  // data-action eto atribut, html5 pozvolaet nam sozdavat lyboy atribut posle aslovo data
  //posle stavitsa ravno i pishetsa lyboe znaceniy data-udalaemkak="ce-ustavilsa"
  if (event.target.getAttribute("data-action") === "delete-task") {
    // console.log('BUTTON!!!');

    // ************** UDALAEM ZADACU IZ MASSIVA  TASKS


    //  1. Polucit tekst zadaci

    const taskText = event.target.closest('li').querySelector('.task-title').textContent;
    // *************

    // 2. Opredelit index zadaci v massive tasks

    const taskIndex = tasks.indexOf(taskText);
    console.log(taskIndex);

    // **********************

    // 3. Udalit zadacu iz massiva

    // pervoe opredelili otkuda nado udalat, a vtoroe
    tasks.splice(taskIndex, 1);


    // Soxranaem v LocalStorage JSON stroku ot massiva tasks pod klycem tasks

    localStorage.setItem('tasks', JSON.stringify(tasks));


    /*
     *  1. Polucit tekst zadaci
     * 
     *
     * 
     *  2. Opredelit index zadaci v massive tasks
     * indexOf(value)
     * tasks = ["Pervaya", "Vtoraya", "Tretya"]
     * tasks.indexOf('Vtoraya') => 2
     * 
     * 
     * 
     * 3. Udalit zadacu iz massiva
     *  Array  .splice(index, count)
     * Udalaem odin element iz massiva, nacinaye (vklycaya) s indeksa 2
     * tasks.splice(2,1);
     * 
     * 
     * */

    // event.target eto knobka 

    //Обращаемся к родителю кнопки (k tegu <li>) i udalaem eqo
    event.target.parentElement.remove();
    //verxniy metod mojno zapisat esho sleduyushim obrazom
    // event.target.closest('li').remove(); // takoy metod mojno sdelat esli knobka lejit ne na pramuyu v tege li, naprime v dive

  }


})



// ********************* Массивы ------- Arrays ------------------------

// let fruit1 = 'apple';
// let fruit2 = 'qrush';
// let fruit3 = 'apelsin';
// let fruit4 = 'vinoqrad';
// let fruit5 = 'persik';

// let fruits = ['apple', 'qrush', 'apelsin', 'vinoqrad', 'persik'];
// console.log(fruits); // Texniceskaya raspecatka vseqo massiva
// console.log(fruits[3]); // Obrashenie k elementu v massive po indeksu


//  Metod forEach dla obxoda massiva
// fruits.forEach(function (item) {
//   console.log(item);
// });

// -------------------- Local Storage ---------------------


// localStorage.setItem('name', 'Yuriy');



/*
fruits
(5) ["apple", "qrush", "apelsin", "vinoqrad", "persik"]
sdes mi zapisivaem JSON --------------------
let fruitsJSON = JSON.stringify(fruits);
undefined
["apple","qrush","apelsin","vinoqrad","persik"]"
-------------- V zavisimosti ot massiva JSON zapisivaet kak massiv no odna eqo stroka
--------- prosmatrivat v consoe elementi kak 
v massive nevozmojno,

*/


/* 

Otkritie Prilojeniya
1.Proverit LocalStorage - est li v nem zadaci
2.Esli zadaci est
-zanosim ix v massiv tasks
-otobrajaem ix na stranice
3. Esli zadac net
-Ostavlaem massiv task pustim

0. Massiv task - dla xraneniya zadac


Dobavlenie Zadac
1. Dobavlenie Novoy zadaci - dobavlenie v massiv task
2. Otobrajaem na stranice // Dobavlaem zadacu na stranicu
3. SOxranit massiv tasks v LocalStorage


UDALENIE ZADAC
1. Udalenie iz massiva tasks
2. Udalenie na stranice
3. Soxranit massiv tasks v LocalStorage

*/

/* 
----------Soxranenie dannix v LOCALSTORAGE------------
1. Preabrazuem massiv v JSON
2. Soxaranaem JSON v LocalStorage


-----------POLUCENIE DANNIX IZ LOCALSTORAGE---------------
1.Polucenie dannix iz LOCALSTORAGE
2 Perevodim dannie iz JSON v Massiv


*/