document.addEventListener('DOMContentLoaded', function () {
  const eventsButton = document.querySelector('.all-events-btn');

  eventsButton.addEventListener('click', function () {
    document.querySelectorAll('.events__item').forEach(function (event) {
      event.style.display = "block";
    });

    document.querySelector('.events__item:nth-child(1)').classList.add('events__item__margin');
    document.querySelector('.events__item:nth-child(3)').classList.add('events__item__margin');

    document.querySelector('.all-events-btn').classList.add('all-events-btn__hidden');
  });
});