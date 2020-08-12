// eto plavnaya prokrutka ili scroll $ oznacaet cto on na jquery
// window oznacaet okno dalwe a ssilku i rel funkcuyu kak ona budet ranotat
// mi rel='m_PageScroll2id' dobavili v header ssilku to
//  cto xoteli sdelat scroll

$(window).on("load", function () {

  // Pagescroll to ID
  $("a[rel='m_PageScroll2id']").mPageScroll2id();

  // Video bacground vide.js
  $('#header').vide('/site/video/girls');
});

// import requests
// import base64
// import json

// HackboxURL = "https://www.hackthebox.eu/api/invite/generate"
// JSONDATA = requests.post( HackboxURL )
// print base64.b64decode(json.loads(JSONDATA.text)["data"]["code"])


// ! modal okno

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

const myModal = $.modal();