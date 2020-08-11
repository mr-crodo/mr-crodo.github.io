//!  1. найти кнопку +
let buttonsPlus = document.querySelectorAll('[data-action="plus"]');

// Обходим коллекцию из всех кнопок, и для каждой выполняя определенное действие
buttonsPlus.forEach(function (item) {

  // 2. Отследить клик по кнопке
  item.addEventListener('click', function () {
    // console.log("Hey Click !!!");
    // 3. По клику совершаем действие: увеличиваем счетчик на 1
    // 3.1  Находи счетчик 
    // todo naxodim blijaysheqo roditela
    let counterWrapper = this.closest('.counter-wrapper');
    // console.log(counterWrapper);

    // 3.1.3 Внутри всего блока находим тег который отвечает за счетчик
    let counter = counterWrapper.querySelector('[data-counter]');
    // console.log(counter);

    // ! verxnuyu zapis vnutri zelennoqo mojno zapisat i tak
    // ! no v etom slucae izmenatsa budet tolko to cto vnutri texta a data net
    counter.innerText++;
    // counter.innerText = ++counter.innerText;
  });

});



// !minus
let buttonsMinus = document.querySelectorAll('[data-action="minus"]');

buttonsMinus.forEach(function (item) {
  item.addEventListener('click', function () {
    let counterWrapper = this.closest('.counter-wrapper'); // Нашли родителя
    let counter = counterWrapper.querySelector('[data-counter]'); // От родителя нашли div с счетчиком

    // Проверка. Если счетчик больше 1, тогда уменьшаемб если равен 1 тогда нечего не делаем
    // todo s pomoshyu parseInt perevodim stroku 'counter.innerText' v cislo
    if (parseInt(counter.innerText) >= 1) {
      counter.innerText--;
      // counter.innerText = --counter.innerText;
    }
    // counter.innerText = --counter.innerText; // Уменьшили сяетяик на 1

  });

});

