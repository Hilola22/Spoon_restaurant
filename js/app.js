const hamburger = document.querySelector(".hamburger");
const popupMenu = document.querySelector(".popup-menu");

hamburger.addEventListener("click", () => {
  popupMenu.classList.toggle("active");
});
