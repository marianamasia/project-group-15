(() => {
  const refs = {
    openMobModalBtn: document.querySelector('[mob-modal-open]'),
    closeMobModalBtn: document.querySelector('[mob-modal-close]'),
    mobModal: document.querySelector('[mob-modal]'),
  };

  refs.openMobModalBtn.addEventListener('click', toggleModal);
  refs.closeMobModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobModal.classList.toggle('is-open');
  }
})();
