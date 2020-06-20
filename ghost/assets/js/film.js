$(document).ready(function () {
  const nMenuBtn = $(".m-menu-button");
  const nMenu = $(".m-menu");
  nMenuBtn.on('click', function () {
    nMenu.toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
});