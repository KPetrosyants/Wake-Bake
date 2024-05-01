(function () {
  const body = document.body;
  const burgerButton = document.querySelector(".burger-menu");
  const burgerLinks = document.querySelector(".nav__item");
  const popupButtonOpen = document.querySelector(".about__play-button");
  const popupButtonClouse = document.querySelector(".popup__clouse-marker");

  const burgerOpened = (e) => {
    body.classList.toggle("body-open-menu");
  };
  const popupOpened = (e) => {
    body.classList.add("body-open-popup");
  };
  const popupClouse = (e) => {
    body.classList.remove("body-open-popup");
  };

  body.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.closest(".burger-menu")) {
      burgerOpened();
    }
    if (target.closest(".nav__item")) {
      body.classList.remove("body-open-menu");
    }
    if (target.closest(".about__play-button")) {
      popupOpened();
    }
    if (target.closest(".popup__clouse-marker") || target.classList.contains("popup")) {
      popupClouse();
    }

    // let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  });
})();
