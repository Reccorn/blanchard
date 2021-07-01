document.addEventListener('DOMContentLoaded', function () {
  const eventsButton = document.querySelector('.all-events-btn');

  eventsButton.addEventListener('click', function () {
    document.querySelectorAll('.events__item').forEach(function (event) {
      event.style.display = "block";
    });

    document.querySelectorAll('.events__item:nth-child(3n + 1)').forEach(function (item) {
      item.classList.add('events__item__margin');
    });

    document.querySelector('.all-events-btn').classList.add('all-events-btn__hidden');
  });
});