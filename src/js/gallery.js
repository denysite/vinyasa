import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const galleryItem = '.gallery__grid';

const lightbox = new PhotoSwipeLightbox({
  gallery: galleryItem,
  children: 'a',
  pswpModule: () => import('photoswipe'),
});
lightbox.init();

const openImgWidth = document.querySelector(galleryItem).dataset.imgWidth;

document.querySelectorAll(`${galleryItem} a`).forEach((item) => {
  const itemHeight = item.dataset.pswpHeight;

  if (openImgWidth && itemHeight) {
    item.dataset.pswpWidth = openImgWidth;
    item.style.setProperty('--img-h', itemHeight);
    item.style.setProperty('--img-w', openImgWidth);
  }
});
