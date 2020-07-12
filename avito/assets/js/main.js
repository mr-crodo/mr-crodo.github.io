// **************************
// ! ***********************
// TODO ************************

'use strict';


const dataBase = JSON.parse(localStorage.getItem('avito')) || [];


const modalAdd = document.querySelector('.modal__add'),
      addAd = document.querySelector('.add__ad'),
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),
      modalSubmit = document.querySelector('.modal__submit'),
      catalog = document.querySelector('.catalog'),
      modalItem = document.querySelector('.modal__item'),
      modalBtnWarning = document.querySelector('.modal__btn-warning'),
      
      // TODO: 4 den intnsiva
      modalFileInput = document.querySelector('.modal__file-input'),
      modalFileBtn = document.querySelector('.modal__file-btn'),
      modalImageAdd = document.querySelector('.modal__image-add');




const textFileBtn = modalFileBtn.textContent;
const srcModalImage = modalImageAdd.src;

const checkForm = () => {
  const validForm = elementsModalSubmit.every(elem => elem.value);
  modalBtnSubmit.disabled = !validForm;
  modalBtnWarning.style.display = validForm ? 'none' : '';

}

const elementsModalSubmit = [...modalSubmit.elements]
  .filter(elem => elem.tagName !== 'BUTTON' && elem.type !== 'submit');

const infoPhoto = {};

// const saveBD =() => localStorage.setItem('avito', JSON.stringify(dataBase));
const saveBD =() => localStorage.setItem('avito', JSON.stringify);


const closeModal = function (event) {
  const target = event.target;

  if(target.closest('.modal__close') || target.classList.contains('modal') || event.code === 'Escape') {
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
    document.removeEventListener('keydown', closeModal);
    modalSubmit.reset();
    modalImageAdd.src = srcModalImage;
    modalFileBtn.textContent = textFileBtn;
    checkForm();
  }
};

// TODO : eto <img class="card__image" src="data:image/jpeg;base64,${item.image}" alt="test"> izmenili
const renderCard = () => {
  catalog.textContent = '';

  dataBase.forEach((item, i) => {
    catalog.insertAdjacentHTML('beforeend', `
    <li class="card" data-id="${i}">
    <img class="card__image" src="${item.image}" alt="test">        

        <div class="card__description">
            <h3 class="card__header">${item.nameItem}</h3>
            <div class="card__price">${item.costItem} ₼</div>
        </div>

    </li>

    `);
  });
};


modalFileInput.addEventListener('change', event => {
  const target = event.target;

  const reader = new FileReader();

  infoPhoto.size = file.size;


  reader.readAsBinaryString(file);

  reader.addEventListener('Load', event => {
    if (infoPhoto.size < 200000) {
      modalFileBtn.textContent = infoPhoto.filename;
      infoPhoto.base64 = btoa(event.target.result);
      modalImageAdd.src ='data:image/jpeg; base64,${infoPhoto.base64}';
    } else {
      modalFileBtn.textContent = 'Файл не должен привишать 200 кб';
      
    }

  });


});



modalSubmit.addEventListener('input', checkForm);

modalSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const itemObj = {};
  for (const elem of elementsModalSubmit) {
    itemOBJ[elem.name] = elem.value;
  }

  dataBase.push(itemObj);
  closeModal({target: modalAdd});
  saveDB();
});

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
  document.addEventListener('keydown', closeModal); 
});


catalog.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    document.addEventListener('keydown', closeModal);
  };

});




modalAdd.addEventListener('click', closeModal);

modalItem.addEventListener('click', closeModal);



// modalSubmit.addEventListener('input', checkForm);

// modalSubmit.addEventListener('submit', event => {
//   event.preventDefault();
//   const itemObj = {};
//   for (const elem of elementsModalSubmit) {
//     itemOBJ[elem.name] = elem.value;
//   }
//   itemObj.image = infoPhoto.base64;
//   dataBase.push(itemObj);
//   closeModal({target: modalAdd});
//   saveDB();
//   renderCard();
// });

