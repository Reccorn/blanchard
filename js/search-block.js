document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.querySelector('.header-top__search-btn');
  const searchBlock =  document.querySelector('.header-top__search-block');
  const closeBtn = document.querySelector('.search-block__close-btn');

  searchBtn.addEventListener('click', function () {
    searchBtn.classList.add('header-top__search-btn__clicked');
    searchBlock.classList.add('header-top__search-block__active');
    document.querySelector('.header-top__logo').classList.add('header-top__logo__search-opened');

    // document.addEventListener('click', function (b) {
    //   if (b.target !== searchBlock) {
    //     searchBtn.classList.remove('header-top__search-btn__clicked');
    //     searchBlock.classList.remove('header-top__search-block__active');
    //     document.querySelector('.header-top__logo').classList.remove('header-top__logo__search-opened');
    //   }
    // });
  });

  closeBtn.addEventListener('click', function () {
    searchBlock.classList.remove('header-top__search-block__active');
    searchBtn.classList.remove('header-top__search-btn__clicked');
    document.querySelector('.header-top__logo').classList.remove('header-top__logo__search-opened');
  });
});