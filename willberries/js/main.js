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
const modalArea = document.querySelector('.overlay');

const openModal = function () {
	modalCart.classList.add('show');
};

const closeModal = function () {
	modalCart.classList.remove('show');
}

const closeArea = function () {
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalArea.addEventListener('click', closeArea);

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