// addAd.addEventListener('click', () => {
//   modalAdd.classList.remove('hide');
//   modalBtnSubmit.disabled = true;
//   document.addEventListener('keydown', closeModal); 
// })



// modalFileInput.addEventListener('change', event => {
//   const target = event.target;

//   const reader = new FileReader();

//   const file = target.files[0];

//   infoPhoto.filename = file.name;
//   infoPhoto.size = file.size;

//   reader.readAsBinaryString(file);

//   reader.addEventListener('Load', event => {
//     if (infoPhoto.size < 200000) {
//       modalFileBtn.textContent = infoPhoto.filename;
//       infoPhoto.base64 = btoa(event.target.result);
//       modalImageAdd.src = `data:image/jpeg;base64,${infoPhoto.base64}`;
//     } else {
//       modalFileBtn.textContent = 'Файл не должен привишать 200 кб';
//       modalFileInput.value = '';
//       checkForm();
//     }

//   });


// });



// const closeModal = event => {
//   const target = event.target;

//   if(target.closest('.modal__close') ||
//   target.classList.contains('modal') ||
//   event.code === 'Escape') {
//     modalAdd.classList.add('hide');
//     modalItem.classList.add('hide');
//     document.removeEventListener('keydown', closeModal);
//     modalSubmit.reset();
//     modalImageAdd.src = srcModalImage;
//     modalFileBtn.textContent = textFileBtn;
//     checkForm();
//   }
// }




// ! 4 den Vorkshopa Avito









// ***********************
// modalSubmit.addEventListener('input', checkForm);

// modalSubmit.addEventListener('submit', event => {
//   event.preventDefault();
//   const itemObj = {};
//   for (const elem of elementsModalSubmit) {
//     itemOBJ[elem.name] = elem.value;
//   }
//   itemObj.image = infoPhoto.base64;
//   dataBase.push(itemObj);
//   closeModal({target: modalAdd});
//   saveDB();
//   renderCard();
// });

// addAd.addEventListener('click', () => {
//   modalAdd.classList.remove('hide');
//   modalBtnSubmit.disabled = true;
//   document.addEventListener('keydown', closeModal); 
// })


// *****************************************

// const closeModal = function (event) {
//   const target = event.target;

//   if (target.closest('.modal__close') || target === this) {

//     this.classList.add('hide');
//     if (this === modalAdd) {
//       modalSubmit.reset();
//     }
//   }
// };

// *******************************
// const closeModalEsc = event => {

//   if (event.code === 'Escape') {

//     modalAdd.classList.add('hide');
//     modalItem.classList.add('hide');
//     document.removeEventListener('keydown', closeModalEsc);
//   };
// };


// // *************
// modalSubmit.addEventListener('input', () => {
//   const validForm = elementsModalSubmit.every(elem => elem.value);
//   modalBtnSubmit.disabled = !validForm;
//   modalBtnWarning.style.display = validForm ? 'none' : '';

// });

// // *******************************
// //TODO: 4 den Avito dapolnil
// modalSubmit.addEventListener('input', checkForm);

// modalSubmit.addEventListener('submit', event => {
//   event.preventDefault();
//   const itemObj = {};
//   for (const elem of elementsModalSubmit) {
//     itemObj[elem.name] = elem.value;
//   }

//   itemObj.image = infoPhoto.base64;

//   dataBase.push(itemObj);
//   closeModal({target: modalAdd});
//   saveDB();
//   renderCard();
//   modalSubmit.reset();
// });



// // **********************
// addAd.addEventListener('click', () => {
//   modalAdd.classList.remove('hide');
//   document.addEventListener('keydown', closeModalEsc);

//   modalBtnSubmit.disabled = true;
// });


// // *********************************
// catalog.addEventListener('click', event => {
//   const target = event.target;
//   if (target.closest('.card')) {
//     modalItem.classList.remove('hide');
//     // ? sdes mi vstavili zakritie po Esc
//     document.addEventListener('keydown', closeModalEsc);
//   };

// });


// // ***********************************
// modalAdd.addEventListener('click', closeModal);

// // ********************************** 
// modalItem.addEventListener('click', closeModal);



