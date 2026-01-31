const burgerOpenButton = document.querySelector(".header__burger");
const burgerCloseButton = document.querySelector(".header__mobileMenu-close");

document.addEventListener("click", (e) => {
  if (e.target === burgerOpenButton || burgerOpenButton.contains(e.target)) {
    document.body.classList.add("menu-opened");
  } else if (
    e.target === burgerCloseButton ||
    burgerCloseButton.contains(e.target)
  ) {
    document.body.classList.remove("menu-opened");
  }
});
