// 1. Найти кнопку добавить корзину
let cartButtons = document.querySelectorAll('[data-cart]');
console.log(cartButtons);

// 2. Отследить кнопку добавить корзину
cartButtons.forEach(function (item) {
  item.addEventListener('click', function () {

    //? По клику определить по какой карте произошел клик
    // 3. Определить какой товар добавляется в корзину(кнутри какой карточки кликнули)
    let card = this.closest('.card');

    // 4. Собераем данные с этого товара(название, цена, количество порций)

    // ***********
    // let img = card.querySelector('.product-img');
    // console.log(img);

    // let src = img.getAttribute('src');
    // console.log(src);
    // **************
    // ! мы заменили то что в зеленной на то что ниже
    let imgSrc = card.querySelector('.product-img').getAttribute('src');

    let title = card.querySelector('.item-title').innerText;

    let itemsInBox = card.querySelector('[data-items-in-box]').innerText;

    let weight = card.querySelector('.price__weight').innerText;

    let price = card.querySelector('.price__currency').innerText;

    let counter = card.querySelector('[data-counter]').innerText;


    console.log(imgSrc, title, itemsInBox, weight, price, counter);


    // 5. Собранные данные подставим в шаблон для товара в корзине

    let cartItemHTML = `<div class="cart-item">
                        <div class="cart-item__top">
                          <div class="cart-item__img">
                            <img src="${imgSrc}" alt="">
                          </div>
                          <div class="cart-item__desc">
                            <div class="cart-item__title">${title}</div>
                            <div class="cart-item__weight">${itemsInBox} / ${weight}</div>

                            <!-- cart-item__details -->
                            <div class="cart-item__details">

                              <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter>${counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                              </div>

                              <div class="price">
                                <div class="price__currency">${price}</div>
                              </div>

                            </div>
                            <!-- // cart-item__details -->

                          </div>
                        </div>
                      </div>`;



    console.log(cartItemHTML);


    let cartWrapper = document.querySelector('.cart-wrapper');
    // ! "insertAdjacentHTML" позволяет добавить нам нужную нам разметку в div
    // ? Он принимает два аршумента(1. куда добавить'в начало блока, в конец блока, после-блока',
    // ? 2.'что мы дабавляем')
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);

    // ! сдесь мы реализовали поиск атрибута по названию \data\ м обращаясь к классу 'classList'
    // ! добавляем к имеющимуся классу c помощью 'add' новый класс не удаляя старый
    document.querySelector('[data-cart-empty]').classList.add('d-none');

  });
});












// 6. Отобразим товар в корзине