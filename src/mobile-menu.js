(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      menuList: document.querySelector('.header-m__list'),
      headerBtn: document.querySelector('.header-m__buy--tablet'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuList.addEventListener('click', removeModal);


  function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.headerBtn.classList.toggle('is-hidden');
  }
  function removeModal() {
    refs.modal.classList.add('is-hidden');
    refs.headerBtn.classList.remove('is-hidden');
}
})();