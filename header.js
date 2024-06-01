const openMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-btn");
const headerLinks = document.querySelector(".header-links");

openMenu.addEventListener("click", () => {
  headerLinks.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  headerLinks.classList.remove("show");
});
