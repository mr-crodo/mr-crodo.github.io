const
  headerCityButton = document.querySelector('.header__city-button'),
  subheaderCart = document.querySelector('.subheader__cart'),
  cartOverlay = document.querySelector('.cart-overlay');
// obrazaem hash s substring
  let hash = location.hash.substring(1);
  


// ternarniy operator
headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите ваш город');
  headerCityButton.textContent = city;
  localStorage.setItem('lomoda-location', city)
});

// ! no scroll
// ? dla toqo ctobi scroll ne priqal
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth
  document.body.dbScrollY = window.scrollY;
  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left:0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};
const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY
  })
}


//! modal window

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disableScroll();
}

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open')
  enableScroll()
};

// zakritie po Esk
document.addEventListener('keydown', function (event) {
  if (event.code == 'Escape') {
    cartModalClose();
  }
})


//! zapros s DB universalnaya funkciy dla zaprosa lyboqo servera
//?zapros s DB universalnaya funkciy dla zaprosa lyboqo servera
const getData = async () => {
  const data = await fetch('db.json');

  if (data.ok) {
    return data.json()
  } else {
    throw new Error(`Данные небыли получены, ошибка ${data.status} ${data.statusText}`)
  }
}
//? zapros s DB universalnaya funkciy dla zaprosa lyboqo servera
// getData()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });


// konkretno dla naweqo prilojeniya
// peredaem vtorim parametrom hash v vide value
const getGoods = (callback, value) => {
  getData()
    .then(data => {
      if(value) {
        callback(data.filter(item => item.category === value))
      } else {
        callback(data)
      }
    })
    .catch(err => {
      console.error(err);
    });
}

// getGoods((data) => {
//   console.warn(data);
// })

// vizovi funksii doljni naxoditsa pod funkciyami
subheaderCart.addEventListener('click', cartModalOpen);

// delegirovanie
cartOverlay.addEventListener('click', event => {
  const target = event.target
  // ! krome -- target."classList.contains" mojno ispolzovat "matches" no s selektorom tocki ili rewetki
  if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose();
  }
})


try {
  console.log(hash)
  const goodsList = document.querySelector('.goods__list')
  if (!goodsList) {
    throw "This is not a good page"
  }
  
  const createCard = ({ id, preview, cost, brand, name, sizes }) => {
    // es2015 destrukturizaciya
    //? const { id, preview, cost, brand, name, sizes } = data;
    // vmesto etoqo verxneye
    // const id = data.id;
    // const preview = data.preview;
    // const cost = data.cost;
    // const brand = data.brand;
    // const name = data.name;
    // const sizes = data.sizes;
    
    const li = document.createElement('li');

    li.classList.add('goods__item');

    li.innerHTML = `
        <article class="good">
            <a class="good__link-img" href="card-good.html#${id}">
                <img class="good__img" src="goods-image/${preview}" alt="">
            </a>
            <div class="good__description">
                <p class="good__price">${cost} &#8381;</p>
                <h3 class="good__title">${brand} <span class="good__title__grey">/ ${name}</span></h3>
                ${sizes ? 
                  `<p class="good__sizes">Размеры (RUS): <span class="good__sizes-list">${sizes.join(" ")}</span></p>` :
                  ''}
                <a class="good__link" href="card-good.html#${id}">Подробнее</a>
            </div>
        </article>
    `;

    return li;
  };

  const renderGoodsList = data => {
    goodsList.textContent = '';
    
    // for (let i =0; i < data.length; i++) {
    //   console.log('for',data[i]);
    // }

    // for(const item of data) {
    //   console.log('for of', item);
    // }

    data.forEach((item) => {
      const card = createCard(item);
      goodsList.append(card)
    })
  };

  window.addEventListener('hashchange', () => {
    const goodsTitle = document.querySelector('.goods__title');
    hash = location.hash.substring(1)
    if()
      goodsTitle.innerHTML = `
      <span class="goods__title">${hash}</span>
      `
    getGoods(renderGoodsList, hash)
  })
// !peredaem hash
  getGoods(renderGoodsList, hash);
} catch (err) {
  console.warn(err);
}