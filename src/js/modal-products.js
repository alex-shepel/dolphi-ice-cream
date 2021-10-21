(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-pink-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-pink-close]'),
    modal: document.querySelector('[data-modal-products-pink]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop-products--is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-orange-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-orange-close]'),
    modal: document.querySelector('[data-modal-products-orange]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop-products--is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-green-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-green-close]'),
    modal: document.querySelector('[data-modal-products-green]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop-products--is-hidden');
  }
})();
