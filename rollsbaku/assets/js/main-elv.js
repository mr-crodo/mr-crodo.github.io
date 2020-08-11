// 1. Найдем книпки (элементы управления) (кнопки - и +)
let buttons = document.querySelectorAll('[data-action]');


// 2. Для каждой кнопки вешаем событие клик
buttons.forEach(function (item) {
  item.addEventListener("click", function () {


if (this.dataset.action === "plus") {
  let counterWrapper = this.closest('.counter-wrapper');
  let counter = counterWrapper.querySelector('[data-counter]');
  counter.innerText++;
} else {
  let counterWrapper = this.closest('.counter-wrapper');
  let counter = counterWrapper.querySelector('[data-counter]');
  if (parseInt(counter.innerText) >= 1) {
          counter.innerText--;
        }
  
}

  });
});