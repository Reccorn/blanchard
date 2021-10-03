document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.add('menu-block__active');

    document.querySelector('.menu__close-btn').addEventListener('click', function () {
      document.querySelector('#burger-menu').classList.remove('menu-block__active');
    });
  });
});