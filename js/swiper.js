const gallerySwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  loopFillGroupWithBlank: true,
  slidesPerColumnFill: 'column',

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerColumn: 1,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumnFill: 'row',
    },
    768: {
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumnFill: 'column',
    },
    1440: {
      spaceBetween: 20,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1920: {
      spaceBetween: 50,
      slidesPerColumn: 2,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const publicationsSwiper = new Swiper('.publications-swiper', {
  direction: 'horizontal',
  loopFillGroupWithBlank: true,

  breakpoints: {
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const partnersSwiper = new Swiper('.project-swiper', {
  direction: 'horizontal',

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.project-next-btn',
    prevEl: '.project-prev-btn',
  },
});