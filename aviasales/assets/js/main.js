// Baza dannix qorodov rossiyi

// const city = [
//   'Абакан',
//   'Азов',
//   'Александров',
//   'Алексин',
//   'Альметьевск',
//   'Анапа',
//   'Ангарск',
//   'Анжеро-Судженск',
//   'Апатиты',
//   'Арзамас',
//   'Армавир',
//   'Арсеньев',
//   'Артем',
//   'Архангельск',
//   'Асбест',
//   'Астрахань',
//   'Ачинск',
//   'Балаково',
//   'Балахна',
//   'Балашиха',
//   'Балашов',
//   'Барнаул',
//   'Батайск',
//   'Белгород',
//   'Белебей',
//   'Белово',
//   'Белогорск (Амурская область)',
//   'Белорецк',
//   'Белореченск',
//   'Бердск',
//   'Березники',
//   'Березовский (Свердловская область)',
//   'Бийск',
//   'Биробиджан',
//   'Благовещенск (Амурская область)',
//   'Бор',
//   'Борисоглебск',
//   'Боровичи',
//   'Братск',
//   'Брянск',
//   'Бугульма',
//   'Буденновск',
//   'Бузулук',
//   'Буйнакск',
//   'Великие Луки',
//   'Великий Новгород',
//   'Верхняя Пышма',
//   'Видное',
//   'Владивосток',
//   'Владикавказ',
//   'Владимир',
//   'Волгоград',
//   'Волгодонск',
//   'Волжск',
//   'Волжский',
//   'Вологда',
//   'Вольск',
//   'Воркута',
//   'Воронеж',
//   'Воскресенск',
//   'Воткинск',
//   'Всеволожск',
//   'Выборг',
//   'Выкса',
//   'Вязьма',
//   'Гатчина',
//   'Геленджик',
//   'Георгиевск',
//   'Глазов',
//   'Горно-Алтайск',
//   'Грозный',
//   'Губкин',
//   'Гудермес',
//   'Гуково',
//   'Гусь-Хрустальный',
//   'Дербент',
//   'Дзержинск',
//   'Димитровград',
//   'Дмитров',
//   'Долгопрудный',
//   'Домодедово',
//   'Донской',
//   'Дубна',
//   'Евпатория',
//   'Егорьевск',
//   'Ейск',
//   'Екатеринбург',
//   'Елабуга',
//   'Елец',
//   'Ессентуки',
//   'Железногорск (Красноярский край)',
//   'Железногорск (Курская область)',
//   'Жигулевск',
//   'Жуковский',
//   'Заречный',
//   'Зеленогорск',
//   'Зеленодольск',
//   'Златоуст',
//   'Иваново',
//   'Ивантеевка',
//   'Ижевск',
//   'Избербаш',
//   'Иркутск',
//   'Искитим',
//   'Ишим',
//   'Ишимбай',
//   'Йошкар-Ола',
//   'Казань',
//   'Калининград',
//   'Калуга',
//   'Каменск-Уральский',
//   'Каменск-Шахтинский',
//   'Камышин',
//   'Канск',
//   'Каспийск',
//   'Кемерово',
//   'Керчь',
//   'Кинешма',
//   'Кириши',
//   'Киров (Кировская область)',
//   'Кирово-Чепецк',
//   'Киселевск',
//   'Кисловодск',
//   'Клин',
//   'Клинцы',
//   'Ковров',
//   'Когалым',
//   'Коломна',
//   'Комсомольск-на-Амуре',
//   'Копейск',
//   'Королев',
//   'Кострома',
//   'Котлас',
//   'Красногорск',
//   'Краснодар',
//   'Краснокаменск',
//   'Краснокамск',
//   'Краснотурьинск',
//   'Красноярск',
//   'Кропоткин',
//   'Крымск',
//   'Кстово',
//   'Кузнецк',
//   'Кумертау',
//   'Кунгур',
//   'Курган',
//   'Курск',
//   'Кызыл',
//   'Лабинск',
//   'Лениногорск',
//   'Ленинск-Кузнецкий',
//   'Лесосибирск',
//   'Липецк',
//   'Лиски',
//   'Лобня',
//   'Лысьва',
//   'Лыткарино',
//   'Люберцы',
//   'Магадан',
//   'Магнитогорск',
//   'Майкоп',
//   'Махачкала',
//   'Междуреченск',
//   'Мелеуз',
//   'Миасс',
//   'Минеральные Воды',
//   'Минусинск',
//   'Михайловка',
//   'Михайловск (Ставропольский край)',
//   'Мичуринск',
//   'Москва',
//   'Мурманск',
//   'Муром',
//   'Мытищи',
//   'Набережные Челны',
//   'Назарово',
//   'Назрань',
//   'Нальчик',
//   'Наро-Фоминск',
//   'Находка',
//   'Невинномысск',
//   'Нерюнгри',
//   'Нефтекамск',
//   'Нефтеюганск',
//   'Нижневартовск',
//   'Нижнекамск',
//   'Нижний Новгород',
//   'Нижний Тагил',
//   'Новоалтайск',
//   'Новокузнецк',
//   'Новокуйбышевск',
//   'Новомосковск',
//   'Новороссийск',
//   'Новосибирск',
//   'Новотроицк',
//   'Новоуральск',
//   'Новочебоксарск',
//   'Новочеркасск',
//   'Новошахтинск',
//   'Новый Уренгой',
//   'Ногинск',
//   'Норильск',
//   'Ноябрьск',
//   'Нягань',
//   'Обнинск',
//   'Одинцово',
//   'Озерск (Челябинская область)',
//   'Октябрьский',
//   'Омск',
//   'Орел',
//   'Оренбург',
//   'Орехово-Зуево',
//   'Орск',
//   'Павлово',
//   'Павловский Посад',
//   'Пенза',
//   'Первоуральск',
//   'Пермь',
//   'Петрозаводск',
//   'Петропавловск-Камчатский',
//   'Подольск',
//   'Полевской',
//   'Прокопьевск',
//   'Прохладный',
//   'Псков',
//   'Пушкино',
//   'Пятигорск',
//   'Раменское',
//   'Ревда',
//   'Реутов',
//   'Ржев',
//   'Рославль',
//   'Россошь',
//   'Ростов-на-Дону',
//   'Рубцовск',
//   'Рыбинск',
//   'Рязань',
//   'Салават',
//   'Сальск',
//   'Самара',
//   'Санкт-Петербург',
//   'Саранск',
//   'Сарапул',
//   'Саратов',
//   'Саров',
//   'Свободный',
//   'Севастополь',
//   'Северодвинск',
//   'Северск',
//   'Сергиев Посад',
//   'Серов',
//   'Серпухов',
//   'Сертолово',
//   'Сибай',
//   'Симферополь',
//   'Славянск-на-Кубани',
//   'Смоленск',
//   'Соликамск',
//   'Солнечногорск',
//   'Сосновый Бор',
//   'Сочи',
//   'Ставрополь',
//   'Старый Оскол',
//   'Стерлитамак',
//   'Ступино',
//   'Сургут',
//   'Сызрань',
//   'Сыктывкар',
//   'Таганрог',
//   'Тамбов',
//   'Тверь',
//   'Тимашевск',
//   'Тихвин',
//   'Тихорецк',
//   'Тобольск',
//   'Тольятти',
//   'Томск',
//   'Троицк',
//   'Туапсе',
//   'Туймазы',
//   'Тула',
//   'Тюмень',
//   'Узловая',
//   'Улан-Удэ',
//   'Ульяновск',
//   'Урус-Мартан',
//   'Усолье-Сибирское',
//   'Уссурийск',
//   'Усть-Илимск',
//   'Уфа',
//   'Ухта',
//   'Феодосия',
//   'Фрязино',
//   'Хабаровск',
//   'Ханты-Мансийск',
//   'Хасавюрт',
//   'Химки',
//   'Чайковский',
//   'Чапаевск',
//   'Чебоксары',
//   'Челябинск',
//   'Черемхово',
//   'Череповец',
//   'Черкесск',
//   'Черногорск',
//   'Чехов',
//   'Чистополь',
//   'Чита',
//   'Шадринск',
//   'Шали',
//   'Шахты',
//   'Шуя',
//   'Щекино',
//   'Щелково',
//   'Электросталь',
//   'Элиста',
//   'Энгельс',
//   'Южно-Сахалинск',
//   'Юрга',
//   'Якутск',
//   'Ялта',
//   'Ярославль',
// ];

