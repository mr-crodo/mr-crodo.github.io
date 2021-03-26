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
const navigationLink = document.querySelectorAll('.navigation-link');
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

const createCard = function ({ label, name, img, description, id, price }) {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6';

	// const { label, name, img, description, id, price } = objCard;

	// label == objCard.label
	card.innerHTML = `
		<div class="goods-card">
		${label ?
			 `<span class="label">${label}</span>` : ''}
			
			<img src="db/${img}" alt = "${name}" class="goods-image">
			<h3 class="goods-title"> ${name} </h3>
			<p class="goods-description">${description}</p>
			<button class="button goods-card-btn add-to-cart" data-id ="${id}">
			<span class="button-price"> $ ${price} </span>
			</button> 
		</div>
    `;
	return card;
};

const renderCards = function (data) {
	longGoodsList.textContent = '';

	const cards = data.map(createCard);
	// cards.forEach(function(card) {
	// 	longGoodsList.append(card)
	// })
	longGoodsList.append(...cards); // spred operators 

	document.body.classList.add('show-goods');
};

more.addEventListener('click', function (event) {
	event.preventDefault();
	getGoods().then(renderCards);
});

const filterCards = function (field, value) {
	getGoods().then(function (data) {
			const filterGoods = data.filter(function (good) {
				return good[field] === value
			});
			return filterGoods;
		})
		.then(renderCards);
};

navigationLink.forEach(function(link) {
	link.addEventListener('click', function(event){
		event.preventDefault();
		const field = link.dataset.field;
		const value = link.textContent;
		console.log(field);
		console.log(value);
		filterCards(field, value);
	})
})