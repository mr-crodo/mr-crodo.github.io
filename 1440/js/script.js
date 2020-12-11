// alert('Hello Gulp');;
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 40,
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
        slidesPerView: 2.5,
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