// $(function () {
//   var $zip = $('[name="zip"]'),
//       $region = $('[name="region"]'),
//       $district = $('[name="district"]'),
//       $city = $('[name="city"]'),
//       $street = $('[name="street"]'),
//       $building = $('[name="building"]');

//   var $tooltip = $('.tooltip');

//   $.fias.setDefault({
//       parentInput: '.js-form-address',
//       verify: true,
//       select: function (obj) {
//           setLabel($(this), obj.type);
//           $tooltip.hide();
//       },
//       check: function (obj) {
//           var $input = $(this);

//           if (obj) {
//               setLabel($input, obj.type);
//               $tooltip.hide();
//           }
//           else {
//               showError($input, 'Введено неверно');
//           }
//       },
//       checkBefore: function () {
//           var $input = $(this);

//           if (!$.trim($input.val())) {
//               $tooltip.hide();
//               return false;
//           }
//       },
//       change: function (obj) {
//           if(obj && obj.parents){
//               $.fias.setValues(obj.parents, '.js-form-address');
//           }

//           if(obj && obj.zip){
//               $('[name="zip"]').val(obj.zip);
//           }
//       },
//   });

//   $region.fias('type', $.fias.type.region);
//   $district.fias('type', $.fias.type.district);
//   $city.fias('type', $.fias.type.city);
//   $street.fias('type', $.fias.type.street);
//   $building.fias('type', $.fias.type.building);

//   $district.fias('withParents', true);
//   $city.fias('withParents', true);
//   $street.fias('withParents', true);


