// ! eti stili mojno primeit pri izmeneniya vseqo bacground po najatiyu knobki
// document.body.style.cssText =  `
//      background: black
//   `;

window.disableScroll = function () {
  // sdes polucaem razmer scrola ctobi otnaat eqo ctob iscez prijok
  const widthScrool = window.innerWidth - document.body.offsetWidth;


  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  top: ${-window.scrollY}px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  padding-right: ${widthScrool}px;
  `;
};

window.enableScroll = function () {
  document.body.style.cssText = '';
  window.scroll({top: document.body.dbScrollY});
};

// disabledScroll();