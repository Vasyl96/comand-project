/*
  |==============================
  | Modal window script
  |==============================
*/

(() => {
  var refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtns.forEach(function (open) {
    open.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // Press Escape to close
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      refs.modal.classList.add('modal--is-hidden'), refs.backdrop.classList.add('backdrop--is-hidden'), refs.body.classList.remove('no-scroll');
    }
  });

  // Click into backdrop to close
  refs.backdrop.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--is-hidden');
    refs.backdrop.classList.toggle('backdrop--is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();