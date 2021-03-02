document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.bottom-menu-link').forEach(function (drops) {
    drops.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.bottom-menu-link').forEach(function (unactive) {
        unactive.classList.remove('bottom-menu-link-active');
      });

      document.querySelectorAll('.dropdown').forEach(function (hide) {
        hide.classList.remove('dropdown-active');
      });

      const activeLink = document.querySelector(`[data-path="${path}"]`);
      // document.querySelector(`[data-path="${path}"]`).classList.add('bottom-menu-link-active');
      activeLink.classList.add('bottom-menu-link-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-active');

      document.querySelectorAll('.dropdown-link').forEach(function (close) {
        close.addEventListener('click', function () {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown-active');
            activeLink.classList.remove('bottom-menu-link-active');
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('bottom-menu-link')) {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown-active');
            activeLink.classList.remove('bottom-menu-link-active');
          });
        }
      });
    });
  });
});