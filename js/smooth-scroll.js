const windowWidth = window.matchMedia('(max-width: 1439px)');
let anchors = document.querySelectorAll('button[name*="#author"]');

windowWidth.addEventListener('change', (event) => {
  if (event.matches) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('name').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }
});
