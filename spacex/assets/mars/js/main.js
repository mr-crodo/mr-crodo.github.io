// eto plavnaya prokrutka ili scroll $ oznacaet cto on na jquery
// window oznacaet okno dalwe a ssilku i rel funkcuyu kak ona budet ranotat
// mi rel='m_PageScroll2id' dobavili v header ssilku to
//  cto xoteli sdelat scroll


// $(window).on("load", function () {

//   // Pagescroll to ID
//   $("a[rel='m_PageScroll2id']").mPageScroll2id();

//   // Video bacground vide.js
//   $('#header').vide('/site/video/girls');
// });

// import requests
// import base64
// import json

// HackboxURL = "https://www.hackthebox.eu/api/invite/generate"
// JSONDATA = requests.post( HackboxURL )
// print base64.b64decode(json.loads(JSONDATA.text)["data"]["code"])

//  ! dla video fona 
// ! sdes v new vidbg('nazvanie blaka')
var instance = new vidbg('.video', {
  mp4: '/assets/mars/mars-v/mars.mp4', // URL or relative path to MP4 video
  webm: '/assets/mars/mars-v/mars.webm', // URL or relative path to webm video
  poster: '/assets/mars/mars-v/mars.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
  // overlayColor: '#000', // The overlay color as a HEX
  // overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
});

// ! dla parallax efekta rellax js
var rellax = new Rellax('.rocket');

if (document.body.clientWidth < 576) {
  rellax.destroy();
};

// ! для инитиализации AOS JS
AOS.init();

// ! video dla mars
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  speed: 1000,
  preloadImages: true,
  updateOnImagesReady: true,
  slideShadows: true,
  rotate: 50,
  modifier: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  cubeEffect: {
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  breakpoints: {
    992: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
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