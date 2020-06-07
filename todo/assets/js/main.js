/*function sim (a, b, c) {
  let sumTrex = (a + b) * c;
  console.log(sumTrex);
}

sim(20, 33, 4); */


// 1. Naxodim Formu na stranice
// coonst u nas odna ona ne budet menaetsa

const form = document.querySelector('#newTaskForm');
const tasksList = document.querySelector('#tasksList')

// 2. Otsledit sobitie otpravki form

// etot metod vivod pod seba dva sobitiya
// pervoe eto to sobitie kotoroe u nas proisxodit eto submit
// vtoroe sobitie eto funkciya koqda eto sobitie proizoydet

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Otmena standartnoqo povedeniya

  const taskInput = document.querySelector('#addNewTask');




  const taskText = taskInput.value;
  





  // sdes sozdaem kod dla novoy zadaci, sozdaem formu dla html
  // ctobi vstavit razmetku bilo ispolzovann obratniy slesh on rabom s 1

  const taskHtml = `
  <li class="list-group-item d-flex justify-content-between">

        <span class="task-title">${taskText}</span>

        <button type="button" data-action="delete-task" class="btn btn-light 

        align-self-end">Удалить</button>
</li>`;

  console.log(taskHtml);

  // insertAdjacentHTML danniy metod pozvolaet dobaavit razmetku vnutr bloka
  // est dve komandi odin afterbegin dobavlaet razmetku v nacalo
  // i esho afterend dobavlaet razmetku v konec
  tasksList.insertAdjacentHTML('afterend', taskHtml);


  // sdes mi udalaem stroku v voda posle najatiya knobki ctob ona viqladela krasivo
  taskInput.value = "";

});