const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart
const buttonCart = document.querySelector('.button-cart');
//? esli ispolzuetsa mnoqo elementov to piwetsa querySelectorAll
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
// const modalArea = document.querySelector('.overlay');

const openModal = function () {
	modalCart.classList.add('show');
};

const closeModal = function () {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

// doligirovanie
modalCart.addEventListener('click', function (event) {
	if (event.target.classList.contains('overlay')) {
		closeModal();
	};
})

//scroll smooth
{
	const scrollLink = document.querySelectorAll('a.scroll-link');

	for (let i = 0; i < scrollLink.length; i++) {
		scrollLink[i].addEventListener('click', function (event) {
			event.preventDefault(); //uberaem standartnoe povedenie scrola
			const id = scrollLink[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			console.log(id);
		});
	}
}

//goods

const more = document.querySelector('.more');
const navigationItem = document.querySelectorAll('.navigation-item');
const longGoodsList = document.querySelector('.long-goods-list');

const getGoods = async function () {
	const result = await fetch('db/db.json');
	if (!result.ok) {
		throw 'Ошибочка вышла: ' + result.status
	}
	return await result.json();
};

// getGoods().then(function(data){
// 	console.log(data);
// });

const creatCard = function (objCard) {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6';

	card.innerHTML = `
		<div class = "goods-card" >
			<span class = "label" > New < /span>
			<img src = "img/image-119.jpg" alt = "image: Hoodie" class = "goods-image" >
			<h3 class = "goods-title" > Embroidered Hoodie < /h3>
			<p class = "goods-description" >${objCard.description}< /p>
			<button class = "button goods-card-btn add-to-cart" data - id = "012" >
			<span class = "button-price" > $89 < /span>
			</button> 
		</div>
    `;
	return card;
};

const renderCards = function (data) {
	longGoodsList.textContent = '';
	console.log(data);
	const cards = data.map(createCard);
	// cards.forEach(function(card) {
	// 	longGoodsList.append(card)
	// })
	// longGoodsList.append(...cards)
	console.log(cards);
	document.body.classList.add('show-goods')
};

// renderCards();
// getGoods().then(renderCards);


const arrM = [{"id": "003",
		"img": "img/61SVZdHi1SL.jpg",
		"name": "TOMS Women's Alpargata Loafer",
		"label": "Bestseller",
		"description": "Red",
		"price": "219",
		"category": "Shoes",
		"gender": "Womens"
	},
	{
		"id": "003",
		"img": "img/61SVZdHi1SL.jpg",
		"name": "TOMS Women's Alpargata Loafer",
		"label": "Bestseller",
		"description": "Red",
		"price": "219",
		"category": "Shoes",
		"gender": "Womens"
	},
	{
		"id": "003",
		"img": "img/61SVZdHi1SL.jpg",
		"name": "TOMS Women's Alpargata Loafer",
		"label": "Bestseller",
		"description": "Red",
		"price": "219",
		"category": "Shoes",
		"gender": "Womens"
	}];

renderCards(arrM);