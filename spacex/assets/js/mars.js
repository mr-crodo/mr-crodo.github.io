// var instance = new vidbg('.video', {
//   mp4: 'assets/video/mars/mars.mp4', // URL or relative path to MP4 video
//   webm: 'assets/video/mars/mars.webm', // URL or relative path to webm video
//   poster: '/spacex/assets/video/world/poster.jpg', // URL or relative path to fallback image
//   overlay: false, // Boolean to display the overlay or not
//   // overlayColor: '#000', // The overlay color as a HEX
//   // overlayAlpha: 0.3 // The overlay alpha. Think of this as the last integer in RGBA()
// });

$(window).on("load", function () {

  // Pagescroll to ID
  // $("a[rel='m_PageScroll2id']").mPageScroll2id();

  // Video bacground vide.js
  $('#video-mars').vide('/spacex/assets/video/mars/mars');
});