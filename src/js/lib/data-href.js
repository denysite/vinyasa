document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-href]');
  if (!card) return;

  if (e.target.closest('a')) return;

  const url = card.dataset.href;
  if (url) {
    window.location.href = url;
  }
});
