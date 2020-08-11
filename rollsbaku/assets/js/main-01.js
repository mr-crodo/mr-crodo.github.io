//!  1. найти кнопку +
let buttonPlus = document.querySelector('[data-action="plus"]'); 

// 2. Отследить клик по кнопке
buttonPlus.addEventListener("click", function(){
  console.log("Hey Click !!!");

  // 3. По клику совершаем действие: увеличиваем счетчик на 1

// 3.1  Находи счетчик 
// todo naxodim blijaysheqo roditela
let counterWrapper = buttonPlus.closest('.counter-wrapper');
console.log(counterWrapper);

// 3.1.3 Внутри всего блока находим тег который отвечает за счетчик
let counter = counterWrapper.querySelector('[data-counter]');
console.log(counter);

// 3.2 Увеличиваем счетчик на 1
//* s pomoshyu atributa 'dataset' mi obrashaemsa k data, a ceez tocku k ee nazvaniyu
//  let counterValue =  counter.dataset.counter; // 1
//  counterValue++;
//  console.log(counterValue); //2
//  counter.dataset.counter = counterValue;

//todo  obrahsaemsa k eqo atributu .innerText dla izmeneniya texta
// counter.innerText = counterValue;
//  *****************************

// ! verxnuyu zapis vnutri zelennoqo mojno zapisat i tak
// ! no v etom slucae izmenatsa budet tolko to cto vnutri texta a data net
counter.innerText = ++counter.innerText;
});


//!  1. найти кнопку -
let buttonMinus = document.querySelector('[data-action="minus"]');
console.log(buttonMinus);

buttonMinus.addEventListener('click', function(){
  let counterWrapper = buttonMinus.closest('.counter-wrapper'); // Нашли родителя
  let counter = counterWrapper.querySelector('[data-counter]'); // От родителя нашли div с счетчиком

  // Проверка. Если счетчик больше 1, тогда уменьшаемб если равен 1 тогда нечего не делаем
  // todo s pomoshyu parseInt perevodim stroku 'counter.innerText' v cislo
  if (parseInt(counter.innerText) >= 1) {
    counter.innerText = --counter.innerText;
  }
  // counter.innerText = --counter.innerText; // Уменьшили сяетяик на 1


});