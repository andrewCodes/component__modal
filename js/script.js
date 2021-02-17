'use strict';

// SELECT THE ELEMENTS

const modal = document.querySelector('.modal'); // select the modal
const overlay = document.querySelector('.overlay'); // select the overlay
const btnCloseModal = document.querySelector('.modal__close-btn'); // select the close modal button (x)
const btnsOpenModal = document.querySelectorAll('.show-modal'); // select the show modal buttons. querySelector only selects a single item so if there are multiple items it will select the first instance. As there are multiple buttons available to open the modal, use querySelectorAll

// MODAL FUNCTIONALITY

const openModal = function () {
  // to open the modal we simply remove the .hidden class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  // to close the modal we add the .hidden class back
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// OPENING THE MODAL

for ( // looping through the various open buttons allows us to attach the event listener to each button
  let i = 0;
  i < btnsOpenModal.length;
  i++
)
  btnsOpenModal[i].addEventListener('click', openModal); // when a click event occurs on any "show modal" button, run the openModal function

// CLOSING THE MODAL

// with the x button in the modal
btnCloseModal.addEventListener('click', closeModal); // when a click event occurs on the "x" (close modal) button, run the closeModal function

// with the overlay
overlay.addEventListener('click', closeModal); // when a click event occurs on the overlay, run the closeModal function

// with the escape key
document.addEventListener('keydown', function (e) { // JS will call this function when a keydown event occurs. When the function is called JS will pass in the event object (i.e. the key that was pressed) as an argument (e)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) { // if the escape key is pressed AND the modal does NOT contain the hidden class (i.e. it is showing), do the following...
      closeModal();
  }
});
