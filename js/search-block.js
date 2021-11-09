document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.querySelector('.header-top__search-btn');
  const searchBlock = document.querySelector('.header-top__search-block');
  const closeBtn = document.querySelector('.search-block__close-btn');

  document.addEventListener('click', function (clickEvent) {
    if (clickEvent.target === searchBtn) {
      searchBtn.classList.add('header-top__search-btn__clicked');
      searchBlock.classList.add('header-top__search-block__active');
    } else if (!clickEvent.target.classList.contains('header-top__search-block')) {
      if (!clickEvent.target.classList.contains('form-search')) {
        if (!clickEvent.target.classList.contains('form-search__btn')) {
          if (!clickEvent.target.classList.contains('form-search__input')) {
            searchClosing();
          }
        }
      }
    }
  });

  closeBtn.addEventListener('click', function () {
    searchClosing();
  });

  function searchClosing() {
    searchBlock.classList.remove('header-top__search-block__active');
    searchBtn.classList.remove('header-top__search-btn__clicked');
  }
});