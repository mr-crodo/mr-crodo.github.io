// // ! verxneye mi mojem zapisat i druqim sposobom i index.js mi ispravim strocku
// const videoPlayer = () => {
//   console.log('VideO Player');
// };

// export default videoPlayer;

// // ! a v index js zapishem tak 
// // TODO: import videoPlayerInit from './videoPlayer.js';

// TODO: sdes mi pishem kod kotoriy budet eksportirovatsa v index.js
export const videoPlayerInit = () => {
  // ?eti klassi video playera iz html kotoriye nam ponadobatsa
  // ?dla obrasheniya k nim cerez js
  // video-player
  // video - button__play
  // video - button__stop
  // video - time__passed
  // video - progress
  // video - time__total

  // !sdes mi sozdaem constanti ctob moqli obrashatsa k klassam iz html video
  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoProgress = document.querySelector('.video-progress');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');

  // syda vstavlaem konstantu dla toqo ctobi mojno bilo pereklycat zvuk video
  const videoVolume = document.querySelector('.video-volume');

  // ? sdes stavim konstantu dla toqo ctobi sdelat video na ves ekran ili full screen
  const videoFullscreen = document.querySelector('.video-fullscreen');

  


  // TODO: mi sdes zapisivaem otdelnuyu fukciyu ctob moqli obrahsatsa k klassu favicon play
  // TODO: ctob moqli pomenat eqo na faicon pause

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      // TODO: esli u nas video na pauze to v etom slucae mi budem
      // TODO:  udalat video pauzi i dobavlat ikonku play
      // ? remove udalit
      videoButtonPlay.classList.remove('fa-pause');
      videoButtonPlay.classList.add('fa-play');
    } else {
      // ? inace vo vsex druqix slucayax naoborot
      videoButtonPlay.classList.remove('fa-play');
      videoButtonPlay.classList.add('fa-pause');
    }
  }


  // // TODO: sdes mi obrashaemsa k video cerez callback funkciyu
  // // TODO: ctob posle najatiya proiqrivalos video
  // videoPlayer.addEventListener('click', () => {
  //   // ? video player imeet takoy metod play dla zapuska video
  //   // TODO: u mena bila oshibka ya sjal video i nazvanie eqo pomenalos 
  //   // TODO: no ya ne pomenal nazvanie video v verstke
  //   // ? ctob ostanovit video mi pishem uslovie
  //   // ! mi zapisali cto esli video na pauze mi budem zapuskat eqo
  //   if (videoPlayer.paused) {
  //     // ? esli pauza to mi zapuskaem s play
  //     videoPlayer.play();
  //   } else {
  //     // ? else oznacaet vo vsex druqix slucayax pauzu
  //     // ya sdelal oshibku i zapisal vmesto pause paused
  //     videoPlayer.pause();
  //   }

  //   // ! Toggle funkciyu mi srazu budem zapuskat posle toqo kak
  //   // ! mi zapustili video ili postavili na pauzu
  //   toggleIcon();
  // });


  // ! verxnuyu funkciyu mi zakomentirovali ctob neskolko raz ne pisat odno i toje

  // ! dla toqo ctobi mi ne pisali odnu i tu je funkciyu neskolko raz
  // ! mi zapisali dla neqo konstantu
  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }

    // !vmesto toggle eto obrashenie k ikonkam pause i play
    // ? ctobi mojno bilo izmenit iconki
    // TODO: eqo mojno i napisat po druqomu a kak ya zapisal vnizu i pometil flaqom
    toggleIcon();
  };


  // TODO: sdes zapisivaem funkciyu stopPlay dla ostanovki video
  // TODO: po najatiyu na stop ikonki
  const stopPlay = () => {
    // ? sdes mi stavim video na pauzu
    videoPlayer.pause();
    // ? a sdes vozvrashaem vrema v nulevuyu poziciyu koqda najimaetsa na pauzu
    videoPlayer.currentTime = 0;

    // ? sdes mi zapisivaem toggle dla izmeneniya ikonki
    toggleIcon();
  }
  // ! sdes mi sozdaem konstantu ctob v nacalo video dobavit nuli radom so vremenem
  // ? sdes mi zapisali ternarniy operator
  // !             => условие ? (условие верно) : ( условие лож);
  const addZero = n => n < 10 ? '0' + n : n;
  //Todo  vercneye mojno zapisat i tak
  // const addZero = n => {
  //   return n < 10 ? '0' + n : n;
  // }




  // ! na samom dele vmesto togglePlay doljna bila bit  verxnaya funkciya
  videoPlayer.addEventListener('click', togglePlay);
  // ! sdes mi stavim slushital ctob poymat click po klassu a klass
  // ! mi vstavili pod konstantu kotoraya nazivaetsa video button play
  // ! class video button play etot to klass tot element kotoriy 
  // ! stoit vnizu video pod kartinkoy play menayusheysa v pause
  // ! i posle k ney propisivaem funkciyu togglePlay
  videoButtonPlay.addEventListener('click', togglePlay);

  // ?$$$$$$$$$$$$$$$
  // ! $$$$$$$$$$$$$$
  // *$$$$$$$$$$$$$$$ poka ya ix zakomentiroval tak kak v verxu toggle ostalsa
  // videoPlayer.addEventListener('play', toggleIcon);
  // videoPlayer.addEventListener('pause', toggleIcon);

  // TODO: sdes mi delaem pauzu po knobke
  // ?dla etoqoo stavim slushatel i otlavlivaem klas pauzu knobki v html
  // ? klass kotoroqo mi otmetili constantoy i zapisali sdes v nacale
  videoButtonStop.addEventListener('click', stopPlay);

  // TODO: sdes mi stavim esho odin obrobotcik sobitiy dla toqo ctobi izmenat vrema
  videoPlayer.addEventListener('timeupdate', () => {
    // eto to vrema kotoroe prosho
    const currentTime = videoPlayer.currentTime;
    // a eto vrema vseqo video ono ne izmenaetsa
    const duration = videoPlayer.duration;
    // ? console eto proverka kak v CSS border
    // console.log(currentTime);
    // console.log(duration);

    // TODO: dla toqo ctobi rabotal polzunok vstavlaem progress 
    // ? sdes mi delelm proydennoe vreme na ostavsheyesa ctob ponat skolko ostalos vremeni iz vseqo vremeni
    videoProgress.value = (currentTime / duration) * 100;

    // TODO: sdes mi propisivaem peremennuyu ctobi pri proxojdenii vremeni 60s pokazivalo 1 minutu
    let minutePassed = Math.floor(currentTime / 60);
    // TODO: a sdes mi polucaem ostatok ot deleniya, eto i budet sekundi
    let secondsPassed = Math.floor(currentTime % 60);

    /*
    CT - 35 мин / sek
    duration 100min / sek

    15 sek / 100 * 100 = 15 sekunda
    35/ 100 * 100 = 35


    */

    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);
    // sdes toje stavim 
    // console.log(secondsPassed, secondsTotal);

    // ! teper nam nado vivesti eti dannie sekundi i menuti na ekran
    // ! a tocnee radom s video
    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`
    // videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);

    // videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed);
    // !verxniy element v komente mojem zapisat kak vnizu shablonnoy strockoy
    // ? stavim obratnie kovicki ot edenici s levo
    // videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`

  });

  // ! sdes mi dobavlaem fukciyu ctob mojno bilo izmenat video
  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    // ? sdes mi stavim mestopolojenie ikonki po shkale video(string), v zavismosti ot eqo vremennoy ampletudi
    videoPlayer.currentTime = (value * duration) / 100;
  });

// * FULLSCREEN
  //! sdes vipolnaem otkrit na ves ekran po kliku
  videoFullscreen.addEventListener('click', () => {
    videoPlayer.webkitEnterFullScreen();
    // nam daje ne prishlos delat obratnoe viplnenie zakritie fullscren po kliku
  });

  

  // * ZVUK
  // ! sdes s pomosyu obrabotcika sobitiya izmenaem uroven zvuka
  videoVolume.addEventListener('input', () => {
    videoPlayer.volume = videoVolume.value / 100;
  });

  // todo: sdes mi vstavlaem pervonacalnoe polojenie zvuka 0.5 eto 50%
  videoPlayer.volume = 0.5;

  videoVolume.value = videoPlayer.volume * 100;
};
