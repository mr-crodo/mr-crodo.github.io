



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