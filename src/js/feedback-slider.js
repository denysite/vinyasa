import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const feedbackSlider = new Swiper('.feedback__slider', {
  modules: [Pagination],
  pagination: {
    el: '.feedback__slider-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
});
