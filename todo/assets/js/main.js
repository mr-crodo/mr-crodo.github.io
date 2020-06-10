/*function sim (a, b, c) {
  let sumTrex = (a + b) * c;
  console.log(sumTrex);
}

sim(20, 33, 4); */


// 1. Naxodim Formu na stranice
// coonst u nas odna ona ne budet menaetsa

const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList');

// 2. Otsledit sobitie otpravki form

// etot metod vivod pod seba dva sobitiya
// pervoe eto to sobitie kotoroe u nas proisxodit eto submit
// vtoroe sobitie eto funkciya koqda eto sobitie proizoydet

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Otmena standartnoqo povedeniya


  const taskInput = document.querySelector('#addNewTask'); //naxodim Input
  const taskText = taskInput.value; // Berem znacenie iz Inputa








  // sdes sozdaem kod dla novoy zadaci, sozdaem formu dla html
  // ctobi vstavit razmetku bilo ispolzovann obratniy slesh on rabom s 1
  // ormiruem razmetku dla novoy zadaci
  const taskHtml = `
  <li class="list-group-item d-flex justify-content-between">

        <span class="task-title">${taskText}</span>

        <button type="button" data-action="delete-task" class="btn btn-light 

        align-self-end">Удалить</button>
</li>`;



  // insertAdjacentHTML danniy metod pozvolaet dobaavit razmetku vnutr bloka
  // est komandi odin afterbegin dobavlaet razmetku v nacalo
  // i esho afterend dobavlaet razmetku v konec
  // a esho est beforebegin
  //  i poslednaya beforeend
  tasksList.insertAdjacentHTML('afterend', taskHtml);


  // sdes mi udalaem stroku v voda posle najatiya knobki ctob ona viqladela krasivo
  // ocishaem pole v voda
  taskInput.value = "";

});


//  Dell Task 

tasksList.addEventListener('click', function () {
  console.log('Click!!!!!!');
});