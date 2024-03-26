'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //console.log('Button Clicked');
  modal.classList.remove('hidden'); // do not use dot here, only for selector
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//function reference here for DRY
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document,
  addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); // we call function here
    }
  });
