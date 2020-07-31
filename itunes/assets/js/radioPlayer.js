// TODO: sdes mi pishem kod kotoriy budet eksportirovatsa v index.js
// *********
export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioNavigation = document.querySelector('.radio-navigation');
  //  ? сдесь мы ставим Алл что означает все radio-item
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');
  // *********
  //  ! dalee mi budem rabotat s konstruktorom audio
  // ? Audio eto qlobalnaya funkciya konstruktor-eto funkciya sozdaet obyekt
  // ? v etoy funkciyi imeyutsa vse elementi Play, stop i td, kotoriye est v princepi i v video.js
  const audio = new Audio();
  audio.type = 'audio/aac';


  // *********
  // todo: eto dla blokirovki knobki play v razdeli radio
  radioStop.disabled = true;

  // **********  изменять лого плаира
  // todo: здесь мы ставим константу чтобы могли изменять лого плаира
  const changeIconPlay = () => {
    // todo здесь я буду уберать и добавлять иконку как  я делал это в видео через фа
    // ! сдесь была ошибка не (audio.pause), а (audio.paused)
    if (audio.paused) {
      // **********
    // todo  класс play нам нужен для того чтобы написанная на  Css анимация
    // todo  будет работать и тогда пластинка будет кружится
      // ? а  когда музыка будет играть мы будем уберать класс play
      radio.classList.remove('play');
      // ******
      // ? add
      radioStop.classList.add('fa-play-circle');
      // ? dell
      radioStop.classList.remove('fa-stop-circle');
    } else {
      // **********
      // ? когда музыка будет останавливатся мы будем добавлять класс play
      radio.classList.add('play');
      // *********
      radioStop.classList.add('fa-stop-circle');
      radioStop.classList.remove('fa-play-circle');
    }
  };

  // !sdes mi dobavlaem funkciyu kotoraya menaet borderi seriye pri najatii
  const selectItem = elem => {
    // ? sdes mi tolko vmesto parrent stavili elem
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }


  // *********
  //todo: eto funkciya srabativaet tolko odin raz v tom plane esli est izmeneniya change
  // todo: i est vozrat koqda est vozrat toqda esho raz zapuskaetsa funkciya i posle net
  radioNavigation.addEventListener('change', (event) => {
    // *********
    // ? posle audio stavim src qde ukazivaem put k radio stanciyi, put k radio
    // ? stancii propisan v inpute v html tam est primaya ssilka
    // ! event eto vse sobitiya proxodashie v radioNavigation, tam mi otlavlivaem target
    // todo: eto mi propisivaem ctob kajdiy raz ne obrashatsa k event-target
    const target = event.target;

    // *********** сдесь мы пишем константу чтобы получить родителя таргета
    // todo Это для того что бы мы вместо калонки вставили иконку радио
    // ?  далее мы ставим класс под которым и находится сама иконка
    const parrent = target.closest('.radio-item');
    // mi sdelali hover ili border posle najatiya no on ne propadaet posle najat
    // ? sdes delaem propadanie nordera s druqix posle najatie na sleduyushiy
    //* radioItem.forEach(item => item.classList.remove('select'));
    //* parent.classList.add('select');
    // ! seycas mi verxneye dobavim v otdelnuyu funkciyu a eqo ya zakomenty
    // todo i seycas to cto mi zakomentili i vstavili v const mi stavlaem uje tolko eqo nazvanie
    // todo kak bi vizivaem etu funkciyu i peredaem tuda 'parrent'
    selectItem(parrent);
    // console.log(parent)

    // *********** сдесь мы создаем перемменную для того чтобы получать название и картинку
  //  ?  mi mojem ne tolko k dom derevu obrshatsa no i k elementu i vnutri neqo iskat klass ili element .radio-name
    const title = parrent.querySelector('.radio-name').textContent;
    // ? teper polucennoe nazvanie nam nado zapisat v radioHeader v nacalnoe nazvanie
    radioHeaderBig.textContent = title;

    // ************
    // !teper mi budem izmenat izobrajeniye fona krutilki
    // ? sdes mi sperva polucaem kartinku radio kotoruyu mi doljni vzat i vstavit
    const urlImg = parrent.querySelector('.radio-img').src;

    // ? teper mi berem tu kartinku kotoruyu doljni zamenit verxney
    radioCoverImg.src = urlImg


    // ********* *********
    // todo: tak kak u nas knobka zablakirovanna mi stavlaem funkciyu syda ctob eyo vklycit
    radioStop.disabled = false;
    // *********

    // ***************
    //! target.dataset.radioStantion eto put ctob nayti nam ssilki kotoriyi vedut k radio
    // ! tam sidat ssilki radio
    // console.log(target.dataset.radioStantion);
    audio.src = target.dataset.radioStantion;
    // ************
    // ? dalee ctob radio zarabotalo mi stavim emu metod play();
    audio.play();

    // ***************
    // ? для того чтобы изменялись иконки в плаере мы добавим  changeIconPlay();
    changeIconPlay();


  });

  // todo : dla toqo ctobi ostanovit muziku nam nado propisat radio stop
  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      // ************
      // ? sdes mi stavim sobitie, cto esli iqraet muzika ili skajem play to
      // ? u nas budet proyavlatsa funkciya stop
      audio.play();
      // ************
    } else {
      // ? во всех других случаях мы ставим паузу
      audio.pause();
      // ************
    }

    // ***************
    // ? для того чтобы изменялись иконки в плаере мы добавим  changeIconPlay();
    changeIconPlay();
  })

};