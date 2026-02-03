document.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal-wrapper');
  const body = document.querySelector('body');

  if (e.target.closest('.header__button')) {
    modal.style.display = 'block';
    body.classList.add('modal-open');
  } else if (e.target.closest('.modal__close')) {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  }
});
