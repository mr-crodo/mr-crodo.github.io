// ! vot eta funkciya iz "subScript.js"
import {
  addZero
} from './subScript.js';

// TODO: sdes mi pishem kod kotoriy budet eksportirovatsa v index.js
export const musicPlayerInit = () => {


  // todo: сдесь мы запимали все данные из player-block audio
  const audio = document.querySelector('.audio');
  const audioImg = document.querySelector('.audio-img');
  const audioHeader = document.querySelector('.audio-header');
  const audioPlayer = document.querySelector('.audio-player');
  const audioNavigation = document.querySelector('.audio-navigation');
  const audioButtonPlay = document.querySelector('.audio-button__play');
  const audioProgress = document.querySelector('.audio-progress');
  const audioProgressTiming = document.querySelector('.audio-progress__timing');
  const audioTimePassed = document.querySelector('.audio-time__passed');
  const audioTimeTotal = document.querySelector('.audio-time__total');

  //**** */ sdes dobavlaem konstantu k knobkaam dla izmenenie zvuka po knobkam
  const audioVolumeDown = document.querySelector('.audio-volume-down');
  const audioVolumeUp = document.querySelector('.audio-volume-up');
  // **********

  // ****SOUND*****
  // !constanta dla zimenenie zvuka
  const audioVolume = document.querySelector('.audio-volume');
  // *********


  // todo Sdes mi dobavili muziki v massiv
  const playlist = ['hello', 'flow', 'speed'];
  // todo Eto index toqo treka s kotoroqo budet nacinatsa pesni
  let trackIndex = 0;

  // todo: sdes mi dobavlaem funkciyu loadTrack ctob zapuskat sleduyushuyu muziku
  const loadTrack = () => {
    const isPlayed = audioPlayer.paused;
    // ? sdes mi berem vse pesni massiva
    const track = playlist[trackIndex];

    // ! kartinki pesen
    // sydaje mi dobavlaem kartinku muziki, dobavlaem tak je po puti src
    // ! u mena oshibka bila v src puti qde ya zabil napisat qlavnuyu papku v kotoroy lejit papka audio
    audioImg.src = `./itunes/assets/audio/${track}.jpg`;

    // !nazvanie pesen
    // sdes mi dobavili nazvanie pesni v zaranee ustanovlenniy shablon tksta,
    // ? i komandoy  toUpperCase uvelicivaem vse bukvi v tekste slova
    audioHeader.textContent = track.toUpperCase();

    // sdes mi berem pesnu iz papki
    // ? propisivaya emu put ispolzuem interpolaciyu eto znak $
    // ! mi ukazivaem cto berem pesni s track, kotoriy beret pesni v toje vrema s massiva
    audioPlayer.src = `./itunes/assets/audio/${track}.mp3`;


    // ! isPlayed funkciyu mi propisali a ne audioPlayer.paused ctob esli pesna ne zapushena i pereklycenna
    // ! na sleduyushuyu ctob pesna perexodila no ne iqrala, a esli zapushenna ctob iqrala i menalas
    // eto funkciya dla vklyceniya muziki
    if (isPlayed) {
      // sdes pauza
      audioPlayer.pause();
    } else {
      // sdes play
      audioPlayer.play();
    }

  };

  //! a eta funkciya peremotka nazad
  const prevTrack = () => {
    if (trackIndex !== 0) {
      trackIndex--;
    } else {
      trackIndex = playlist.length - 1;
    }
    loadTrack();
  }
  // ***************************************
  // ! vot syda mi dobavili tu samuyu funkciyi kotoraya propisanna vnizu kak peremotka vpered
  // ! mi eyo dobavili kak edinuyu konstantu
  const nextTrack = () => {
    if (trackIndex === playlist.length - 1) {
      trackIndex = 0;
    } else {
      trackIndex++;
    }
    loadTrack();
  }

  // ! dobavlaem constantu ctob nam vozvrashala fukviyu esli minuta i sekunda menshe 10-ti
  // ? etu funkciyu mi dobavili v noviy fayl kotoriy eksportirovali syda
  // *******************************************************************************************

  // todo s pomoshyu audio navigation mi budem uprovlat trekami
  // todo budem znat na kakuyu knobku najal polzovatel i zapuskat audio
  audioNavigation.addEventListener('click', event => {
    const target = event.target;
    //  console.log(target);

    // ? eto uslovie koqda klikali po knobki play
    // todo: metod 'contains' proveraet est li tam takoy klass kotoriy mi ukazali v skobkax
    if (target.classList.contains('audio-button__play')) {
      // ? mi budem menat u audio klass list menat play
      // * toggle rabotaet tak esli etoqo klassa tam net on eqo dobavit esli on est to uberet
      audio.classList.toggle('play');
      // ? dalee mu budem dobavlat ili uberat klass s pomoshyu metoda toggle
      // ? u nas uje est fa play mi budem dobavlat fa play
      // ? i fa play budem uberat esli on uje est vse eto pri najatii
      audioButtonPlay.classList.toggle('fa-play');
      audioButtonPlay.classList.toggle('fa-pause');


      // todo otsuda mojem zapuskat i muziku, muziku budem zapuskat po usloviyu
      if (audioPlayer.paused) {
        // ? esli pause to play
        audioPlayer.play();
      } else {
        // ? inace vo vsex druqix slucayax a sdes on odin pause
        audioPlayer.pause();
      }


      // i esho dobavlaem samu muziku
      const track = playlist[trackIndex];
      // audio nazvanie pri pervom klike ne dobavlalos, poetomu mi vstavili syda audioHeader.textContent
      audioHeader.textContent = track.toUpperCase();

    }
    // **********
    // ! Dalee mi vstavlaem 2  usloviya, pervaya po knobki vpered, vtoraya po knobki nazad
    if (target.classList.contains('audio-button__prev')) {
      prevTrack();

      // *****
      // ! etot kod peremodka nazad on zakomentirovan, ya eqo dobavil v constantu
      // if (trackIndex !== 0) {
      // ? esli track index bolshe nula to mi daljni eqo ponizit
      // ? kak bi pomenat muziku na druquyu, umenshaya znacenie cerez denkrement
      // trackIndex--;
      // } else {
      // ? v druqom slucae mi doljni proverit skolko u nas pesen v playliste
      // ? i otnimaem edenicu ctob pereyti k poslednemu treku ili k treku kotoriy bil do
      //   trackIndex = playlist.length - 1;
      // }
      // loadTrack();
      // *****
    }


    // **********
    //? eto to uslovie koqda mi prexodim na sleduyushuyu muziku,0
    if (target.classList.contains('audio-button__next')) {
      nextTrack();

      // *****
      // ! etot kod kotoriy zakomentirovan ya dobavil v otdelnuyu funkciyu ctob neskolko raz 
      // ! ne propisivat eqo a propisat nazvanie etoy funkciyi
      // ? sdes mi pishem uslovie cto esli u nas muzika uje na minuse
      // if (trackIndex === playlist.length - 1) {
      //  ? to mi doljni eqo vernut v isxodnuyu poziciyu
      // trackIndex = 0;
      // } else {
      // ? vo vsex druqix slucayax mi pribavlaem edenicu, ili uvelicivaem na  edenicu
      // trackIndex++;
      // }
      // loadTrack();
      // *****
    }



  });

  // ! etu funkciyu dobavaem koqda track zakancivaetsa
  // ? sdes propisalos sobitie ended
  audioPlayer.addEventListener('ended', () => {
    // ? vot syda vstavlaem mi peremodku pesni vpered
    nextTrack();
    // i dobavlaem zapusk
    audioPlayer.play();
  });

  // todo: sdes mi dobavlaem progress bar, kotoriy mojno budet uvidet koqda iqraet muzika
  audioPlayer.addEventListener('timeupdate', () => {
    const duration = audioPlayer.duration;
    const currentTime = audioPlayer.currentTime;
    // sdes mi polucaem ostavsheesa vrema koqda proydennoe vrema delem na ostavsheesa ili na vse nu koroce
    const progress = (currentTime / duration) * 100;

    // ? Teper dla toqo ctobi progress bar otobrajalsa mi berem to cto mi propisivali v verxu
    // ? v konstantax dobavlaem emu klass style kak izmenaem emu vid iz klassov Js
    audioProgressTiming.style.width = progress + '%';

    // ! teper mi dobavlaem vrema / sdes esho vo vse znaceniya dobavlaem ili ctob pered prokrutkoy ne vixodila NaN
    // sdes polucaem minuti
    const minutesPassed = Math.floor(currentTime / 60) || '0';
    // sdes polucaem sekundi ostatkom ot deleniya
    const secondPassed = Math.floor(currentTime % 60) || '0';

    // sdes dobavlaem obsheye vrema v minutax
    const minutesTotal = Math.floor(duration / 60) || '0';
    // Obsheye vrema v sekundax
    const secondTotal = Math.floor(duration % 60) || '0';


    // todo: Teper vse eto vivodim na stranicu nashe vrema dla playera
    audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondPassed)}`;
    audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondTotal)}`;
  });



  // todo: sdes mi dobavlaem peremotku video po polzunku progres baru
  // > vmesto "e" mojno bilo napisat i event
  audioProgress.addEventListener('click', e => {
    // sdes mi berem kordinatu, offsetX beret po qlavnomu levomu krayu
    const x = e.offsetX;
    // sdes polucaem vse dlinnu treka
    const allWidth = audioProgress.clientWidth;
    //  koqda mi (x / allWidth) eto polucaem mesto kuda nam nado peremestitsa,
    //  nam ostaetsa tolko polucit vrema audioPlayer.duration
    const progress = (x / allWidth) * audioPlayer.duration;
    audioPlayer.currentTime = progress;
  });

  // ! sdes mi sddelali umensheniye zvuka po polzunku 
  audioVolume.addEventListener('input', () => {
    audioPlayer.volume = audioVolume.value / 100;
    console.log(audioPlayer);
  });

  audioPlayer.volume = 0.5;

  audioVolume.value = audioPlayer.volume * 100;

  // console.log(audioVolume.value);


  //   audioVolumeDown.addEventListener('click', (e) => {

  //     // if (audioVolume.value <= 100) {

  //     // }
  //     // ! sdes mi sdelali umenshenie shkali qromkosti na edenicu po kliku knobki
  //     audioVolume.value--;
  //     audioVolume.value();
  //     console.log(audioVolume.value);





  // //     console.log(e);
  // //     if (target.classList.contains('audio-volume-down')) {
  // // console.log('target')
  // //     };
  //   });



  //   audioNavigation.addEventListener('click', event => {
  //     const target = event.target;
  // // console.log(target);


  //     // ? eto uslovie koqda klikali po knobki play
  //     // todo: metod 'contains' proveraet est li tam takoy klass kotoriy mi ukazali v skobkax
  //!     if (target.classList.contains('audio-volume-down')) {

  //       // audioVolume.addEventListener('input', () => {
  //       //   audioPlayer.volume = audioVolume.value / 100;
  //       // });

  //       // audioPlayer.volume = 0.5;

  //       // audioVolume.value = audioPlayer.volume * 100;


  //       // // ? mi budem menat u audio klass list menat play
  //       // // * toggle rabotaet tak esli etoqo klassa tam net on eqo dobavit esli on est to uberet
  //       // audio.classList.toggle('play');
  //       // // ? dalee mu budem dobavlat ili uberat klass s pomoshyu metoda toggle
  //       // // ? u nas uje est fa play mi budem dobavlat fa play
  //       // // ? i fa play budem uberat esli on uje est vse eto pri najatii
  //       // audioButtonPlay.classList.toggle('fa-play');
  //       // audioButtonPlay.classList.toggle('fa-pause');


  //       // // todo otsuda mojem zapuskat i muziku, muziku budem zapuskat po usloviyu
  //       // if (audioPlayer.paused) {
  //       //   // ? esli pause to play
  //       //   audioPlayer.play();
  //       // } else {
  //       //   // ? inace vo vsex druqix slucayax a sdes on odin pause
  //       //   audioPlayer.pause();
  //       // }
  //     };
  //   });




};