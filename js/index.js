(function () {
  const body = document.body;
  //   const burgerButton = document.querySelector(".burger-menu");
  //   const burgerLinks = document.querySelector(".nav__item");
  //   const popupButtonOpen = document.querySelector(".about__play-button");
  //   const popupButtonClouse = document.querySelector(".popup__clouse-marker");

  const burgerOpened = (e) => {
    e.preventDefault();
    body.classList.toggle("body-open-menu");
  };
  const popupOpened = (e) => {
    e.preventDefault();
    body.classList.add("body-open-popup");
  };
  const popupClouse = (e) => {
    body.classList.remove("body-open-popup");
  };
  const toggleTabs = (e) => {
    const target = e.target;
    e.preventDefault();

    if (target.classList.contains("tabs__link--active")) return;

    const activeTab = document.querySelector(".tabs__link--active");
    const activeTabContent = document.querySelector(".tab__content--show");
    const idTabContent = target.getAttribute("href");

    if (activeTab) {
      activeTab.classList.remove("tabs__link--active");
      activeTabContent.classList.remove("tab__content--show");
    }

    target.classList.add("tabs__link--active");
    document.querySelector(idTabContent).classList.add("tab__content--show");
  };

  body.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".burger-menu")) {
      burgerOpened(e);
    }

    if (target.closest(".nav__item")) {
      body.classList.remove("body-open-menu");
    }

    if (target.closest(".about__play-button")) {
      popupOpened(e);
    }

    if (target.closest(".popup__clouse-marker") || target.classList.contains("popup")) {
      popupClouse();
    }

    if (target.closest(".tabs__link")) {
      toggleTabs(e);
    }

    // let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  });

  // ======================   Tabs

  const accordeons = document.querySelectorAll(".accordeon");

  const openedAccordeon = (e) => {
    e.preventDefault();
    const target = e.target;

    if (!target.closest(".accord__button")) return;

    const accordeon = e.currentTarget;
    const contentAccodr = accordeon.lastElementChild;

    if (accordeon.classList.contains("accordeon__content-show")) {
      accordeon.classList.remove("accordeon__content-show");
      contentAccodr.style.maxHeight = 0;
    } else {
      // Закрытие открытого аккордеона при нажатии на закрытый
      const openeAccordeon = document.querySelector(".accordeon__content-show");
      if (openeAccordeon) {
        const openAccordeonContent = openeAccordeon.lastElementChild;

        openeAccordeon.classList.remove("accordeon__content-show");
        openAccordeonContent.style.maxHeight = 0;
      }
      //  ===========================================

      accordeon.classList.add("accordeon__content-show");
      contentAccodr.style.maxHeight = contentAccodr.scrollHeight + "px";
    }
  };

  accordeons.forEach((accordeon) => {
    // добавление открытого аккордеона при загрузке

    const openeAccordeon = document.querySelector(".accordeon__content-show");
    const openAccordeonContent = openeAccordeon.lastElementChild;
    openAccordeonContent.style.maxHeight = openAccordeonContent.scrollHeight + "px";

    accordeon.addEventListener("click", openedAccordeon);
  });

  // =====================SLIDER GALLERY======================

  const swiperGallery = new Swiper(".gallery__slider", {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 32,
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        slideToClickedSlide: true,
      },
      801: {
        slidesPerView: 3,
        slideToClickedSlide: true,
      },
      1001: {
        slidesPerView: 4,
        slideToClickedSlide: true,
      },
    },
  });

  const swiperComment = new Swiper(".comment__slider", {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
      nextEl: ".comment__button-next",
      prevEl: ".comment__button-prev",
    },
    scrollbar: {
      el: ".comment__scrollbar",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      //   : {
      //     slidesPerView: 2,
      //     slideToClickedSlide: true,
      //   },
      901: {
        slidesPerView: 1.5,
        slideToClickedSlide: true,
      },
      1101: {
        slidesPerView: 2,
        slideToClickedSlide: true,
      },
    },
  });

  const element = document.querySelector(".tel-mask");
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
    placeholderChar: "+{7}(000)000-00-00",
  };
  const mask = IMask(element, maskOptions);
})();
