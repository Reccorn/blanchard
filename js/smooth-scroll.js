document.addEventListener('DOMContentLoaded', () => {
  const windowWidth = window.matchMedia('(max-width: 1439px)');
  let anchors = document.querySelectorAll('button[name*="#author"]');

  function f() {
    for (let anchor of anchors) {
      const blockID = anchor.getAttribute('name').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  if (windowWidth.matches) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', f);
    }
  }

  windowWidth.addEventListener('change', event => {
  if (event.matches) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', f);
    }
  } else {
    for (let anchor of anchors) {
      anchor.removeEventListener('click', f, false);
    }
  }
});
});


