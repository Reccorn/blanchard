const mySwiper = new Swiper('.events__mobile-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination-custom',
    // type: '.bullets',
    bulletClass: 'swiper-pagination-bullet-custom',
    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
    clickable: 'true',
  },
});