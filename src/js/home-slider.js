import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const homeSlider = new Swiper(".hero", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});
