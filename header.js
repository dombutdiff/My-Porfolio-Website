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

// // Get the header element
// const header = document.querySelector(".header");

// // Check the background color of the header and change text color accordingly
// const changeTextColor = () => {
//   const backgroundColor = window
//     .getComputedStyle(header)
//     .getPropertyValue("background-color");
//   const navLogoName = document.querySelector(".nav__logo-name");
//   const toggleMenu = document.querySelector(".toggle-menu");

//   if (backgroundColor === "rgb(255, 255, 255)") {
//     // If background color is white, change text color to black
//     navLogoName.style.color = "black";
//     toggleMenu.style.color = "black";
//   } else {
//     // Otherwise, change text color to white
//     navLogoName.style.color = "white";
//     toggleMenu.style.color = "white";
//   }
// };

// // Call the function initially
// changeTextColor();

// // Listen for scroll events and call the function
// window.addEventListener("scroll", changeTextColor);

// // Get the header element
// const header = document.querySelector(".header");

// // Function to check the background color of the content and adjust the header's background color
// const adjustHeaderBackground = () => {
//   // Get the background color of the content
//   const contentBackgroundColor = window
//     .getComputedStyle(document.body)
//     .getPropertyValue("background-color");

//   // Set the header's background color based on the content's background color
//   header.style.backgroundColor = contentBackgroundColor;
// };

// // Call the function initially
// adjustHeaderBackground();

// // Listen for scroll events and call the function
// window.addEventListener("scroll", adjustHeaderBackground);
