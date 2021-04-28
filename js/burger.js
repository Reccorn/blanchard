document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger-menu').classList.toggle('menu-block__active');
    document.querySelector('#burger').classList.toggle('header-top__menu-btn__active');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('menu-block')) {
      document.querySelector('.menu-block')(function (blockHiding) {
        blockHiding.classList.remove('menu-block__active');
        document.querySelector('#burger').classList.remove('header-top__menu-btn__active');
      });
    }
  });
});