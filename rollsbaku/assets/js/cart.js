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
  });
});






// 5. Собранные данные подставим в шаблон для товара в корзине


// 6. Отобразим товар в корзине