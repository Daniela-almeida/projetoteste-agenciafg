// slide banner
const slider = document.querySelector(".slider");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideWidth = slider.clientWidth;
let slideIndex = 0;
let transitioning = false;

nextButton.addEventListener("click", () => {
  if (!transitioning && slideIndex < slider.children.length - 1) {
    slideIndex++;
    updateSlider();
  }
});

prevButton.addEventListener("click", () => {
  if (!transitioning && slideIndex > 0) {
    slideIndex--;
    updateSlider();
  }
});

function updateSlider() {
  transitioning = true;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px`;

  setTimeout(() => {
    transitioning = false;
  }, 700);
}
updateSlider();

// menu mobile
class MobileNavbar {
  constructor(mobileMenu, nav__List, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.nav__List = document.querySelector(nav__List);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.nav__List.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);

    document.body.classList.toggle(this.activeClass);

    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav__list",
  ".nav__list li"
);

mobileNavbar.init();

// btn - show equipe
document.addEventListener("DOMContentLoaded", function () {
  const teamSection = document.getElementById("team");
  const btnFinal = document.querySelector(".btn_final");
  const containerTeam = teamSection.querySelector(".container-team");

  let isTeamVisible = false;

  btnFinal.addEventListener("click", function () {
    if (isTeamVisible) {
      containerTeam.style.display = "none";
      isTeamVisible = false;
    } else {
      containerTeam.style.display = "flex";
      isTeamVisible = true;
    }
  });
});
