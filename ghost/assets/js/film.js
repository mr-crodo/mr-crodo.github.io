$(document).ready(function () {
  const nMenuBtn = $(".m-menu-button");
  const nMenu = $(".m-menu");

  // ? для табов актеров
  const tab = $(".tab");

  nMenuBtn.on('click', function () {
    nMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

   // ? для табов актеров
  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass("visible");
  });



// ! Fancybox
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
      slideOffsetAfter: 50,
    }

  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // draggable: true,
    el: '.swiper-scrollbar',
  },
});

});
