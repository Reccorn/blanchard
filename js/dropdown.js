document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.bottom-menu-link').forEach(function (drops) {
    drops.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.dropdown').forEach(function (hide) {
        hide.classList.remove('dropdown-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-active');

      document.querySelectorAll('.dropdown-link').forEach(function (close) {
        close.addEventListener('click', function (event) {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown-active');
          });
        });
      });
    });
  });
});