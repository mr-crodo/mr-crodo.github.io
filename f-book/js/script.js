const menuBtn = document.querySelector('.m-menu');

const menu = document.querySelector('.menu-sidebar');

// stavim slushatel i zadaem cto pri klike nujna anonimnaya funkciya
menuBtn.addEventListener('click', function () {
	// tut mi ispolcuem toggle ctob ispolzovat class active
	// pri pomoshi svoystva classList mi obrashaemsa ko vsem classam kotorie est
	// u bloka menu polucaem tam spisok klassov
	// i esli tam est klass active to funkciya toogle eqo uberet
	// a esli klassov aktive net ona eqo dobavit
	menu.classList.toggle('active');
})

// const menuSrc = document.querySelector('.m-search');

// const minu = document.querySelector('.search');


// menuSrc.addEventListener('click', function () {
// 	minu.classList.toggle('active');

// 	console.log("knobka najalas");
// })

const search = document.querySelector('.search');
const body = document.querySelector('body');

search.addEventListener('click', function(e) {
	e.stopPropagation();
	this.classList.add('search--active');
})

body.addEventListener('click', function() {
search.classList.remove('search--active');
})