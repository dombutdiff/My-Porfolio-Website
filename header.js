const openMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-btn");
const headerLinks = document.querySelector(".header-links");
const navLinks = document.querySelectorAll(".nav-links");

// OPEN MENU
openMenu.addEventListener("click", () => {
  headerLinks.classList.add("show");
});

// CLOSE MENU
closeMenu.addEventListener("click", () => {
  headerLinks.classList.remove("show");
});

// CLOSE MENU WHEN ANY LINK TRIGGERED
navLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    headerLinks.classList.remove("show");
  });
});

// HIDE MENU WHEN CLICKING OUTSIDE OF IT
document.body.addEventListener("click", (event) => {
  const isMenuOpen = headerLinks.classList.contains("show");
  const isClickInsideMenu = headerLinks.contains(event.target);
  const isClickInsideToggleMenu = openMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideToggleMenu && isMenuOpen) {
    headerLinks.classList.remove("show");
  }
});

const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
