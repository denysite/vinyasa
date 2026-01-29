const burgerButton = document.querySelector(".header__burger");

document.addEventListener("click", (e) => {
  if (e.target === burgerButton || burgerButton.contains(e.target)) {
    document.body.classList.toggle("menu-opened");
  }
});
