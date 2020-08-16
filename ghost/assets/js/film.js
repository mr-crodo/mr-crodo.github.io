$(document).ready(function () {
  const nMenuBtn = $(".m-menu-button");
  const nMenu = $(".m-menu");
  nMenuBtn.on('click', function () {
    nMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
});


//  Set caption from card text
$('.card-deck a').fancybox({
  caption: function (instance, item) {
    return $(this).parent().find('.card-text').html();
  }
});



// ! slider 


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,
  speed: 400,
  preloadImages: true,
  updateOnImagesReady: true,
  slideShadows: true,
  rotate: 50,
  modifier: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    992: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // draggable: true,
    el: '.swiper-scrollbar',
  },
})


// jQuery(document).ready(function ($) {

//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });

// 	var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;

// 	$('#slider').css({ width: slideWidth, height: slideHeight });

// 	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

//     $('#slider ul li:last-child').prependTo('#slider ul');

//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     $('a.control-prev').click(function () {
//         moveLeft();
//     });

//     $('a.control-next').click(function () {
//         moveRight();
//     });

// });    