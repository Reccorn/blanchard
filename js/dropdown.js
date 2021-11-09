document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('menu-list__btn')) {
      const path = event.target.dataset.path;

      dropdownClosing();

      const activeBtn = document.querySelector(`[data-path="${path}"]`);
      activeBtn.classList.add('menu-list__btn__active');
      document.querySelector(`[data-target="${path}"]`).classList.add('dropdown__active');
    } else if (!event.target.classList.contains('dropdown')) {
      dropdownClosing();
    }
  });

  function dropdownClosing() {
    document.querySelectorAll('.menu-list__btn').forEach(function (unactive) {
      unactive.classList.remove('menu-list__btn__active');
    });

    document.querySelectorAll('.dropdown').forEach(function (hide) {
      hide.classList.remove('dropdown__active');
    });
  }
});