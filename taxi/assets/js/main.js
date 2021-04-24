const
  nMenuBtn = $(".m-menu-button"),
  nMenu = $(".m-menu"),
  h3Menu = $(".h3-menu");

nMenuBtn.on('click', function () {
  nMenu.toggleClass('openMenu');
  nMenuBtn.toggleClass('open');
  $('body').toggleClass('no-scroll');
  h3Menu.toggleClass('none');
  $('.h3-menu').toggleClass('menu');
});



$(".navigation-link-clients").click(function () {
  $('.sub-menu-li-clients').slideToggle(300);
});

$(".navigation-link-partners").click(function () {
  $('.sub-menu-li-partners').slideToggle(300);
});


// ? burger 
document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
};
// ? ////


// ! Vodka
$(window).on("load", function () {

  // Video bacground vide.js
  $('#header').vide('/taxi/assets/video/porsche');
});



$('.slick').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: false,
        slidesToShow: 1
      }
    },

    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: false,
        slidesToShow: 1
      }
    }
  ]
});