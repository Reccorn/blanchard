document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target === document.querySelector('#burger')) {
      document.querySelector('#burger-menu').classList.add('menu-block__active');
    } else if (event.target !== document.querySelector('#burger-menu')) {
      if (!event.target.classList.contains('menu-list')) {
        if (!event.target.classList.contains('nav-menu__item')) {
          burgerClosing();
        }
      }
    }
  });

  document.querySelector('.menu__close-btn').addEventListener('click', function () {
    burgerClosing();
  });

  function burgerClosing() {
    document.querySelector('#burger-menu').classList.remove('menu-block__active');
  }
});