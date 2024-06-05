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

// ACCORDION FOR SERVICES SECTION
const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// send message
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_yr1jpnu",
      "template_nm1a37g",
      "#contact-form",
      "LLwMpz-LuEAdFwvo5"
    )
    .then(() => {
      contactMessage.textContent = "Message Sent Successfully";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      contactForm.reset();
    });
};

contactForm.addEventListener("submit", sendEmail);
