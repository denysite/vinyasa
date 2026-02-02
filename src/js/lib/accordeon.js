(() => {
  const root = document.querySelector('[data-accordion]');
  if (!root) return;

  const single = root.dataset.single === 'true';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const items = [...root.querySelectorAll('[data-acc-item]')];

  items.forEach((item, idx) => {
    const btn = item.querySelector('[data-acc-trigger]');
    const panel = item.querySelector('[data-acc-content]');
    if (!btn || !panel) return;

    // a11y ids
    const btnId = btn.id || `acc-btn-${idx + 1}`;
    const panelId = panel.id || `acc-panel-${idx + 1}`;
    btn.id = btnId;
    panel.id = panelId;

    btn.setAttribute('aria-controls', panelId);
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', btnId);

    // стартовий стан (якщо хочеш відразу відкритий — додай class="is-open" на .acc)
    if (item.classList.contains('is-open')) {
      btn.setAttribute('aria-expanded', 'true');
      panel.style.height = 'auto';
    }

    btn.addEventListener('click', () => toggle(item));
  });

  function toggle(item) {
    const btn = item.querySelector('[data-acc-trigger]');
    const panel = item.querySelector('[data-acc-content]');
    const isOpen = item.classList.contains('is-open');

    if (single && !isOpen) {
      items.forEach((it) => it !== item && close(it));
    }

    isOpen ? close(item) : open(item);
  }

  function open(item) {
    const btn = item.querySelector('[data-acc-trigger]');
    const panel = item.querySelector('[data-acc-content]');

    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');

    if (reduceMotion.matches) {
      panel.style.height = 'auto';
      return;
    }

    // якщо було auto — зафіксуємо в px перед анімацією
    panel.style.height = '0px';

    const start = 0;
    const end = panel.scrollHeight;

    animateHeight(panel, start, end, () => {
      panel.style.height = 'auto'; // щоб контент адаптувався
    });
  }

  function close(item) {
    const btn = item.querySelector('[data-acc-trigger]');
    const panel = item.querySelector('[data-acc-content]');
    if (!item.classList.contains('is-open')) return;

    item.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');

    if (reduceMotion.matches) {
      panel.style.height = '0px';
      return;
    }

    // якщо зараз auto — переведемо в px, щоб плавно закрити
    const start = panel.getBoundingClientRect().height;
    const end = 0;

    panel.style.height = `${start}px`;

    animateHeight(panel, start, end, () => {
      panel.style.height = '0px';
    });
  }

  function animateHeight(el, from, to, onFinish) {
    // прибираємо попередні анімації
    if (el._accAnim) el._accAnim.cancel();

    const anim = el.animate([{ height: `${from}px` }, { height: `${to}px` }], {
      duration: 320,
      easing: 'cubic-bezier(.2,.8,.2,1)',
    });

    el._accAnim = anim;

    anim.onfinish = () => {
      el._accAnim = null;
      onFinish?.();
    };

    anim.oncancel = () => {
      el._accAnim = null;
    };
  }
})();
