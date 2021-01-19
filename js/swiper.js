const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});