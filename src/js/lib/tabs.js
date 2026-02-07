document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  const tabs = btn.closest('.tabs');
  const tabId = btn.dataset.tab;

  tabs
    .querySelectorAll('.tab-btn')
    .forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  tabs
    .querySelectorAll('.tab-content')
    .forEach((c) => c.classList.remove('active'));
  tabs
    .querySelector(`.tab-content[data-tab="${tabId}"]`)
    .classList.add('active');
});
