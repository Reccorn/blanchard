document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.projects__tooltip').forEach(function (openingTooltip) {
    openingTooltip.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      const tooltip = document.getElementById(`${path}`);

      tooltip.classList.toggle('projects__tooltip__clicked');

      document.querySelector(`[data-target="${path}"]`).classList.toggle('projects__popup__active');

      // document.addEventListener('click', function (event) {
      //   if (!event.target.classList.contains('.projects__tooltip')) {
      //     document.querySelectorAll('.projects__tooltip').forEach(function (closingTooltip) {
      //       closingTooltip.classList.remove('projects__tooltip__active');
      //     });
      //
      //     document.querySelectorAll('.projects__popup').forEach(function (closingPopup) {
      //       closingPopup.classList.remove('projects__popup__active');
      //     });
      //   }
      // });
    });
  });
});