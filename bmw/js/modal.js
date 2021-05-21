//delegirovanie
const moreElems = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
  disableScroll();
};

const closeModal = () => {
  modalElem.classList.add('hidden');
}

moreElems.addEventListener('click', openModal);
modalElem.addEventListener('click', (event) => {
  // console.log(event.target); proveraem
  const target = event.target;

  // proveraem esli najataya cast evlaetsa klassom overlay
  if (target.classList.contains('overlay') ||
      target.classList.contains('modal__close')) {
        closeModal();
        document.body.style.overflow = 'auto';
      } 
      
      // if (target.classList.contains('modal__title')) {
      //   target.style.color = 'red';
      // }
  
})