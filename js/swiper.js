const gallerySwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  loopFillGroupWithBlank: true,

  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerColumn: 1,
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
    701: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    1251: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    1440: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'column',
      },
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
    321: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1250: {
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
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    701: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    769: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.project-next-btn',
    prevEl: '.project-prev-btn',
  },
});