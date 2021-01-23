document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.language-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.language-btn').forEach(function (unactive) {
        unactive.classList.remove('language-btn-active');
      });

      document.querySelectorAll('.catalog-content-blocks').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-content-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('language-btn-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content-active');
    });
  });
});