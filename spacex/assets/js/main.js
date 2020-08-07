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
  mp4: 'assets/video/mars/mars.mp4', // URL or relative path to MP4 video
  webm: 'assets/video/world/world.webm', // URL or relative path to webm video
  poster: 'assets/video/world/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
  // overlayColor: '#000', // The overlay color as a HEX
  // overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
});

// var instance = new vidbg('.video-m', {
//   mp4: 'assets/video/mars/mars.mp4', // URL or relative path to MP4 video
//   webm: 'assets/video/mars/mars.webm', // URL or relative path to webm video
//   poster: '/assets/video/world/poster.jpg', // URL or relative path to fallback image
//   overlay: false, // Boolean to display the overlay or not
//   // overlayColor: '#000', // The overlay color as a HEX
//   // overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
// });

// ! dla parallax efekta rellax js
var rellax = new Rellax('.rocket');

if (document.body.clientWidth < 576) {
  rellax.destroy();
};

// ! для инитиализации AOS JS
AOS.init();