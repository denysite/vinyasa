const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
  const SHOW_AFTER = 400; // px від верху

  const onScroll = () => {
    if (window.scrollY > SHOW_AFTER) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
