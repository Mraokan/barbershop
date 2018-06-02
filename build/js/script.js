var mainMenu = document.querySelector(".main-nav__wrapper");
var menuButton = document.querySelector(".main-nav__toggle");
var loginButton = document.querySelector(".user-menu__login");
var loginModal = document.querySelector(".user-modal");
var closeModal = document.querySelector(".user-modal__close");

var advantageToggle1 = document.querySelector(".slider__toggle--1");
var advantageToggle2 = document.querySelector(".slider__toggle--2");
var advantageToggle3 = document.querySelector(".slider__toggle--3");
var advantageFast = document.querySelector(".advantages__item--fast");
var advantageCool = document.querySelector(".advantages__item--cool");
var advantageExp = document.querySelector(".advantages__item--expensive");

var reviewToggle1 = document.querySelector(".slider__toggle--dark-1");
var reviewToggle2 = document.querySelector(".slider__toggle--dark-2");
var reviewToggle3 = document.querySelector(".slider__toggle--dark-3");
var reviewPrev = document.querySelector(".reviews__prev");
var reviewNext = document.querySelector(".reviews__next");
var review1 = document.querySelector(".reviews-item--1");
var review2 = document.querySelector(".reviews-item--2");
var review3 = document.querySelector(".reviews-item--3");

mainMenu.classList.remove("main-nav__wrapper--no-js");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (mainMenu.classList.contains("display-block")) {
    mainMenu.classList.remove("display-block");
    menuButton.classList.remove("main-nav__toggle--opened");
  } else {
    mainMenu.classList.add("display-block");
    menuButton.classList.add("main-nav__toggle--opened");
  }
});

loginButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (loginModal.classList.contains("display-block")) {
    loginModal.classList.remove("display-block");
  } else {
    loginModal.classList.add("display-block");
  }
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();

  loginModal.classList.remove("display-block");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginModal.classList.contains("display-block")) {
      loginModal.classList.remove("display-block");
    }
  }
});

advantageToggle1.addEventListener("click", function () {
  if (advantageCool.classList.contains("display-block")) {
    advantageCool.classList.remove("display-block");
    advantageToggle2.classList.remove("slider__toggle--active");
    advantageFast.classList.add("display-block");
    advantageToggle1.classList.add("slider__toggle--active");
  } else if (advantageExp.classList.contains("display-block")) {
    advantageExp.classList.remove("display-block");
    advantageToggle3.classList.remove("slider__toggle--active");
    advantageFast.classList.add("display-block");
    advantageToggle1.classList.add("slider__toggle--active");
  }
});

advantageToggle2.addEventListener("click", function () {
  if (advantageFast.classList.contains("display-block")) {
    advantageFast.classList.remove("display-block");
    advantageToggle1.classList.remove("slider__toggle--active");
    advantageCool.classList.add("display-block");
    advantageToggle2.classList.add("slider__toggle--active");
  } else if (advantageExp.classList.contains("display-block")) {
    advantageExp.classList.remove("display-block");
    advantageToggle3.classList.remove("slider__toggle--active");
    advantageCool.classList.add("display-block");
    advantageToggle2.classList.add("slider__toggle--active");
  }
});

advantageToggle3.addEventListener("click", function () {
  if (advantageCool.classList.contains("display-block")) {
    advantageCool.classList.remove("display-block");
    advantageToggle2.classList.remove("slider__toggle--active");
    advantageExp.classList.add("display-block");
    advantageToggle3.classList.add("slider__toggle--active");
  } else if (advantageFast.classList.contains("display-block")) {
    advantageFast.classList.remove("display-block");
    advantageToggle1.classList.remove("slider__toggle--active");
    advantageExp.classList.add("display-block");
    advantageToggle3.classList.add("slider__toggle--active");
  }
});

reviewToggle1.addEventListener("click", function () {
  if (review2.classList.contains("display-block")) {
    review2.classList.remove("display-block");
    reviewToggle2.classList.remove("slider__toggle--dark--active");
    review1.classList.add("display-block");
    reviewToggle1.classList.add("slider__toggle--dark--active");
  } else if (review3.classList.contains("display-block")) {
    review3.classList.remove("display-block");
    reviewToggle3.classList.remove("slider__toggle--dark--active");
    review1.classList.add("display-block");
    reviewToggle1.classList.add("slider__toggle--dark--active");
  }
});

reviewToggle2.addEventListener("click", function () {
  if (review1.classList.contains("display-block")) {
    review1.classList.remove("display-block");
    reviewToggle1.classList.remove("slider__toggle--dark--active");
    review2.classList.add("display-block");
    reviewToggle2.classList.add("slider__toggle--dark--active");
  } else if (review3.classList.contains("display-block")) {
    review3.classList.remove("display-block");
    reviewToggle3.classList.remove("slider__toggle--dark--active");
    review2.classList.add("display-block");
    reviewToggle2.classList.add("slider__toggle--dark--active");
  }
});

reviewToggle3.addEventListener("click", function () {
  if (review2.classList.contains("display-block")) {
    review2.classList.remove("display-block");
    reviewToggle2.classList.remove("slider__toggle--dark--active");
    review3.classList.add("display-block");
    reviewToggle3.classList.add("slider__toggle--dark--active");
  } else if (review1.classList.contains("display-block")) {
    review1.classList.remove("display-block");
    reviewToggle1.classList.remove("slider__toggle--dark--active");
    review3.classList.add("display-block");
    reviewToggle3.classList.add("slider__toggle--dark--active");
  }
});

reviewPrev.addEventListener("click", function () {
  if (review2.classList.contains("display-block")) {
    review2.classList.remove("display-block");
    reviewToggle2.classList.remove("slider__toggle--dark--active");
    review1.classList.add("display-block");
    reviewToggle1.classList.add("slider__toggle--dark--active");
  } else if (review3.classList.contains("display-block")) {
    review3.classList.remove("display-block");
    reviewToggle3.classList.remove("slider__toggle--dark--active");
    review2.classList.add("display-block");
    reviewToggle2.classList.add("slider__toggle--dark--active");
  }
});

reviewNext.addEventListener("click", function () {
  if (review1.classList.contains("display-block")) {
    review1.classList.remove("display-block");
    reviewToggle1.classList.remove("slider__toggle--dark--active");
    review2.classList.add("display-block");
    reviewToggle2.classList.add("slider__toggle--dark--active");
  } else if (review2.classList.contains("display-block")) {
    review2.classList.remove("display-block");
    reviewToggle2.classList.remove("slider__toggle--dark--active");
    review3.classList.add("display-block");
    reviewToggle3.classList.add("slider__toggle--dark--active");
  }
});