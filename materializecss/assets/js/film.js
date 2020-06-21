// $(document).ready(function () {
//   const nMenuBtn = $(".m-menu-button");
//   const nMenu = $(".m-menu");
//   nMenuBtn.on('click', function () {
//     nMenu.toggleClass('active');
//     $('body').toggleClass('no-scroll');
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
});


var instance = M.Carousel.init({
  fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function(){
//   $('.carousel').carousel();
// });



var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});