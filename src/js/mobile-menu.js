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
    document.body.classList.toggle('no-scroll');
  }
  function removeModal() {
    refs.modal.classList.add('is-hidden');
    refs.headerBtn.classList.remove('is-hidden');
    document.body.classList.remove('no-scroll');
  }
})();

// Modal Section About

const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
