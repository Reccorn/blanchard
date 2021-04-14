document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.menu-list__btn').forEach(function (drops) {
    drops.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.menu-list__btn').forEach(function (unactive) {
        unactive.classList.remove('menu-list__btn__active');
      });

      document.querySelectorAll('.dropdown').forEach(function (hide) {
        hide.classList.remove('dropdown__active');
      });

      const activeBtn = document.querySelector(`[data-path="${path}"]`);
      // document.querySelector(`[data-path="${path}"]`).classList.add('bottom-menu-link-active');
      activeBtn.classList.add('menu-list__btn__active');
      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown__active');

      document.querySelectorAll('.dropdown__link').forEach(function (close) {
        close.addEventListener('click', function () {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown__active');
            activeBtn.classList.remove('menu-list__btn__active');
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('menu-list__btn')) {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown__active');
            activeBtn.classList.remove('menu-list__btn__active');
          });
        }
      });
    });
  });
});