//   // Отключаем проверку введённых данных для строений
//   $building.fias('verify', false);

//   // Подключаем плагин для почтового индекса
//   // $zip.fiasZip('.js-form-address');

//   function setLabel($input, text) {
//       text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
//       $input.parent().find('label').text(text);
//   }

//   function showError($input, message) {
//       $tooltip.find('span').text(message);

//       var inputOffset = $input.offset(),
//           inputWidth = $input.outerWidth(),
//           inputHeight = $input.outerHeight();

//       var tooltipHeight = $tooltip.outerHeight();

//       $tooltip.css({
//           left: (inputOffset.left + inputWidth + 10) + 'px',
//           top: (inputOffset.top + (inputHeight - tooltipHeight) / 2 - 1) + 'px'
//       });

//       $tooltip.show();
//   }
// });






// $(function () {



//   $('[name="city"]').fias({
//   type: $.fias.type.city,
//       change: function (obj) {
//           var address = $.fias.getAddress('.js-form-address');

//           $('#address').text(address);
//       },
//       'withParents' : true

//   });


// });

// $(function () {
//   var $city = $('[name="city"]');

//   $city.fias({
//       type: $.fias.type.city,
//       'withParents': true,
//       change: function (obj) {
//           var address = $.fias.getAddress('.js-form-address');

//           $('#address').text(address);
//       },
//   });

//   $('[name="city_id"]').change(function () {
//       var id = $(this).val();

//       // Устанавливаем значение поля ввода по id
//       $city.fias('controller').setValueById(id);
//   });
// });



// $.fias.token = 'KfkdT6z4FnBynBKknQ8t6Kr7b5e2BHei';
//     $.fias.url = 'https://kladr-api.ru/api.php';






// 
const formSearch = document.querySelector('.form-search'),
  inputCitiesFrom = document.querySelector('.input__cities-from'),
  dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
  inputCitiesTo = document.querySelector('.input__cities-to'),
  dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
  inputDateDepart = document.querySelector('.input__date-depart');


//  eto moy token ot sayta  https://kladr-api.ru/profile, dla toqo
// ctobi ne ispolzovat bolshoe kolicestvo massivov dla stran
// KfkdT6z4FnBynBKknQ8t6Kr7b5e2BHei


// **************
// Dannie http://api.travelpayouts.com/data/ru/cities.json  // /assets/dataBase/cities.json
const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
  // const citiesApi = '/assets/dataBase/cities.json',
  proxy = 'https://cors-anywhere.herokuapp.com/',
  API_KEY = 'e72312003b28cf023961edb4a1b4c5f0';

//  
// proxy = ' https://cors-anywhere.herokuapp.com/';

// Baza dannix Qorodov Rossiyi


let city = [];


// Funkcii

// Dla raboti s API

const getData = (url, callback) => {
  const request = new XMLHttpRequest();



  // GET eto ctobi polucat , a POST ctobi otpravlat 
  request.open('GET', url);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;

    // otvet ot servera nam nujen 200, 200 eto polojitelniy otvet
    if (request.status === 200) {
      callback(request.response);
    } else {
      console.error(request.status);
    }

  });

  request.send();
};






const showCity = (input, list) => {
  list.textContent = '';

  if (input.value !== '') {

    const filterCity = city.filter((item) => {
      const fixItem = item.name.toLowerCase();
      return fixItem.includes(input.value.toLowerCase());
    });

    filterCity.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('dropdown__city');
      li.textContent = item.name;
      list.append(li)
    });

  }

};


const selectCity = (event, input, list) => {
  const target = event.target;
  // sdes mi zadaems s bolshoy ili s malenoy bukvi vse budet nacinatsa
  if (target.tagName.toLowerCase() === 'li') {
    input.value = target.textContent;
    list.textContent = '';
  }
}


// Obrobotki sobotiy

inputCitiesFrom.addEventListener('input', () => {
  showCity(inputCitiesFrom, dropdownCitiesFrom);
});


inputCitiesTo.addEventListener('input', () => {
  showCity(inputCitiesTo, dropdownCitiesTo);
});


dropdownCitiesFrom.addEventListener('click', (event) => {
  selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});


dropdownCitiesTo.addEventListener('click', (event) => {
  selectCity(event, inputCitiesTo, dropdownCitiesTo);
});


// dropdownCitiesTo.addEventListener('click', (event) => {
//   const target = event.target;
//   // sdes mi zadaems s bolshoy ili s malenoy bukvi vse budet nacinatsa
//   if (target.tagName.toLowerCase() === 'li') {
//     inputCitiesTo.value = target.textContent;
//     dropdownCitiesTo.textContent = '';
//   }
// });


//  Vizovi funkcii

getData(proxy + citiesApi, (data) => {
  city = JSON.parse(data).filter((item) => {
    return item.name;
  });

});


// Verxnuyu funkciyu mojno zapisat i tak
// getData(proxy + citiesApi, data => city = JSON.parse(data).filter(item =>  item.name));