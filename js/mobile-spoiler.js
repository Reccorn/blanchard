document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.mobile-spoiler__checkbox').forEach(function (categoryActivating) {
    categoryActivating.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelector('.publications__mobile-spoiler').classList.add('publications__mobile-spoiler__clicked-checkbox');
      document.querySelector('.publications__chosen-category').classList.add('publications__chosen-category__active');
      document.querySelector(`[data-target="${path}"]`).classList.remove('categories-list__item__hidden');
    });
  });

  document.querySelectorAll('.categories-list__close-button').forEach(function (categoryClosing) {
    categoryClosing.addEventListener('click', function () {
      const buttonPath = event.currentTarget.dataset.path;

      document.querySelector(`[data-target="${buttonPath}"]`).classList.add('categories-list__item__hidden');
    });
  });

});