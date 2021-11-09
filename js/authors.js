document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.authors-list__btn').forEach(function (authorChoice) {
    authorChoice.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.authors-list__btn').forEach(function (unactive) {
        unactive.classList.remove('authors-list__btn__chosen');
      });

      document.querySelectorAll('.catalog__left-block').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__left-block__active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('authors-list__btn__chosen');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-block__active');
    });
  });
});