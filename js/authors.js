document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.author-link').forEach(function (authorChoice) {
    authorChoice.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.author-link').forEach(function (unactive) {
        unactive.classList.remove('author-chosen');
      });

      document.querySelectorAll('.catalog-left-block').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-left-block-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('author-chosen');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left-block-active');
    });
  });
});