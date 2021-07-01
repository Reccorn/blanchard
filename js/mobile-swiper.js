document.addEventListener('DOMContentLoaded', function () {
  const pageWidth = window.matchMedia('(max-width: 767px)')

  function createMobileSwiper() {
    document.querySelector('.events__swiper-container').classList.add('events__mobile-swiper');

    document.querySelector('.events__list').classList.add('swiper-wrapper');

    document.querySelectorAll('.events__item:nth-child(1n + 4)').forEach(item => {
      item.style.display = 'block';
    });

    document.querySelectorAll('.events__item').forEach(item => {
      item.classList.add('swiper-slide');
    });

    const mobileSwiper = new Swiper('.events__swiper-container', {
      direction: 'horizontal',
      // loop: true,
      spaceBetween: 20,
      breakpoints: {
        768: {
          // enabled: 'false',
          noSwiping: 'true',
        },
      },

      pagination: {
        el: '.swiper-pagination-custom',
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        clickable: 'true',
      },
    });
  }

  if (pageWidth.matches) {
    createMobileSwiper();
  }

  pageWidth.addEventListener('change', event => {
    if (!event.matches) {
      document.querySelector('.events__swiper-container').classList.remove('events__mobile-swiper', 'swiper-container-initialized', 'swiper-container-horizontal');

      document.querySelector('.events__list').classList.remove('swiper-wrapper');
      // document.querySelector('.events__list').style.transform = 'none';
      // document.querySelector('.events__list').style.transition = 'none';

      document.querySelectorAll('.events__item:nth-child(1n + 4)').forEach(item => {
        item.style.display = 'none';
      });

      document.querySelectorAll('.events__item').forEach(item => {
        item.classList.remove('swiper-slide', 'swiper-slide-active');
        item.style.width = '';
        item.style.marginRight = '';
      });

      if (document.querySelector('.all-events-btn').classList.contains('all-events-btn__hidden')) {
        document.querySelector('.all-events-btn').classList.remove('all-events-btn__hidden');
      }
    } else {
      createMobileSwiper();
    }
  });
});


