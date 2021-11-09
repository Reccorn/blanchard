document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.languages-list__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.languages-list__btn').forEach(function (unactive) {
        unactive.classList.remove('languages-list__btn__active');
      });

      document.querySelectorAll('.catalog__content-blocks').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__content__active');
      });
      document.querySelectorAll('.catalog__left-block').forEach(function (leftContent) {
        leftContent.classList.remove('catalog__left-block__active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('languages-list__btn__active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content__active');
    });
  });
});