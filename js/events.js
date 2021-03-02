document.addEventListener('DOMContentLoaded', function () {
  const eventsButton = document.querySelector('.all-events');

  eventsButton.addEventListener('click', function () {
    document.querySelector('.hidden-events').classList.remove('hidden-events');

    document.querySelector('.all-events').classList.add('all-events-hidden');
  });
});