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
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

$(document).ready(function () {
  $('works__btn button, .works__btn a').on('focus', function (e) {
    $(this).parents('.works__element').addClass('works__element--active');
  });

  $('works__btn button, .works__btn a').on('blur', function (e) {
    $(this).parents('.works__element').removeClass('works__element--active');
  });

  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1000) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent + '%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;

  $(window).scroll(function () {

    if ($('.skills').offset().top <= $(window).scrollTop()) {
      if (animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }
  });


  $('.carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      980: {
        items: 5
      }
    }
  });


});