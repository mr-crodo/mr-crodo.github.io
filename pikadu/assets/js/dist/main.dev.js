"use strict";

//Sozdaem peremennuyu v kotoroyu polojim knopku menu
var menuToggle = document.querySelector('#menu-toggle'),
    // Sozdaem peremennuyu v kotoruyu poloji menu
menu = document.querySelector('.sidebar'); // Otslejivaem klik po knopke menu i zapuskaem funkciyu

menuToggle.addEventListener('click', function (event) {
  // Otmenaem standartnoe povedenie ssilki 
  event.preventDefault(); //vewaem klass n menu koqda kliknuli po knobke

  menu.classList.toggle('visible');
});