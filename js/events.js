document.addEventListener('DOMContentLoaded', function () {
  const eventsButton = document.querySelector('.all-events-btn');

  eventsButton.addEventListener('click', function () {
    document.querySelector('.hidden-events').classList.remove('hidden-events');

    document.querySelector('.all-events-btn').classList.add('all-events-btn__hidden');
  });
});