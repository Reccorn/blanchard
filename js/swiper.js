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
    681: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'column',
      },
    },
    1025: {
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
    681: {
      spaceBetween: 34,
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
    681: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    769: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1135: {
      spaceBetween: 10,
      slidesPerView: 3,
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