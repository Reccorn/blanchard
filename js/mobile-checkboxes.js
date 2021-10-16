document.addEventListener('DOMContentLoaded', function () {
  const spoilerBtn = document.querySelector('.mobile-spoiler__heading');
  const spoilerList = document.querySelector('.mobile-spoiler__categories-list');
  const items = document.querySelectorAll('.categories-list__item');

  items.forEach(item => {
    const closeBtn = item.querySelector('.categories-list__close-button');

    if (item.querySelector('input').checked) {
      itemToggling(item, 'show');

      closeBtn.classList.add('categories-list__close-button__active');

      closeBtn.addEventListener('click', function () {
        itemClosing(item, closeBtn);
      });
    }

    item.querySelector('input').addEventListener('click', function () {
      if (!item.querySelector('input').checked) {
        if (!spoilerList.classList.contains('mobile-spoiler__categories-list__active')) {
          itemToggling(item, 'hide');

          closeBtn.classList.remove('categories-list__close-button__active');
        }
      }
    });
  });

  spoilerBtn.addEventListener('click', spoilerToggling);


  function spoilerToggling() {
    if (!spoilerList.classList.contains('mobile-spoiler__categories-list__active')) {
      spoilerBtn.classList.add('mobile-spoiler__heading__active');

      spoilerList.classList.add('mobile-spoiler__categories-list__active');

      items.forEach(item => {
        itemToggling(item, 'show');
      });
    } else {
      spoilerBtn.classList.remove('mobile-spoiler__heading__active');

      spoilerList.classList.remove('mobile-spoiler__categories-list__active');

      items.forEach(item => {
        const closeBtn = item.querySelector('.categories-list__close-button');

        if (item.querySelector('input').checked) {
          itemToggling(item, 'show');

          closeBtn.classList.add('categories-list__close-button__active');

          closeBtn.addEventListener('click', function () {
            itemClosing(item, closeBtn);
          });
        } else {
          itemToggling(item, 'hide');
        }
      });
    }
  }

  function itemToggling(item, action) {
    if (action === 'show') {
      item.classList.add('categories-list__item__active');
      setTimeout(function () {
        item.classList.add('categories-list__item__animated');
      }, 100);
    } else {
      item.classList.remove('categories-list__item__animated');
      setTimeout(function () {
        item.classList.remove('categories-list__item__active');
      }, 300);
    }
  }

  function itemClosing(item, btn) {
    itemToggling(item, 'hide');

    item.querySelector('input').checked = false;

    btn.classList.remove('categories-list__close-button__active');
  }
});