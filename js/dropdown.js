document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.menu-list__btn').forEach(function (close) {
    if (close.classList.contains('dropdown__active')) {
      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('dropdown__active')) {
          document.querySelectorAll('.dropdown').forEach(function (hide) {
            hide.classList.remove('dropdown__active');
          });

          document.querySelectorAll('.menu-list__btn').forEach((close) => {
            close.classList.remove('menu-list__btn__active');
          });
        }
      });
    } else {
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
          activeBtn.classList.add('menu-list__btn__active');
          document.querySelector(`[data-target="${path}"]`).classList.add('dropdown__active');

          // document.querySelectorAll('.dropdown__link').forEach(function (close) {
          //   close.addEventListener('click', function () {
          //     document.querySelectorAll('.dropdown').forEach(function (hide) {
          //       hide.classList.remove('dropdown__active');
          //       activeBtn.classList.remove('menu-list__btn__active');
          //     });
          //   });
          // });

          // document.addEventListener('click', function (e) {
          //   if (!e.target.classList.contains('menu-list__btn')) {
          //     document.querySelectorAll('.dropdown').forEach(function (hide) {
          //       hide.classList.remove('dropdown__active');
          //       activeBtn.classList.remove('menu-list__btn__active');
          //     });
          //   }
          // });
        });
      });
    }
  });

  // document.querySelectorAll('.dropdown').forEach(function (close) {
  //   if (close.classList.contains('dropdown__active')) {
  //     document.addEventListener("click", function (e) {
  //       if (!e.target.classList.contains('dropdown__active')) {
  //         document.querySelectorAll('.dropdown').forEach(function (hide) {
  //           hide.classList.remove('dropdown__active');
  //         });
  //
  //         document.querySelectorAll('.menu-list__btn').forEach((close) => {
  //           close.classList.remove('menu-list__btn__active');
  //         });
  //       }
  //     });
  //   }
  // });
});