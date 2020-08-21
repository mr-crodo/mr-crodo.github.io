// new WOW().init();

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 1,

  pagination: {
    el: '.projects-pagination',
    // type: 'bullets',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },


  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
});
